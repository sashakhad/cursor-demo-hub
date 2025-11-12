"""
FastAPI Main Application
Serves candidate data for AI sourcing tool frontend.
Copyright Anysphere Inc.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes import candidates, quality_reports

# Create FastAPI application
app = FastAPI(
    title="AI Sourcing Tool API",
    description="API for Technical Account Manager candidate sourcing and filtering",
    version="1.0.0"
)

# Configure CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "http://localhost:3003"],  # Next.js ports
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(candidates.router, prefix="/api", tags=["candidates"])
app.include_router(quality_reports.router, prefix="/api", tags=["quality"])


@app.get("/")
async def root():
    """Root endpoint - API health check"""
    return {
        "message": "AI Sourcing Tool API",
        "status": "healthy",
        "version": "1.0.0"
    }


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}

