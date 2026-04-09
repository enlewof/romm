from alembic import op
from sqlalchemy import inspect

# ---------------------------------------------------------------------------
# Table helpers
# ---------------------------------------------------------------------------


def create_table_if_not_exists(table_name, *args, **kwargs):
    """Wrap op.create_table with an existence check.

    On MySQL/MariaDB, DDL auto-commits and cannot be rolled back. If a
    migration is interrupted after CREATE TABLE but before the Alembic
    version stamp is written, the next run would crash with "table already
    exists." This guard makes table-creation migrations re-runnable.
    """
    bind = op.get_bind()
    if not inspect(bind).has_table(table_name):
        return op.create_table(table_name, *args, **kwargs)
    return None


def drop_table_if_exists(table_name):
    """Wrap op.drop_table with an existence check."""
    bind = op.get_bind()
    if inspect(bind).has_table(table_name):
        op.drop_table(table_name)


# ---------------------------------------------------------------------------
# Column helpers
# ---------------------------------------------------------------------------


def _get_column_names(table_name):
    """Return the set of column names currently on *table_name*."""
    bind = op.get_bind()
    return {c["name"] for c in inspect(bind).get_columns(table_name)}


def add_column_if_not_exists(table_name, column):
    """Wrap op.add_column — skips if the column already exists."""
    if column.name not in _get_column_names(table_name):
        op.add_column(table_name, column)


def drop_column_if_exists(table_name, column_name):
    """Wrap op.drop_column — skips if the column is already gone."""
    if column_name in _get_column_names(table_name):
        op.drop_column(table_name, column_name)
