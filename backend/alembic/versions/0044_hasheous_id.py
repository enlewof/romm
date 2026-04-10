"""Add Hasheous and TGDB data

Revision ID: 0044_hasheous_id
Revises: 0043_launchbox_id
Create Date: 2025-06-16 03:15:42.692551

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
revision = "0044_hasheous_id"
down_revision = "0043_launchbox_id"
branch_labels = None
depends_on = None


def upgrade() -> None:
    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            batch_op, sa.Column("hasheous_id", sa.Integer(), nullable=True)
        )
        add_column_if_not_exists(
            batch_op, sa.Column("tgdb_id", sa.Integer(), nullable=True)
        )
        add_column_if_not_exists(
            batch_op,
            sa.Column(
                "hasheous_metadata",
                sa.JSON().with_variant(
                    postgresql.JSONB(astext_type=sa.Text()), "postgresql"
                ),
                nullable=True,
            ),
        )
        create_index_if_not_exists(
            batch_op, "idx_roms_hasheous_id", ["hasheous_id"], unique=False
        )
        create_index_if_not_exists(
            batch_op, "idx_roms_tgdb_id", ["tgdb_id"], unique=False
        )

    with op.batch_alter_table("platforms", schema=None) as batch_op:
        add_column_if_not_exists(
            batch_op, sa.Column("hasheous_id", sa.Integer(), nullable=True)
        )
        add_column_if_not_exists(
            batch_op, sa.Column("tgdb_id", sa.Integer(), nullable=True)
        )


def downgrade() -> None:
    with op.batch_alter_table("platforms", schema=None) as batch_op:
        drop_column_if_exists(batch_op, "hasheous_id")
        drop_column_if_exists(batch_op, "tgdb_id")

    with op.batch_alter_table("roms", schema=None) as batch_op:
        drop_index_if_exists(batch_op, "idx_roms_tgdb_id")
        drop_index_if_exists(batch_op, "idx_roms_hasheous_id")
        drop_column_if_exists(batch_op, "hasheous_metadata")
        drop_column_if_exists(batch_op, "tgdb_id")
        drop_column_if_exists(batch_op, "hasheous_id")
