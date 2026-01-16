"""
Configuration management for the application.
Loads settings from environment variables.
"""
import os
from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    """Application settings loaded from environment variables."""
    
    # FastAPI
    app_name: str = "Database Monitoring API"
    app_version: str = "1.0.0"
    debug: bool = False
    
    # Database - Oracle
    oracle_user: str
    oracle_password: str
    oracle_host: str
    oracle_port: int = 1521
    oracle_service: str
    
    # Database - InfluxDB
    influx_url: str
    influx_bucket: str
    influx_org: str
    influx_token: str

     # MongoDB
    MONGO_URI: str = "mongodb://localhost:27017"
    MONGO_DB: str = "oracle_observability"
    MONGO_COLLECTION: str = "metrics"
    
    # Database - Redis
    redis_host: str = "localhost"
    redis_port: int = 6379
    redis_db: int = 0
    
    # Logging
    log_level: str = "INFO"
    log_format: str = "json"
    
    # Scheduler
    scheduler_enabled: bool = True
    scheduler_interval: int = 60  # seconds
    
    class Config:
        env_file = ".env"
        case_sensitive = False

settings = Settings()
