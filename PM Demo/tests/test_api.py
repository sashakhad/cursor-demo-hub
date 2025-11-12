#!/usr/bin/env python3
"""
Simple API Test Script
Tests all endpoints of the AI Sourcing Tool API
Copyright Anysphere Inc.
"""

import requests
import json

API_URL = "http://localhost:8000"

def test_health():
    """Test health endpoint"""
    print("Test 1: Health Check")
    response = requests.get(f"{API_URL}/health")
    assert response.status_code == 200
    print(f"✓ Health check passed: {response.json()}")
    print()

def test_filter_options():
    """Test filter options endpoint"""
    print("Test 2: Get Filter Options")
    response = requests.get(f"{API_URL}/api/filters/options")
    assert response.status_code == 200
    data = response.json()
    print(f"✓ Filter options retrieved:")
    print(f"  - {len(data['personas'])} personas")
    print(f"  - {len(data['companies'])} companies")
    print(f"  - {len(data['titles'])} titles")
    print(f"  - {len(data['schools'])} schools")
    print()

def test_get_candidates():
    """Test get all candidates endpoint"""
    print("Test 3: Get All Candidates (limited)")
    response = requests.get(f"{API_URL}/api/candidates?limit=10")
    assert response.status_code == 200
    data = response.json()
    print(f"✓ Retrieved {len(data)} candidates")
    print(f"  Top 3 by score:")
    for i, candidate in enumerate(data[:3]):
        print(f"    {i+1}. {candidate['full_name']}: {candidate['overall_score']:.1f}")
    print()

def test_persona_filtering():
    """Test persona filtering"""
    personas = [
        ('engineer_to_pm', 'Engineer→PM/Solutions'),
        ('cs_solutions_leader', 'CS/Solutions Leaders'),
        ('former_founder', 'Former Founders')
    ]
    
    for persona_id, persona_name in personas:
        print(f"Test: Filter by Persona ({persona_name})")
        response = requests.get(f"{API_URL}/api/candidates?persona={persona_id}&limit=5")
        assert response.status_code == 200
        data = response.json()
        print(f"✓ {persona_name} filter working - {len(data)} candidates")
        for candidate in data[:3]:
            print(f"  - {candidate['full_name']}: {candidate['current_title']} (Score: {candidate['overall_score']:.1f})")
        print()

def test_company_filtering():
    """Test company filtering"""
    print("Test: Filter by Company")
    response = requests.get(f"{API_URL}/api/candidates?companies=Stripe,Brex&limit=10")
    assert response.status_code == 200
    data = response.json()
    print(f"✓ Company filter working - Found {len(data)} candidates at Stripe or Brex")
    print()

def test_years_filtering():
    """Test years of experience filtering"""
    print("Test: Filter by Years of Experience")
    response = requests.get(f"{API_URL}/api/candidates?min_years=4&max_years=6&limit=10")
    assert response.status_code == 200
    data = response.json()
    print(f"✓ Years filter working - Found {len(data)} candidates with 4-6 years")
    print()

def test_combined_filtering():
    """Test combined filtering"""
    print("Test: Combined Filters (Persona + Company + Years)")
    response = requests.get(
        f"{API_URL}/api/candidates?persona=engineer_to_pm&companies=Stripe,Databricks,Figma&min_years=2&limit=5"
    )
    assert response.status_code == 200
    data = response.json()
    print(f"✓ Combined filters working - Found {len(data)} candidates")
    for candidate in data[:3]:
        print(f"  - {candidate['full_name']}: {candidate['current_company']} ({candidate['years_in_role']} yrs, Score: {candidate['overall_score']:.1f})")
    print()

def test_get_by_id():
    """Test get candidate by ID"""
    print("Test: Get Specific Candidate by ID")
    # First get a candidate ID
    response = requests.get(f"{API_URL}/api/candidates?limit=1")
    candidate_id = response.json()[0]['candidate_id']
    
    # Get specific candidate
    response = requests.get(f"{API_URL}/api/candidates/{candidate_id}")
    assert response.status_code == 200
    data = response.json()
    print(f"✓ Get by ID working:")
    print(f"  ID: {data['candidate_id']}")
    print(f"  Name: {data['full_name']}")
    print(f"  Title: {data['current_title']}")
    print(f"  Score: {data['overall_score']:.1f}")
    print()

if __name__ == "__main__":
    print("=" * 60)
    print("AI Sourcing Tool - API Test Suite")
    print("=" * 60)
    print()
    
    try:
        test_health()
        test_filter_options()
        test_get_candidates()
        test_persona_filtering()
        test_company_filtering()
        test_years_filtering()
        test_combined_filtering()
        test_get_by_id()
        
        print("=" * 60)
        print("✓ All Tests Passed!")
        print("=" * 60)
        print()
        print("Frontend URL: http://localhost:3001")
        print("Backend URL: http://localhost:8000")
        print("API Docs: http://localhost:8000/docs")
        
    except AssertionError as e:
        print(f"\n✗ Test failed: {e}")
    except requests.exceptions.ConnectionError:
        print("\n✗ Could not connect to API. Make sure the backend is running:")
        print("  cd src && python3 -m uvicorn api.main:app --reload")
    except Exception as e:
        print(f"\n✗ Unexpected error: {e}")

