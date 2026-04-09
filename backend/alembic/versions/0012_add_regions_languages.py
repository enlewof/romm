"""Add support for multiple regions and languages

Revision ID: 0012_add_regions_languages
Revises: 0011_drop_has_cover
Create Date: 2023-12-03 10:54:46.859106

"""

import sqlalchemy as sa
from alembic import op

from utils.database import CustomJSON, is_postgresql
from utils.migration_helpers import add_column_if_not_exists, drop_column_if_exists

# revision identifiers, used by Alembic.
revision = "0012_add_regions_languages"
down_revision = "0011_drop_has_cover"
branch_labels = None
depends_on = None


def upgrade() -> None:
    connection = op.get_bind()

    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            batch_op, sa.Column("regions", CustomJSON(), nullable=True)
        )
        add_column_if_not_exists(
            batch_op, sa.Column("languages", CustomJSON(), nullable=True)
        )

    with op.batch_alter_table("roms", schema=None) as batch_op:
        # Set default values for languages and regions
        if is_postgresql(connection):
            batch_op.execute("UPDATE roms SET languages = jsonb_build_array()")
            batch_op.execute("UPDATE roms SET regions = jsonb_build_array(region)")
        else:
            batch_op.execute("UPDATE roms SET languages = JSON_ARRAY()")
            batch_op.execute("UPDATE roms SET regions = JSON_ARRAY(region)")
        drop_column_if_exists(batch_op, "region")


def downgrade() -> None:
    connection = op.get_bind()

    with op.batch_alter_table("roms", schema=None) as batch_op:
        add_column_if_not_exists(
            batch_op, sa.Column("region", sa.VARCHAR(length=20), nullable=True)
        )

    with op.batch_alter_table("roms", schema=None) as batch_op:
        if is_postgresql(connection):
            batch_op.execute("UPDATE roms SET region = regions->>0")
        else:
            batch_op.execute("UPDATE roms SET region = JSON_EXTRACT(regions, '$[0]')")
        drop_column_if_exists(batch_op, "languages")
        drop_column_if_exists(batch_op, "regions")
