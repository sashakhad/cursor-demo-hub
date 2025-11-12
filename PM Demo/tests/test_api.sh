#!/bin/bash
# API Test Script
# Tests all API endpoints for the AI Sourcing Tool

echo "=========================================="
echo "AI Sourcing Tool - API Test Suite"
echo "=========================================="
echo ""

API_URL="http://localhost:8000"

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test health endpoint
echo -e "${BLUE}Test 1: Health Check${NC}"
response=$(curl -s -w "\n%{http_code}" "$API_URL/health")
http_code=$(echo "$response" | tail -n 1)
body=$(echo "$response" | head -n -1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Health check passed${NC}"
    echo "  Response: $body"
else
    echo -e "${RED}✗ Health check failed (HTTP $http_code)${NC}"
fi
echo ""

# Test filter options
echo -e "${BLUE}Test 2: Get Filter Options${NC}"
response=$(curl -s -w "\n%{http_code}" "$API_URL/api/filters/options")
http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Filter options retrieved${NC}"
    body=$(echo "$response" | head -n -1)
    personas=$(echo "$body" | python3 -c "import sys, json; data=json.load(sys.stdin); print(len(data['personas']))")
    companies=$(echo "$body" | python3 -c "import sys, json; data=json.load(sys.stdin); print(len(data['companies']))")
    titles=$(echo "$body" | python3 -c "import sys, json; data=json.load(sys.stdin); print(len(data['titles']))")
    echo "  - $personas personas"
    echo "  - $companies companies"
    echo "  - $titles titles"
else
    echo -e "${RED}✗ Filter options failed (HTTP $http_code)${NC}"
fi
echo ""

# Test get all candidates
echo -e "${BLUE}Test 3: Get All Candidates (limited)${NC}"
response=$(curl -s -w "\n%{http_code}" "$API_URL/api/candidates?limit=10")
http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Candidates retrieved${NC}"
    body=$(echo "$response" | head -n -1)
    count=$(echo "$body" | python3 -c "import sys, json; print(len(json.load(sys.stdin)))")
    echo "  Retrieved $count candidates"
    
    # Show top 3
    echo "  Top 3 by score:"
    echo "$body" | python3 -c "import sys, json; data=json.load(sys.stdin); [print(f'    {i+1}. {c[\"full_name\"]}: {c[\"overall_score\"]:.1f}') for i, c in enumerate(data[:3])]"
else
    echo -e "${RED}✗ Get candidates failed (HTTP $http_code)${NC}"
fi
echo ""

# Test persona filtering - Engineer to PM
echo -e "${BLUE}Test 4: Filter by Persona (Engineer→PM)${NC}"
response=$(curl -s -w "\n%{http_code}" "$API_URL/api/candidates?persona=engineer_to_pm&limit=5")
http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Persona filter working${NC}"
    body=$(echo "$response" | head -n -1)
    echo "$body" | python3 -c "import sys, json; data=json.load(sys.stdin); [print(f'  - {c[\"full_name\"]}: {c[\"current_title\"]} (Score: {c[\"overall_score\"]:.1f})') for c in data[:5]]"
else
    echo -e "${RED}✗ Persona filter failed (HTTP $http_code)${NC}"
fi
echo ""

# Test persona filtering - CS Solutions Leader
echo -e "${BLUE}Test 5: Filter by Persona (CS/Solutions Leader)${NC}"
response=$(curl -s -w "\n%{http_code}" "$API_URL/api/candidates?persona=cs_solutions_leader&limit=5")
http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ CS/Solutions persona filter working${NC}"
    body=$(echo "$response" | head -n -1)
    echo "$body" | python3 -c "import sys, json; data=json.load(sys.stdin); [print(f'  - {c[\"full_name\"]}: {c[\"current_title\"]} (Score: {c[\"overall_score\"]:.1f})') for c in data[:5]]"
else
    echo -e "${RED}✗ CS/Solutions persona filter failed (HTTP $http_code)${NC}"
fi
echo ""

# Test persona filtering - Former Founder
echo -e "${BLUE}Test 6: Filter by Persona (Former Founder)${NC}"
response=$(curl -s -w "\n%{http_code}" "$API_URL/api/candidates?persona=former_founder&limit=5")
http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Former founder persona filter working${NC}"
    body=$(echo "$response" | head -n -1)
    echo "$body" | python3 -c "import sys, json; data=json.load(sys.stdin); [print(f'  - {c[\"full_name\"]}: {c[\"current_title\"]} (Founder: {c[\"is_former_founder\"]}, Score: {c[\"overall_score\"]:.1f})') for c in data[:5]]"
else
    echo -e "${RED}✗ Former founder persona filter failed (HTTP $http_code)${NC}"
fi
echo ""

# Test company filtering
echo -e "${BLUE}Test 7: Filter by Company${NC}"
response=$(curl -s -w "\n%{http_code}" "$API_URL/api/candidates?companies=Stripe,Brex&limit=10")
http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Company filter working${NC}"
    body=$(echo "$response" | head -n -1)
    count=$(echo "$body" | python3 -c "import sys, json; print(len(json.load(sys.stdin)))")
    echo "  Found $count candidates at Stripe or Brex"
else
    echo -e "${RED}✗ Company filter failed (HTTP $http_code)${NC}"
fi
echo ""

# Test years of experience filtering
echo -e "${BLUE}Test 8: Filter by Years of Experience${NC}"
response=$(curl -s -w "\n%{http_code}" "$API_URL/api/candidates?min_years=4&max_years=6&limit=10")
http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Years of experience filter working${NC}"
    body=$(echo "$response" | head -n -1)
    count=$(echo "$body" | python3 -c "import sys, json; print(len(json.load(sys.stdin)))")
    echo "  Found $count candidates with 4-6 years experience"
else
    echo -e "${RED}✗ Years filter failed (HTTP $http_code)${NC}"
fi
echo ""

# Test combined filtering
echo -e "${BLUE}Test 9: Combined Filters (Persona + Company + Years)${NC}"
response=$(curl -s -w "\n%{http_code}" "$API_URL/api/candidates?persona=engineer_to_pm&companies=Stripe,Databricks,Figma&min_years=2&limit=5")
http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Combined filters working${NC}"
    body=$(echo "$response" | head -n -1)
    count=$(echo "$body" | python3 -c "import sys, json; print(len(json.load(sys.stdin)))")
    echo "  Found $count candidates matching all criteria"
    if [ "$count" -gt "0" ]; then
        echo "$body" | python3 -c "import sys, json; data=json.load(sys.stdin); [print(f'  - {c[\"full_name\"]}: {c[\"current_company\"]} ({c[\"years_in_role\"]} yrs, Score: {c[\"overall_score\"]:.1f})') for c in data[:5]]"
    fi
else
    echo -e "${RED}✗ Combined filters failed (HTTP $http_code)${NC}"
fi
echo ""

# Test get specific candidate
echo -e "${BLUE}Test 10: Get Specific Candidate by ID${NC}"
# First get a candidate ID
candidate_id=$(curl -s "$API_URL/api/candidates?limit=1" | python3 -c "import sys, json; print(json.load(sys.stdin)[0]['candidate_id'])")
response=$(curl -s -w "\n%{http_code}" "$API_URL/api/candidates/$candidate_id")
http_code=$(echo "$response" | tail -n 1)

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✓ Get candidate by ID working${NC}"
    body=$(echo "$response" | head -n -1)
    echo "$body" | python3 -c "import sys, json; c=json.load(sys.stdin); print(f'  ID: {c[\"candidate_id\"]}\n  Name: {c[\"full_name\"]}\n  Title: {c[\"current_title\"]}\n  Score: {c[\"overall_score\"]:.1f}')"
else
    echo -e "${RED}✗ Get candidate by ID failed (HTTP $http_code)${NC}"
fi
echo ""

echo "=========================================="
echo "Test Suite Complete!"
echo "=========================================="
echo ""
echo "Frontend URL: http://localhost:3001"
echo "Backend URL: http://localhost:8000"
echo "API Docs: http://localhost:8000/docs"

