"""Add HowLongToBeat metadata fields

Revision ID: 0053_add_hltb_metadata
Revises: 0052_roms_metadata_flashpoint
Create Date: 2025-09-14 00:00:00.000000

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

# revision identifiers, used by Alembic.
revision = "0053_add_hltb_metadata"
down_revision = "0052_roms_metadata_flashpoint"
branch_labels = None
depends_on = None


def upgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            batch_op, sa.Column("hltb_id", sa.Integer(), nullable=True)
        )
        add_column_if_not_exists(
            batch_op,
            sa.Column(
                "hltb_metadata",
                sa.JSON().with_variant(
                    postgresql.JSONB(astext_type=sa.Text()), "postgresql"
                ),
                nullable=True,
            ),
        )
        create_index_if_not_exists(
            batch_op, "idx_roms_hltb_id", ["hltb_id"], unique=False
        )


def downgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        drop_index_if_exists(batch_op, "idx_roms_hltb_id")
        drop_column_if_exists(batch_op, "hltb_metadata")
        drop_column_if_exists(batch_op, "hltb_id")
