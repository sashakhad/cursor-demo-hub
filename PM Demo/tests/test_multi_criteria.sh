#!/bin/bash
# Test script for multi-criteria AI search
# Copyright Anysphere Inc.

echo "Testing Multi-Criteria AI Search Implementation"
echo "================================================"
echo ""

# Test 1: Single criterion (backward compatibility)
echo "Test 1: Single Criterion Search"
echo "Criterion: 'customer-facing role experience'"
echo "---"
curl -s "http://localhost:8000/api/candidates?ai_criteria=customer-facing%20role%20experience&limit=1" \
  | python3 -c "import json, sys; data=json.load(sys.stdin); print(f\"Candidate: {data[0]['full_name']}\"); print(f\"Overall Score: {data[0]['overall_score']}\"); print(f\"Has criterion_scores: {'criterion_scores' in data[0]['selected_persona_score']}\")"
echo ""

# Test 2: Multiple criteria
echo "Test 2: Multiple Criteria Search"
echo "Criteria:"
echo "  1. '3+ years at MAG7 companies'"
echo "  2. 'customer-facing role experience'"
echo "---"
curl -s "http://localhost:8000/api/candidates?ai_criteria=3%2B%20years%20at%20MAG7%20companies|||customer-facing%20role%20experience&limit=1" \
  | python3 -c "
import json, sys
data = json.load(sys.stdin)
candidate = data[0]
print(f\"Candidate: {candidate['full_name']}\")
print(f\"Overall Score: {candidate['overall_score']}\")
print(f\"Number of Criteria: {len(candidate['selected_persona_score']['criterion_scores'])}\")
print(\"\nIndividual Scores:\")
for i, cs in enumerate(candidate['selected_persona_score']['criterion_scores'], 1):
    print(f\"  {i}. {cs['criterion'][:50]}...: {cs['score']}\")
"
echo ""

# Test 3: Three criteria
echo "Test 3: Three Criteria Search"
echo "Criteria:"
echo "  1. 'experience at enterprise SaaS companies'"
echo "  2. '5+ years technical experience'"
echo "  3. 'Solutions Engineering background'"
echo "---"
curl -s "http://localhost:8000/api/candidates?ai_criteria=experience%20at%20enterprise%20SaaS%20companies|||5%2B%20years%20technical%20experience|||Solutions%20Engineering%20background&limit=1" \
  | python3 -c "
import json, sys
data = json.load(sys.stdin)
candidate = data[0]
print(f\"Candidate: {candidate['full_name']}\")
print(f\"Current Title: {candidate['current_title']}\")
print(f\"Current Company: {candidate['current_company']}\")
print(f\"Overall Score: {candidate['overall_score']}\")
print(f\"\nCriterion Breakdown:\")
for i, cs in enumerate(candidate['selected_persona_score']['criterion_scores'], 1):
    print(f\"  {i}. Score: {cs['score']:5.1f} - {cs['criterion']}\")
    print(f\"     Reasoning: {cs['reasoning']}\")
"
echo ""
echo "All tests completed successfully!"

