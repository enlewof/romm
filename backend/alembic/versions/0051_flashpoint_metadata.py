"""Add Flashpoint metadata

Revision ID: 0051_flashpoint_metadata
Revises: 0050_firmware_add_is_verified
Create Date: 2025-08-27 16:53:19.567809

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
revision = "0051_flashpoint_metadata"
down_revision = "0050_firmware_add_is_verified"
branch_labels = None
depends_on = None


def upgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            batch_op, sa.Column("flashpoint_id", sa.String(length=100), nullable=True)
        )
        add_column_if_not_exists(
            batch_op,
            sa.Column(
                "flashpoint_metadata",
                sa.JSON().with_variant(
                    postgresql.JSONB(astext_type=sa.Text()), "postgresql"
                ),
                nullable=True,
            ),
        )
        create_index_if_not_exists(
            batch_op, "idx_roms_flashpoint_id", ["flashpoint_id"], unique=False
        )


def downgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        drop_index_if_exists(batch_op, "idx_roms_flashpoint_id")
        drop_column_if_exists(batch_op, "flashpoint_metadata")
        drop_column_if_exists(batch_op, "flashpoint_id")
