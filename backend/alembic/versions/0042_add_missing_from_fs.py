"""Add missing from filesystem to paltform, roms and files

Revision ID: 0042_add_missing_from_fs
Revises: 0041_assets_t_thumb_cleanup
Create Date: 2025-06-11

"""

import sqlalchemy as sa
from alembic import op

from utils.migration_helpers import add_column_if_not_exists, drop_column_if_exists

# revision identifiers, used by Alembic.
revision = "0042_add_missing_from_fs"
down_revision = "0041_assets_t_thumb_cleanup"
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table("platforms", schema=None) as batch_op:
        add_column_if_not_exists(
            op,
            "platforms",
            sa.Column(
                "missing_from_fs", sa.Boolean(), nullable=False, server_default="0"
            ),
        )

    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            op,
            "roms",
            sa.Column(
                "missing_from_fs", sa.Boolean(), nullable=False, server_default="0"
            ),
        )

    with op.batch_alter_table("rom_files", schema=None) as batch_op:
        add_column_if_not_exists(
            op,
            "rom_files",
            sa.Column(
                "missing_from_fs", sa.Boolean(), nullable=False, server_default="0"
            ),
        )

    with op.batch_alter_table("firmware", schema=None) as batch_op:
        add_column_if_not_exists(
            op,
            "firmware",
            sa.Column(
                "missing_from_fs", sa.Boolean(), nullable=False, server_default="0"
            ),
        )

    with op.batch_alter_table("saves", schema=None) as batch_op:
        add_column_if_not_exists(
            op,
            "saves",
            sa.Column(
                "missing_from_fs", sa.Boolean(), nullable=False, server_default="0"
            ),
        )

    with op.batch_alter_table("states", schema=None) as batch_op:
        add_column_if_not_exists(
            op,
            "states",
            sa.Column(
                "missing_from_fs", sa.Boolean(), nullable=False, server_default="0"
            ),
        )

    with op.batch_alter_table("screenshots", schema=None) as batch_op:
        add_column_if_not_exists(
            op,
            "screenshots",
            sa.Column(
                "missing_from_fs", sa.Boolean(), nullable=False, server_default="0"
            ),
        )


def downgrade():
    with op.batch_alter_table("platforms", schema=None) as batch_op:
        drop_column_if_exists(op, "platforms", "missing_from_fs")

    with op.batch_alter_table("roms", schema=None) as batch_op:
        drop_column_if_exists(op, "roms", "missing_from_fs")

    with op.batch_alter_table("rom_files", schema=None) as batch_op:
        drop_column_if_exists(op, "rom_files", "missing_from_fs")

    with op.batch_alter_table("firmware", schema=None) as batch_op:
        drop_column_if_exists(op, "firmware", "missing_from_fs")

    with op.batch_alter_table("saves", schema=None) as batch_op:
        drop_column_if_exists(op, "saves", "missing_from_fs")

    with op.batch_alter_table("states", schema=None) as batch_op:
        drop_column_if_exists(op, "states", "missing_from_fs")

    with op.batch_alter_table("screenshots", schema=None) as batch_op:
        drop_column_if_exists(op, "screenshots", "missing_from_fs")
