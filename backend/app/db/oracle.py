import cx_Oracle
from app.core.config import settings

class OracleClient:
    def __init__(self):
        self.pool = cx_Oracle.SessionPool(
            user=settings.ORACLE_USER,
            password=settings.ORACLE_PASSWORD,
            dsn=settings.ORACLE_DSN,
            min=1,
            max=5,
            increment=1,
            threaded=True,
        )

    def execute(self, query: str):
        with self.pool.acquire() as conn:
            with conn.cursor() as cursor:
                cursor.execute(query)
                return cursor.fetchall()

oracle_client = OracleClient()
