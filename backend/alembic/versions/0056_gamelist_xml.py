"""

Revision ID: 0056_gamelist_xml
Revises: 0055_collection_is_favorite
Create Date: 2025-10-16 23:07:05.145056

"""

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

from utils.migration_helpers import (
    add_column_if_not_exists,
    create_index_if_not_exists,
    drop_column_if_exists,
    drop_index_if_exists,
)

revision = "0056_gamelist_xml"
down_revision = "0055_collection_is_favorite"
branch_labels = None
depends_on = None


def upgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            batch_op, sa.Column("gamelist_id", sa.String(length=100), nullable=True)
        )
        add_column_if_not_exists(
            batch_op,
            sa.Column(
                "gamelist_metadata",
                sa.JSON().with_variant(
                    postgresql.JSONB(astext_type=sa.Text()), "postgresql"
                ),
                nullable=True,
            ),
        )
        create_index_if_not_exists(
            batch_op, "idx_roms_gamelist_id", ["gamelist_id"], unique=False
        )


def downgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        drop_index_if_exists(batch_op, "idx_roms_gamelist_id")
        drop_column_if_exists(batch_op, "gamelist_metadata")
        drop_column_if_exists(batch_op, "gamelist_id")
