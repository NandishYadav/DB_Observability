# Database Monitoring API

A FastAPI application for monitoring Oracle and other databases with metrics collection, time-series storage, and caching.

## Features

- **Multi-Database Support**: Oracle, InfluxDB, Redis
- **RESTful API**: FastAPI with Pydantic validation
- **Metrics Collection**: Automated scheduled metric pulling
- **Time-Series Storage**: InfluxDB for metrics storage
- **Caching**: Redis for performance optimization
- **Health Checks**: Component health status monitoring
- **Logging**: JSON formatted logging

## Project Structure

```
backend/
├── app/
│   ├── main.py                 # FastAPI entry point
│   ├── core/
│   │   ├── config.py           # Environment & configuration
│   │   ├── logging.py          # Logging setup
│   │   └── dependencies.py     # Dependency injection
│   ├── db/
│   │   ├── oracle.py           # Oracle connector
│   │   ├── influx.py           # InfluxDB client
│   │   └── redis.py            # Redis client
│   ├── services/
│   │   ├── metric_puller.py    # Metric collection
│   │   └── scheduler.py        # Task scheduling
│   ├── api/
│   │   └── v1/
│   │       ├── routes.py       # API routes
│   │       └── schemas.py      # Pydantic models
│   ├── utils/
│   │   └── time.py             # Time utilities
│   └── health.py               # Health checks
├── requirements.txt
├── .env.example
└── README.md
```

## Setup

1. **Create environment file**:
   ```bash
   cp .env.example .env
   ```

2. **Update .env** with your database credentials

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:
   ```bash
   python -m app.main
   ```

   Or with uvicorn:
   ```bash
   uvicorn app.main:app --reload
   ```

## API Endpoints

### Metrics
- `GET /api/v1/metrics/` - List metrics
- `POST /api/v1/metrics/` - Create metric
- `GET /api/v1/metrics/{metric_id}` - Get specific metric
- `DELETE /api/v1/metrics/{metric_id}` - Delete metric

### Health
- `GET /health` - Application health status

## Configuration

All configuration is managed through environment variables in `.env` file:

- **Database Settings**: Oracle credentials and connection details
- **InfluxDB Settings**: URL, token, bucket, and organization
- **Redis Settings**: Host, port, and database number
- **Scheduler Settings**: Enable/disable and interval configuration
- **Logging Settings**: Log level and format (json or standard)

## Requirements

- Python 3.8+
- Oracle Database (cx_Oracle)
- InfluxDB (influxdb-client)
- Redis (redis)
- FastAPI & Uvicorn

See `requirements.txt` for specific versions.

## Development

### Adding New Metrics

1. Create a method in `MetricPuller` class
2. Define Pydantic schema in `schemas.py`
3. Add API route in `routes.py`

### Extending Database Support

1. Create new client class in `app/db/`
2. Add dependency in `core/dependencies.py`
3. Use in services or API routes

## Logging

Logs are output to stdout with configurable format:
- `json`: Structured JSON format (default)
- `standard`: Human-readable format

Set `LOG_FORMAT` environment variable to change.

## Health Checks

The `/health` endpoint returns the status of all components:
- Oracle Database
- InfluxDB
- Redis

Overall status:
- `healthy`: All components working
- `degraded`: Some components down
- `unhealthy`: All components down

## License

MIT
