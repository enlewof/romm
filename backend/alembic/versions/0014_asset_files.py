"""Introduce saves, screenshots, and states tables and refactor database schema

Revision ID: 0014_asset_files
Revises: 0013_upgrade_file_extension
Create Date: 2024-02-08 15:03:26.338964

"""

import os

import sqlalchemy as sa
from alembic import op
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

from config import ROMM_DB_DRIVER
from config.config_manager import SQLITE_DB_BASE_PATH, ConfigManager
from utils.database import CustomJSON, is_postgresql
from utils.migration_helpers import (
    add_column_if_not_exists,
    create_table_if_not_exists,
    drop_column_if_exists,
    drop_table_if_exists,
)

# revision identifiers, used by Alembic.
revision = "0014_asset_files"
down_revision = "0013_upgrade_file_extension"
branch_labels = None
depends_on = None

SIZE_UNIT_TO_BYTES = {
    "B": 1,
    "KB": 1024,
    "MB": 1024**2,
    "GB": 1024**3,
    "TB": 1024**4,
    "PB": 1024**5,
}


def migrate_to_supported_engine() -> None:
    if ROMM_DB_DRIVER not in ("mariadb", "mysql", "postgresql"):
        raise Exception(
            "Version 3.0 requires MariaDB, MySQL, or PostgreSQL as database driver!"
        )

    # Skip if sqlite database is not mounted
    if not os.path.exists(f"{SQLITE_DB_BASE_PATH}/romm.db"):
        return None

    engine = create_engine(ConfigManager.get_db_engine(), pool_pre_ping=True)
    session = sessionmaker(bind=engine, expire_on_commit=False)

    sqlite_engine = create_engine(
        f"sqlite:////{SQLITE_DB_BASE_PATH}/romm.db", pool_pre_ping=True
    )
    sqlite_session = sessionmaker(bind=sqlite_engine, expire_on_commit=False)

    # Copy all data from sqlite to new database
    with session.begin() as conn:
        with sqlite_session.begin() as sqlite_conn:
            conn.execute(text("SET FOREIGN_KEY_CHECKS=0"))

            tables = sqlite_conn.execute(
                text("SELECT name FROM sqlite_master WHERE type='table';")
            ).fetchall()
            for table_name in tables:
                table_name = table_name[0]

                # Skip migration for the 'alembic_version' table
                if table_name == "alembic_version":
                    continue

                table_data = sqlite_conn.execute(
                    text(f"SELECT * FROM {table_name}")  # nosec B608
                ).fetchall()

                # Insert data into new tables
                for row in table_data:
                    mapped_row = {f"{i}": value for i, value in enumerate(row, start=1)}
                    columns = ",".join([f":{i}" for i in range(1, len(row) + 1)])
                    insert_query = (
                        f"INSERT INTO {table_name} VALUES ({columns})"  # nosec B608
                    )
                    conn.execute(text(insert_query), mapped_row)

            conn.execute(text("SET FOREIGN_KEY_CHECKS=1"))


