"""Add Launchbox data and remove RetroAchievements metadata from rom_user

Revision ID: 0043_launchbox_id
Revises: 0042_add_missing_from_fs
Create Date: 2025-05-20 22:39:16.993191

"""

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

from utils.database import CustomJSON
from utils.migration_helpers import add_column_if_not_exists, drop_column_if_exists

revision = "0043_launchbox_id"
down_revision = "0042_add_missing_from_fs"
branch_labels = None
depends_on = None


def upgrade() -> None:
    with op.batch_alter_table("rom_user", schema=None) as batch_op:
        drop_column_if_exists("rom_user", "ra_metadata")

    with op.batch_alter_table("platforms", schema=None) as batch_op:
        add_column_if_not_exists(
            "platforms", sa.Column("launchbox_id", sa.Integer(), nullable=True)
        )

    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            "roms", sa.Column("launchbox_id", sa.Integer(), nullable=True)
        )
        add_column_if_not_exists(
            "roms",
            sa.Column(
                "launchbox_metadata",
                sa.JSON().with_variant(
                    postgresql.JSONB(astext_type=sa.Text()), "postgresql"
                ),
                nullable=True,
            ),
        )
        batch_op.create_index("idx_roms_launchbox_id", ["launchbox_id"], unique=False)
        batch_op.create_index("idx_roms_ra_id", ["ra_id"], unique=False)
        batch_op.create_index("idx_roms_sgdb_id", ["sgdb_id"], unique=False)


def downgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        batch_op.drop_index("idx_roms_sgdb_id")
        batch_op.drop_index("idx_roms_ra_id")
        batch_op.drop_index("idx_roms_launchbox_id")
        drop_column_if_exists("roms", "launchbox_metadata")
        drop_column_if_exists("roms", "launchbox_id")

    with op.batch_alter_table("platforms", schema=None) as batch_op:
        drop_column_if_exists("platforms", "launchbox_id")

    with op.batch_alter_table("rom_user", schema=None) as batch_op:
        add_column_if_not_exists(
            "rom_user", sa.Column("ra_metadata", CustomJSON(), nullable=True)
        )
