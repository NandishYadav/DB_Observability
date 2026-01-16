from pymongo import MongoClient
from app.core.config import settings

client = MongoClient(settings.MONGO_URI)

db = client[settings.MONGO_DB]
metrics_collection = db[settings.MONGO_COLLECTION]

# Helpful index for time-series queries
metrics_collection.create_index([("timestamp", 1)])
metrics_collection.create_index([("metric", 1)])



