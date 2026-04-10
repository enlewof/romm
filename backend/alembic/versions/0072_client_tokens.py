"""Add client_tokens table for long-lived API tokens

Revision ID: 0072_client_tokens
Revises: 0071_sibling_roms_fs_name
Create Date: 2026-03-10 00:00:00.000000

"""

import sqlalchemy as sa
from alembic import op

from utils.migration_helpers import (
    create_index_if_not_exists,
    create_table_if_not_exists,
    drop_index_if_exists,
    drop_table_if_exists,
)

# revision identifiers, used by Alembic.
revision = "0072_client_tokens"
down_revision = "0071_sibling_roms_fs_name"
branch_labels = None
depends_on = None


def upgrade() -> None:
    create_table_if_not_exists(
        op,
        "client_tokens",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("user_id", sa.Integer(), nullable=False),
        sa.Column("name", sa.String(length=255), nullable=False),
        sa.Column("hashed_token", sa.String(length=64), nullable=False),
        sa.Column("scopes", sa.String(length=1000), nullable=False),
        sa.Column("expires_at", sa.TIMESTAMP(timezone=True), nullable=True),
        sa.Column("last_used_at", sa.TIMESTAMP(timezone=True), nullable=True),
        sa.Column(
            "created_at",
            sa.TIMESTAMP(timezone=True),
            nullable=False,
            server_default=sa.text("CURRENT_TIMESTAMP"),
        ),
        sa.Column(
            "updated_at",
            sa.TIMESTAMP(timezone=True),
            nullable=False,
            server_default=sa.text("CURRENT_TIMESTAMP"),
        ),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    with op.batch_alter_table("client_tokens") as batch_op:
        create_index_if_not_exists(
            batch_op,
            batch_op.f("ix_client_tokens_hashed_token"),
            ["hashed_token"],
            unique=True,
        )
        create_index_if_not_exists(
            batch_op,
            batch_op.f("ix_client_tokens_user_id"),
            ["user_id"],
        )


def downgrade() -> None:
    with op.batch_alter_table("client_tokens") as batch_op:
        drop_index_if_exists(batch_op, batch_op.f("ix_client_tokens_user_id"))
        drop_index_if_exists(batch_op, batch_op.f("ix_client_tokens_hashed_token"))
    drop_table_if_exists(op, "client_tokens")
