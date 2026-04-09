"""Add hashes to roms

Revision ID: 0025_roms_hashes
Revises: 0024_sibling_roms_db_view
Create Date: 2024-08-11 21:50:53.301352

"""

import sqlalchemy as sa
from alembic import op

from utils.migration_helpers import add_column_if_not_exists, drop_column_if_exists

# revision identifiers, used by Alembic.
revision = "0025_roms_hashes"
down_revision = "0024_sibling_roms_db_view"
branch_labels = None
depends_on = None


def upgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            batch_op, sa.Column("crc_hash", sa.String(length=100), nullable=True)
        )
        add_column_if_not_exists(
            batch_op, sa.Column("md5_hash", sa.String(length=100), nullable=True)
        )
        add_column_if_not_exists(
            batch_op, sa.Column("sha1_hash", sa.String(length=100), nullable=True)
        )


def downgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        drop_column_if_exists(batch_op, "sha1_hash")
        drop_column_if_exists(batch_op, "md5_hash")
        drop_column_if_exists(batch_op, "crc_hash")
