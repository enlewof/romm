"""Add metadata slugs to platform

Revision ID: 0054_add_platform_metadata_slugs
Revises: 0053_add_hltb_metadata
Create Date: 2025-09-22 21:42:33.654137

"""

import sqlalchemy as sa
from alembic import op

from utils.migration_helpers import add_column_if_not_exists, drop_column_if_exists

# revision identifiers, used by Alembic.
revision = "0054_add_platform_metadata_slugs"
down_revision = "0053_add_hltb_metadata"
branch_labels = None
depends_on = None


def upgrade() -> None:
    with op.batch_alter_table("platforms", schema=None) as batch_op:
        add_column_if_not_exists(
            op, "platforms", sa.Column("flashpoint_id", sa.Integer(), nullable=True)
        )
        add_column_if_not_exists(
            op,
            "platforms",
            sa.Column("igdb_slug", sa.String(length=100), nullable=True),
        )
        add_column_if_not_exists(
            op,
            "platforms",
            sa.Column("moby_slug", sa.String(length=100), nullable=True),
        )
        add_column_if_not_exists(
            op,
            "platforms",
            sa.Column("hltb_slug", sa.String(length=100), nullable=True),
        )


def downgrade() -> None:
    with op.batch_alter_table("platforms", schema=None) as batch_op:
        drop_column_if_exists(op, "platforms", "hltb_slug")
        drop_column_if_exists(op, "platforms", "moby_slug")
        drop_column_if_exists(op, "platforms", "igdb_slug")
        drop_column_if_exists(op, "platforms", "flashpoint_id")
