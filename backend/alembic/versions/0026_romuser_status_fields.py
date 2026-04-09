"""Add status fields to rom_user table

Revision ID: 0026_romuser_status_fields
Revises: 0025_roms_hashes
Create Date: 2024-08-29 15:52:56.031850

"""

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects.postgresql import ENUM

from utils.database import is_postgresql
from utils.migration_helpers import add_column_if_not_exists, drop_column_if_exists

# revision identifiers, used by Alembic.
revision = "0026_romuser_status_fields"
down_revision = "0025_roms_hashes"
branch_labels = None
depends_on = None


def upgrade() -> None:
    connection = op.get_bind()
    with op.batch_alter_table("collections", schema=None) as batch_op:
        batch_op.alter_column(
            "path_cover_l",
            existing_type=sa.VARCHAR(length=1000),
            type_=sa.Text(),
            existing_nullable=True,
        )
        batch_op.alter_column(
            "path_cover_s",
            existing_type=sa.VARCHAR(length=1000),
            type_=sa.Text(),
            existing_nullable=True,
        )

    if is_postgresql(connection):
        rom_user_status_enum = ENUM(
            "INCOMPLETE",
            "FINISHED",
            "COMPLETED_100",
            "RETIRED",
            "NEVER_PLAYING",
            name="romuserstatus",
            create_type=False,
        )
        rom_user_status_enum.create(connection, checkfirst=False)
    else:
        rom_user_status_enum = sa.Enum(
            "INCOMPLETE",
            "FINISHED",
            "COMPLETED_100",
            "RETIRED",
            "NEVER_PLAYING",
            name="romuserstatus",
        )

    with op.batch_alter_table("rom_user", schema=None) as batch_op:
        add_column_if_not_exists(
            "rom_user",
            sa.Column("last_played", sa.DateTime(timezone=True), nullable=True),
        )
        add_column_if_not_exists(
            "rom_user", sa.Column("backlogged", sa.Boolean(), nullable=False)
        )
        add_column_if_not_exists(
            "rom_user", sa.Column("now_playing", sa.Boolean(), nullable=False)
        )
        add_column_if_not_exists(
            "rom_user", sa.Column("hidden", sa.Boolean(), nullable=False)
        )
        add_column_if_not_exists(
            "rom_user", sa.Column("rating", sa.Integer(), nullable=False)
        )
        add_column_if_not_exists(
            "rom_user", sa.Column("difficulty", sa.Integer(), nullable=False)
        )
        add_column_if_not_exists(
            "rom_user", sa.Column("completion", sa.Integer(), nullable=False)
        )
        add_column_if_not_exists(
            "rom_user", sa.Column("status", rom_user_status_enum, nullable=True)
        )


def downgrade() -> None:
    connection = op.get_bind()

    with op.batch_alter_table("rom_user", schema=None) as batch_op:
        drop_column_if_exists("rom_user", "status")
        drop_column_if_exists("rom_user", "completion")
        drop_column_if_exists("rom_user", "difficulty")
        drop_column_if_exists("rom_user", "rating")
        drop_column_if_exists("rom_user", "hidden")
        drop_column_if_exists("rom_user", "now_playing")
        drop_column_if_exists("rom_user", "backlogged")
        drop_column_if_exists("rom_user", "last_played")

    if is_postgresql(connection):
        ENUM(name="romuserstatus").drop(connection, checkfirst=False)

    with op.batch_alter_table("collections", schema=None) as batch_op:
        batch_op.alter_column(
            "path_cover_s",
            existing_type=sa.Text(),
            type_=sa.VARCHAR(length=1000),
            existing_nullable=True,
        )
        batch_op.alter_column(
            "path_cover_l",
            existing_type=sa.Text(),
            type_=sa.VARCHAR(length=1000),
            existing_nullable=True,
        )
