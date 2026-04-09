from alembic import op
from sqlalchemy import inspect


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
