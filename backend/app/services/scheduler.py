"""
Scheduler setup and management.
Handles periodic metric collection and other scheduled tasks.
"""
from apscheduler.schedulers.background import BackgroundScheduler
from app.core import logging as logging_config
from app.core.config import settings
from app.services.metric_puller import MetricPuller
from typing import Optional

logger = logging_config.get_logger(__name__)

class TaskScheduler:
    """Manages scheduled tasks for the application."""
    
    _instance: Optional['TaskScheduler'] = None
    
    def __new__(cls):
        """Singleton pattern implementation."""
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.scheduler: Optional[BackgroundScheduler] = None
        return cls._instance
    
    def __init__(self):
        """Initialize scheduler."""
        if self.scheduler is None:
            self.scheduler = BackgroundScheduler()
            self.metric_puller = MetricPuller()
    
    def add_metric_pull_job(self, interval: int = None) -> None:
        """
        Add metric pulling job to scheduler.
        
        Args:
            interval: Interval in seconds (uses config if not provided)
        """
        try:
            interval = interval or settings.scheduler_interval
            
            self.scheduler.add_job(
                self._pull_metrics_job,
                'interval',
                seconds=interval,
                id='pull_metrics',
                name='Pull database metrics',
                replace_existing=True
            )
            logger.info(f"Metric pull job added with {interval}s interval")
        except Exception as e:
            logger.error(f"Failed to add metric pull job: {str(e)}")
            raise
    
    def _pull_metrics_job(self) -> None:
        """Job function for pulling metrics."""
        try:
            logger.debug("Executing metric pull job")
            self.metric_puller.pull_and_store()
        except Exception as e:
            logger.error(f"Metric pull job failed: {str(e)}")
    
    def start(self) -> None:
        """Start the scheduler."""
        try:
            if settings.scheduler_enabled:
                self.add_metric_pull_job()
                self.scheduler.start()
                logger.info("Scheduler started")
        except Exception as e:
            logger.error(f"Failed to start scheduler: {str(e)}")
            raise
    
    def stop(self) -> None:
        """Stop the scheduler."""
        try:
            if self.scheduler and self.scheduler.running:
                self.scheduler.shutdown()
                logger.info("Scheduler stopped")
        except Exception as e:
            logger.error(f"Failed to stop scheduler: {str(e)}")
            raise
    
    def get_jobs(self):
        """Get all scheduled jobs."""
        return self.scheduler.get_jobs() if self.scheduler else []

# Global scheduler instance
scheduler = TaskScheduler()
