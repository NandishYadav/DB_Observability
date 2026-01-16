"""
Pydantic models for request/response validation.
"""
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime

class MetricBase(BaseModel):
    """Base metric model."""
    name: str = Field(..., description="Metric name")
    value: float = Field(..., description="Metric value")
    unit: Optional[str] = Field(None, description="Metric unit")

class MetricCreate(MetricBase):
    """Model for creating a metric."""
    source: str = Field(..., description="Metric source (oracle, postgres, etc.)")
    tags: Optional[Dict[str, str]] = Field(None, description="Additional tags")

class MetricResponse(MetricBase):
    """Model for metric response."""
    id: int = Field(..., description="Metric ID")
    source: str = Field(..., description="Metric source")
    timestamp: datetime = Field(..., description="Metric timestamp")
    tags: Optional[Dict[str, str]] = Field(None, description="Additional tags")
    
    class Config:
        from_attributes = True

class HealthResponse(BaseModel):
    """Model for health check response."""
    status: str = Field(..., description="Application status")
    timestamp: datetime = Field(..., description="Check timestamp")
    version: str = Field(..., description="Application version")
    checks: Dict[str, str] = Field(default_factory=dict, description="Component health checks")

class ErrorResponse(BaseModel):
    """Model for error response."""
    error: str = Field(..., description="Error message")
    detail: Optional[str] = Field(None, description="Error detail")
    timestamp: datetime = Field(..., description="Error timestamp")

class QueryMetricsRequest(BaseModel):
    """Model for querying metrics."""
    source: Optional[str] = Field(None, description="Filter by source")
    start_time: Optional[datetime] = Field(None, description="Start time")
    end_time: Optional[datetime] = Field(None, description="End time")
    limit: int = Field(100, description="Result limit")
    offset: int = Field(0, description="Result offset")

class MetricsListResponse(BaseModel):
    """Model for metrics list response."""
    total: int = Field(..., description="Total metrics count")
    limit: int = Field(..., description="Limit used")
    offset: int = Field(..., description="Offset used")
    metrics: List[MetricResponse] = Field(..., description="List of metrics")
