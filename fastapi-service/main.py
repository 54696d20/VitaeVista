from fastapi import FastAPI
from app.routes import router

app = FastAPI()

# Include our API routes
app.include_router(router)

@app.get("/")
async def root():
    return {"message": "FastAPI service is running"}
