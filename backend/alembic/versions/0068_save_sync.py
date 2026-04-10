"""Add device-based save synchronization

Revision ID: 0068_save_sync
Revises: 0067_romfile_category_enum_cheat
Create Date: 2026-01-17

"""

import sqlalchemy as sa
from alembic import op

from utils.migration_helpers import (
    add_column_if_not_exists,
    create_index_if_not_exists_op,
    create_table_if_not_exists,
    drop_column_if_exists,
    drop_index_if_exists_op,
    drop_table_if_exists,
)

revision = "0068_save_sync"
down_revision = "0067_romfile_category_enum_cheat"
branch_labels = None
depends_on = None


def upgrade():
    create_table_if_not_exists(
        op,
        "devices",
        sa.Column("id", sa.String(255), primary_key=True),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.Column("name", sa.String(255), nullable=True),
        sa.Column("platform", sa.String(50), nullable=True),
        sa.Column("client", sa.String(50), nullable=True),
        sa.Column("client_version", sa.String(50), nullable=True),
        sa.Column("ip_address", sa.String(45), nullable=True),
        sa.Column("mac_address", sa.String(17), nullable=True),
        sa.Column("hostname", sa.String(255), nullable=True),
        sa.Column(
            "sync_mode",
            sa.Enum("API", "FILE_TRANSFER", "PUSH_PULL", name="syncmode"),
            nullable=False,
            server_default="API",
        ),
        sa.Column("sync_enabled", sa.Boolean(), nullable=False, server_default="1"),
        sa.Column("last_seen", sa.TIMESTAMP(timezone=True), nullable=True),
        sa.Column(
            "created_at",
            sa.TIMESTAMP(timezone=True),
            server_default=sa.text("now()"),
            nullable=False,
        ),
        sa.Column(
            "updated_at",
            sa.TIMESTAMP(timezone=True),
            server_default=sa.text("now()"),
            nullable=False,
        ),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
    )

    create_table_if_not_exists(
        op,
        "device_save_sync",
        sa.Column("device_id", sa.String(255), nullable=False),
        sa.Column("save_id", sa.Integer(), nullable=False),
        sa.Column("last_synced_at", sa.TIMESTAMP(timezone=True), nullable=False),
        sa.Column("is_untracked", sa.Boolean(), nullable=False, server_default="0"),
        sa.Column(
            "created_at",
            sa.TIMESTAMP(timezone=True),
            server_default=sa.text("now()"),
            nullable=False,
        ),
        sa.Column(
            "updated_at",
            sa.TIMESTAMP(timezone=True),
            server_default=sa.text("now()"),
            nullable=False,
        ),
        sa.ForeignKeyConstraint(["device_id"], ["devices.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["save_id"], ["saves.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("device_id", "save_id"),
    )

    with op.batch_alter_table("saves", schema=None) as batch_op:
        add_column_if_not_exists(
            batch_op, sa.Column("slot", sa.String(255), nullable=True)
        )
        add_column_if_not_exists(
            batch_op, sa.Column("content_hash", sa.String(32), nullable=True)
        )

    create_index_if_not_exists_op(op, "ix_devices_user_id", "devices", ["user_id"])
    create_index_if_not_exists_op(op, "ix_devices_last_seen", "devices", ["last_seen"])
    create_index_if_not_exists_op(
        op, "ix_device_save_sync_save_id", "device_save_sync", ["save_id"]
    )
    create_index_if_not_exists_op(op, "ix_saves_slot", "saves", ["slot"])
    create_index_if_not_exists_op(
        op, "ix_saves_rom_user_hash", "saves", ["rom_id", "user_id", "content_hash"]
    )


def downgrade():
    drop_index_if_exists_op(op, "ix_saves_rom_user_hash", "saves")
    drop_index_if_exists_op(op, "ix_saves_slot", "saves")
    drop_index_if_exists_op(op, "ix_device_save_sync_save_id", "device_save_sync")
    drop_index_if_exists_op(op, "ix_devices_last_seen", "devices")
    drop_index_if_exists_op(op, "ix_devices_user_id", "devices")

    with op.batch_alter_table("saves", schema=None) as batch_op:
        drop_column_if_exists(batch_op, "content_hash")
        drop_column_if_exists(batch_op, "slot")

    drop_table_if_exists(op, "device_save_sync")
    drop_table_if_exists(op, "devices")
    op.execute("DROP TYPE IF EXISTS syncmode")
