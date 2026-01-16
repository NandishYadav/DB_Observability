"""
Time utilities and helpers.
"""
from datetime import datetime, timedelta
from typing import Optional
import pytz

def get_current_utc_time() -> datetime:
    """Get current UTC time."""
    return datetime.now(pytz.UTC)

def get_current_local_time() -> datetime:
    """Get current local time."""
    return datetime.now()

def convert_to_utc(dt: datetime, tz_name: str = 'UTC') -> datetime:
    """
    Convert datetime to UTC.
    
    Args:
        dt: DateTime object
        tz_name: Timezone name (default UTC)
    
    Returns:
        DateTime in UTC
    """
    if dt.tzinfo is None:
        tz = pytz.timezone(tz_name)
        dt = tz.localize(dt)
    return dt.astimezone(pytz.UTC)

def add_hours(dt: datetime, hours: int) -> datetime:
    """Add hours to a datetime."""
    return dt + timedelta(hours=hours)

def add_days(dt: datetime, days: int) -> datetime:
    """Add days to a datetime."""
    return dt + timedelta(days=days)

def format_datetime(dt: datetime, format_str: str = "%Y-%m-%d %H:%M:%S") -> str:
    """Format datetime as string."""
    return dt.strftime(format_str)

def parse_datetime(date_string: str, format_str: str = "%Y-%m-%d %H:%M:%S") -> datetime:
    """Parse datetime from string."""
    return datetime.strptime(date_string, format_str)

def get_time_range(hours: int = 24) -> tuple[datetime, datetime]:
    """
    Get time range for last N hours.
    
    Args:
        hours: Number of hours back
    
    Returns:
        Tuple of (start_time, end_time)
    """
    end_time = get_current_utc_time()
    start_time = end_time - timedelta(hours=hours)
    return start_time, end_time
