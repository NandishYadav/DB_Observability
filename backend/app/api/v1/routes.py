from fastapi import APIRouter
from app.db.mongo import metrics_collection
from datetime import datetime, timedelta

router = APIRouter()

@router.get("/metrics/db-performance")
def get_db_performance(last_minutes: int = 15):
    since = datetime.utcnow() - timedelta(minutes=last_minutes)

    cursor = metrics_collection.find(
        {
            "metric": "oracle_db_performance",
            "timestamp": {"$gte": since}
        },
        {"_id": 0}
    ).sort("timestamp", 1)

    return list(cursor)



# Sample data
# {
#   "metric": "oracle_db_performance",
#   "timestamp": "2026-01-16T10:01:05Z",
#   "values": {
#     "cpu_time": 123456,
#     "db_time": 234567
#   },
#   "tags": {
#     "db": "oracle"
#   }
# }