def upgrade() -> None:
    migrate_to_supported_engine()

    connection = op.get_bind()

    create_table_if_not_exists(
        "saves",
        sa.Column("emulator", sa.String(length=50), nullable=True),
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column(
            "created_at", sa.DateTime(), server_default=sa.text("now()"), nullable=False
        ),
        sa.Column(
            "updated_at", sa.DateTime(), server_default=sa.text("now()"), nullable=False
        ),
        sa.Column("file_name", sa.String(length=450), nullable=False),
        sa.Column("file_name_no_tags", sa.String(length=450), nullable=False),
        sa.Column("file_name_no_ext", sa.String(length=450), nullable=False),
        sa.Column("file_extension", sa.String(length=100), nullable=False),
        sa.Column("file_path", sa.String(length=1000), nullable=False),
        sa.Column("file_size_bytes", sa.BigInteger(), nullable=False),
        sa.Column("rom_id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(["rom_id"], ["roms.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    create_table_if_not_exists(
        "screenshots",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column(
            "created_at", sa.DateTime(), server_default=sa.text("now()"), nullable=False
        ),
        sa.Column(
            "updated_at", sa.DateTime(), server_default=sa.text("now()"), nullable=False
        ),
        sa.Column("file_name", sa.String(length=450), nullable=False),
        sa.Column("file_name_no_tags", sa.String(length=450), nullable=False),
        sa.Column("file_name_no_ext", sa.String(length=450), nullable=False),
        sa.Column("file_extension", sa.String(length=100), nullable=False),
        sa.Column("file_path", sa.String(length=1000), nullable=False),
        sa.Column("file_size_bytes", sa.BigInteger(), nullable=False),
        sa.Column("rom_id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(["rom_id"], ["roms.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    create_table_if_not_exists(
        "states",
        sa.Column("emulator", sa.String(length=50), nullable=True),
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column(
            "created_at", sa.DateTime(), server_default=sa.text("now()"), nullable=False
        ),
        sa.Column(
            "updated_at", sa.DateTime(), server_default=sa.text("now()"), nullable=False
        ),
        sa.Column("file_name", sa.String(length=450), nullable=False),
        sa.Column("file_name_no_tags", sa.String(length=450), nullable=False),
        sa.Column("file_name_no_ext", sa.String(length=450), nullable=False),
        sa.Column("file_extension", sa.String(length=100), nullable=False),
        sa.Column("file_path", sa.String(length=1000), nullable=False),
        sa.Column("file_size_bytes", sa.BigInteger(), nullable=False),
        sa.Column("rom_id", sa.Integer(), nullable=False),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(["rom_id"], ["roms.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )

    # Drop the constraint to platform slug
    with op.batch_alter_table("roms", schema=None) as batch_op:
        batch_op.drop_constraint("fk_platform_roms", type_="foreignkey")

    # Drop the primary key (slug)
    with op.batch_alter_table("platforms", schema=None) as batch_op:
        pk_constraint_name = connection.dialect.get_pk_constraint(
            connection, table_name="platforms"
        )["name"]
        batch_op.drop_constraint(constraint_name=pk_constraint_name, type_="primary")
        drop_column_if_exists("platforms", "n_roms")

    # Switch to new id column as platform primary key
    if is_postgresql(connection):
        op.execute("ALTER TABLE platforms ADD COLUMN id SERIAL PRIMARY KEY")
    else:
        op.execute(
            "ALTER TABLE platforms ADD COLUMN id INTEGER(11) NOT NULL AUTO_INCREMENT PRIMARY KEY"
        )

    # Add new columns to roms table
    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            "roms", sa.Column("file_name_no_ext", sa.String(length=450), nullable=False)
        )
        add_column_if_not_exists(
            "roms", sa.Column("file_size_bytes", sa.BigInteger(), nullable=False)
        )
        add_column_if_not_exists(
            "roms", sa.Column("igdb_metadata", CustomJSON(), nullable=True)
        )
        add_column_if_not_exists(
            "roms", sa.Column("platform_id", sa.Integer(), nullable=False)
        )
        batch_op.alter_column(
            "revision",
            existing_type=sa.VARCHAR(length=20),
            type_=sa.String(length=100),
            existing_nullable=True,
        )

    # Move data around
    with op.batch_alter_table("roms", schema=None) as batch_op:
        if is_postgresql(connection):
            batch_op.execute("update roms set igdb_metadata = jsonb_build_object()")
        else:
            batch_op.execute("update roms set igdb_metadata = JSON_OBJECT()")
        batch_op.execute(
            "update roms set path_cover_s = '', path_cover_l = '', url_cover = '' where url_cover = 'https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png'"
        )
        batch_op.execute(
            "update roms set file_name_no_ext = regexp_replace(file_name, '\\.[a-z]{2,}$', '')"
        )
        if is_postgresql(connection):
            batch_op.execute("""
                UPDATE roms
                SET platform_id = platforms.id
                FROM platforms
                WHERE roms.platform_slug = platforms.slug
                """)
        else:
            batch_op.execute(
                "update roms inner join platforms on roms.platform_slug = platforms.slug set roms.platform_id = platforms.id"
            )

    # Process filesize data and prepare for bulk update
    connection = op.get_bind()
    result = connection.execute(text("SELECT id, file_size, file_size_units FROM roms"))
    updates = []
    for row in result:
        file_size_bytes = int(row[1] * SIZE_UNIT_TO_BYTES.get(row[2], 1))
        updates.append({"id": row[0], "file_size_bytes": file_size_bytes})

    if updates:
        # Perform bulk update
        connection.execute(
            text("UPDATE roms SET file_size_bytes = :file_size_bytes WHERE id = :id"),
            updates,
        )

    # Cleanup roms table
    with op.batch_alter_table("roms", schema=None) as batch_op:
        batch_op.create_foreign_key(
            "fk_platform_id_roms",
            "platforms",
            ["platform_id"],
            ["id"],
            ondelete="CASCADE",
        )
        drop_column_if_exists("roms", "file_size")
        drop_column_if_exists("roms", "file_size_units")
        drop_column_if_exists("roms", "p_sgdb_id")
        drop_column_if_exists("roms", "p_name")
        drop_column_if_exists("roms", "p_igdb_id")
        drop_column_if_exists("roms", "platform_slug")


def downgrade() -> None:
    connection = op.get_bind()

    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            "roms", sa.Column("platform_slug", sa.VARCHAR(length=50), nullable=False)
        )
        add_column_if_not_exists(
            "roms", sa.Column("p_igdb_id", sa.VARCHAR(length=10), nullable=True)
        )
        add_column_if_not_exists(
            "roms", sa.Column("p_name", sa.VARCHAR(length=150), nullable=True)
        )
        add_column_if_not_exists(
            "roms", sa.Column("p_sgdb_id", sa.VARCHAR(length=10), nullable=True)
        )
        add_column_if_not_exists(
            "roms", sa.Column("file_size_units", sa.VARCHAR(length=10), nullable=False)
        )
        add_column_if_not_exists(
            "roms", sa.Column("file_size", sa.FLOAT(), nullable=False)
        )
        batch_op.drop_constraint("fk_platform_id_roms", type_="foreignkey")

    with op.batch_alter_table("roms", schema=None) as batch_op:
        if is_postgresql(connection):
            batch_op.execute("""
                UPDATE roms
                SET platform_slug = platforms.slug
                FROM platforms
                WHERE roms.platform_id = platforms.id
                """)
        else:
            batch_op.execute(
                "update roms inner join platforms on roms.platform_id = platforms.id set roms.platform_slug = platforms.slug"
            )
        batch_op.execute(
            "update roms set url_cover = 'https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png' where url_cover = ''"
        )

    # Process filesize data and prepare for bulk update
    connection = op.get_bind()
    result = connection.execute(text("SELECT id, file_size_bytes FROM roms"))

    updates = []
    for row in result:
        file_size = row[1] / SIZE_UNIT_TO_BYTES["MB"]
        updates.append({"id": row[0], "file_size": file_size, "file_size_units": "MB"})

    if updates:
        # Perform bulk update
        connection.execute(
            text(
                "UPDATE roms SET file_size = :file_size, file_size_units = :file_size_units WHERE id = :id"
            ),
            updates,
        )

    # Cleanup roms table
    with op.batch_alter_table("roms", schema=None) as batch_op:
        drop_column_if_exists("roms", "platform_id")
        drop_column_if_exists("roms", "igdb_metadata")
        drop_column_if_exists("roms", "file_size_bytes")
        drop_column_if_exists("roms", "file_name_no_ext")
        batch_op.alter_column(
            "revision",
            existing_type=sa.String(length=100),
            type_=sa.VARCHAR(length=20),
            existing_nullable=True,
        )

    with op.batch_alter_table("platforms", schema=None) as batch_op:
        add_column_if_not_exists(
            "platforms",
            sa.Column(
                "n_roms",
                sa.INTEGER(),
                autoincrement=False,
                nullable=True,
            ),
        )
        drop_column_if_exists("platforms", "id")
        batch_op.create_primary_key(constraint_name=None, columns=["slug"])

    with op.batch_alter_table("roms", schema=None) as batch_op:
        batch_op.create_foreign_key(
            "fk_platform_roms",
            "platforms",
            ["platform_slug"],
            ["slug"],
            ondelete="CASCADE",
        )

    drop_table_if_exists("states")
    drop_table_if_exists("screenshots")
    drop_table_if_exists("saves")
