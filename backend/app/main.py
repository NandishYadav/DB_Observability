from fastapi import FastAPI
from app.api.v1.routes import router as api_router
from app.health import router as health_router
from app.services.scheduler import start_scheduler

app = FastAPI(title="Oracle DB Observability MVP")

app.include_router(health_router)
app.include_router(api_router, prefix="/api/v1")

@app.on_event("startup")
def startup_event():
    start_scheduler()
