from datetime import datetime
from app.db.oracle import oracle_client
from app.db.mongo import metrics_collection
from app.db.redis import redis_client

def collect_db_cpu_metrics():
    query = """
    SELECT
      SUM(CASE WHEN name = 'CPU used by this session' THEN value END) cpu_time,
      SUM(CASE WHEN name = 'DB time' THEN value END) db_time
    FROM V$SYSSTAT
    WHERE name IN ('CPU used by this session', 'DB time')
    """

    result = oracle_client.execute(query)
    cpu_time, db_time = result[0]

    doc = {
        "metric": "oracle_db_performance",
        "timestamp": datetime.utcnow(),
        "values": {
            "cpu_time": cpu_time or 0,
            "db_time": db_time or 0,
        },
        "tags": {
            "db": "oracle"
        }
    }

    metrics_collection.insert_one(doc)

    # Cache latest values for fast UI reads
    redis_client.set("cpu_time", cpu_time or 0)
    redis_client.set("db_time", db_time or 0)
