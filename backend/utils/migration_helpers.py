from alembic.operations import BatchOperations
from sqlalchemy import Column, inspect

# ---------------------------------------------------------------------------
# Table helpers
# ---------------------------------------------------------------------------


def create_table_if_not_exists(op, table_name, *args, **kwargs):
    """Wrap op.create_table with an existence check.

    On MySQL/MariaDB, DDL auto-commits and cannot be rolled back. If a
    migration is interrupted after CREATE TABLE but before the Alembic
    version stamp is written, the next run would crash with "table already
    exists." This guard makes table-creation migrations re-runnable.
    """
    if not inspect(op.get_bind()).has_table(table_name):
        return op.create_table(table_name, *args, **kwargs)
    return None


def drop_table_if_exists(op, table_name):
    """Wrap op.drop_table with an existence check."""
    if inspect(op.get_bind()).has_table(table_name):
        op.drop_table(table_name)


# ---------------------------------------------------------------------------
# Column helpers
# ---------------------------------------------------------------------------


def _get_column_names(batch_op: BatchOperations):
    """Return the set of column names currently on *table_name*."""
    columns = inspect(batch_op.get_bind()).get_columns(batch_op.impl.table_name)
    return {c["name"] for c in columns}


def add_column_if_not_exists(batch_op: BatchOperations, column: Column):
    """Wrap add_column — skips if the column already exists."""
    if column.name not in _get_column_names(batch_op):
        batch_op.add_column(column)


def drop_column_if_exists(batch_op: BatchOperations, column_name: str):
    """Wrap drop_column — skips if the column is already gone."""
    if column_name in _get_column_names(batch_op):
        batch_op.drop_column(column_name)
