"""Adds version column to roms table

Revision ID: 0059_rom_version_tag
Revises: 0058_roms_metadata_launchbox
Create Date: 2025-12-30 10:48:45.025990

"""

import sqlalchemy as sa
from alembic import op

from utils.migration_helpers import add_column_if_not_exists, drop_column_if_exists

# revision identifiers, used by Alembic.
revision = "0059_rom_version_tag"
down_revision = "0058_roms_metadata_launchbox"
branch_labels = None
depends_on = None


def upgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            "roms", sa.Column("version", sa.String(length=100), nullable=True)
        )


def downgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        drop_column_if_exists("roms", "version")
