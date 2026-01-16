from influxdb_client import InfluxDBClient, Point
from app.core.config import settings

client = InfluxDBClient(
    url=settings.INFLUX_URL,
    token=settings.INFLUX_TOKEN,
    org=settings.INFLUX_ORG,
)

write_api = client.write_api()

def write_metric(measurement: str, fields: dict, tags: dict = None):
    point = Point(measurement)
    for k, v in fields.items():
        point.field(k, v)

    if tags:
        for k, v in tags.items():
            point.tag(k, v)

    write_api.write(bucket=settings.INFLUX_BUCKET, record=point)
