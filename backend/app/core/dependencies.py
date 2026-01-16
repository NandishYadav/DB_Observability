"""
Shared dependencies for the application.
Used for dependency injection in FastAPI routes.
"""
from app.core import logging as logging_config
from app.db import oracle, influx, redis

logger = logging_config.get_logger(__name__)

async def get_oracle_connection():
    """
    Get Oracle database connection.
    
    Yields:
        Oracle connection instance
    """
    try:
        conn = oracle.OracleConnector()
        yield conn
    finally:
        pass

async def get_influx_client():
    """
    Get InfluxDB client instance.
    
    Yields:
        InfluxDB client instance
    """
    try:
        client = influx.InfluxClient()
        yield client
    finally:
        pass

async def get_redis_client():
    """
    Get Redis client instance.
    
    Yields:
        Redis client instance
    """
    try:
        client = redis.RedisClient()
        yield client
    finally:
        pass
