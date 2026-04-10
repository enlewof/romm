"""Add email to users table

Revision ID: 0028_user_email
Revises: 0027_platforms_data
Create Date: 2024-12-09 19:26:34.257411

"""

import sqlalchemy as sa
from alembic import op

from utils.migration_helpers import (
    add_column_if_not_exists,
    create_index_if_not_exists,
    drop_column_if_exists,
    drop_index_if_exists,
)

# revision identifiers, used by Alembic.
revision = "0028_user_email"
down_revision = "0027_platforms_data"
branch_labels = None
depends_on = None


def upgrade() -> None:
    with op.batch_alter_table("users", schema=None) as batch_op:
        add_column_if_not_exists(
            batch_op, sa.Column("email", sa.String(length=255), nullable=True)
        )
        create_index_if_not_exists(
            batch_op, batch_op.f("ix_users_email"), ["email"], unique=True
        )


def downgrade() -> None:
    with op.batch_alter_table("users", schema=None) as batch_op:
        drop_index_if_exists(batch_op, batch_op.f("ix_users_email"))
        drop_column_if_exists(batch_op, "email")
