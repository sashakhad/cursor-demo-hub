#!/bin/bash
# Quick Start Script for AI Sourcing Tool Demo
# Copyright Anysphere Inc.

set -e  # Exit on error

echo "=========================================="
echo "AI Sourcing Tool - Quick Start"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if database exists
if [ ! -f "data/recruiting_data.db" ]; then
    echo -e "${YELLOW}Database not found. Generating demo data...${NC}"
    cd src
    python3 seed_all_data.py
    cd ..
    echo ""
fi

# Check if Python dependencies are installed
echo -e "${BLUE}Checking Python dependencies...${NC}"
python3 -c "import fastapi" 2>/dev/null || {
    echo -e "${YELLOW}Installing Python dependencies...${NC}"
    pip install -q -r requirements.txt
}
echo -e "${GREEN}✓ Python dependencies ready${NC}"
echo ""

# Check if frontend dependencies are installed
echo -e "${BLUE}Checking frontend dependencies...${NC}"
if [ ! -d "frontend/node_modules" ]; then
    echo -e "${YELLOW}Installing frontend dependencies...${NC}"
    cd frontend
    npm install
    cd ..
fi
echo -e "${GREEN}✓ Frontend dependencies ready${NC}"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f "frontend/.env.local" ]; then
    echo -e "${BLUE}Creating frontend environment file...${NC}"
    echo "NEXT_PUBLIC_API_URL=http://localhost:8000/api" > frontend/.env.local
    echo -e "${GREEN}✓ Environment file created${NC}"
    echo ""
fi

echo "=========================================="
echo -e "${GREEN}Starting Services...${NC}"
echo "=========================================="
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "Shutting down services..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit
}

trap cleanup EXIT INT TERM

# Start backend
echo -e "${BLUE}Starting FastAPI backend on port 8000...${NC}"
cd src
python3 -m uvicorn api.main:app --reload --port 8000 > ../logs/backend.log 2>&1 &
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Check if backend is running
if curl -s http://localhost:8000/health > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Backend started successfully${NC}"
else
    echo -e "${YELLOW}⚠ Backend may still be starting...${NC}"
fi
echo ""

# Start frontend on port 3002
echo -e "${BLUE}Starting Next.js frontend on port 3002...${NC}"
cd frontend
PORT=3002 npm run dev > ../logs/frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

# Wait for frontend to start
sleep 5

# Check if frontend started
if curl -s http://localhost:3002 > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Frontend started successfully${NC}"
    FRONTEND_PORT="3002"
else
    echo -e "${YELLOW}⚠ Frontend may still be starting...${NC}"
    FRONTEND_PORT="3002"
fi

echo ""
echo "=========================================="
echo -e "${GREEN}✓ AI Sourcing Tool is Running!${NC}"
echo "=========================================="
echo ""
echo -e "Frontend:  ${BLUE}http://localhost:${FRONTEND_PORT}${NC}"
echo -e "Backend:   ${BLUE}http://localhost:8000${NC}"
echo -e "API Docs:  ${BLUE}http://localhost:8000/docs${NC}"
echo ""
echo "Demo Features:"
echo "  • AI-Powered Candidate Search - 250 candidates with natural language search"
echo "  • Custom AI Criteria - Describe your ideal candidate in plain English"
echo "  • Advanced Boolean Filters - AND/OR logic for precise filtering"
echo "  • Smart Scoring - Numeric scores (0-100) with Great/Medium/Low/No Fit categories"
echo "  • Quality Dashboard - 9,600 real vendor quality issues (Q2-Q3 2024)"
echo "  • Waterfall Analysis - Compare vendor configurations"
echo ""
echo "Pages:"
echo "  • Candidate Search: http://localhost:${FRONTEND_PORT}"
echo "  • Quality Dashboard: http://localhost:${FRONTEND_PORT}/quality"
echo ""
echo -e "${YELLOW}Press Ctrl+C to stop all services${NC}"
echo ""

# Keep script running
wait

