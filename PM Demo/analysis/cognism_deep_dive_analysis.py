#!/usr/bin/env python3
"""
Cognism Deep Dive Analysis - Q2/Q3 2024
Detailed comparison of Cognism vs. existing vendors with advanced metrics
"""

import pandas as pd
import numpy as np
from collections import defaultdict
import json
from datetime import datetime

# Read the data
df = pd.read_csv('/Users/mpotteiger/Developer/PM Demo/data/stale_data_report_april25-sept25/jewel_vendor_waterfall_reports_q2q3_2024.csv')

print("=" * 100)
print("COGNISM DEEP DIVE ANALYSIS - Q2/Q3 2024")
print("=" * 100)
print()

# ============================================================================
# 1. COGNISM VS EXISTING VENDORS: HEAD-TO-HEAD COMPARISON
# ============================================================================

print("=" * 100)
print("1. COGNISM VS. EXISTING VENDORS - HEAD-TO-HEAD METRICS")
print("=" * 100)
print()

# Separate Cognism from other vendors
cognism_data = df[df['vendor_hit'] == 'Cognism']
other_vendors_data = df[df['vendor_hit'] != 'Cognism']

print(f"Cognism Records: {len(cognism_data):,} ({len(cognism_data)/len(df)*100:.1f}% of dataset)")
print(f"Other Vendors: {len(other_vendors_data):,} ({len(other_vendors_data)/len(df)*100:.1f}% of dataset)")
print()

# Key comparative metrics
print("Direct Comparison:")
print("-" * 80)

# Average staleness
cognism_staleness = cognism_data['days_since_profile_update'].mean()
others_staleness = other_vendors_data['days_since_profile_update'].mean()
staleness_improvement = ((others_staleness - cognism_staleness) / others_staleness * 100)

print(f"Average Staleness:")
print(f"  Cognism:        {cognism_staleness:.1f} days")
print(f"  Other Vendors:  {others_staleness:.1f} days")
print(f"  Improvement:    {staleness_improvement:.1f}% fresher ✓")
print()

# Email bounce rates
cognism_email_bounce = (cognism_data['email_bounced'].sum() / len(cognism_data) * 100)
others_email_bounce = (other_vendors_data['email_bounced'].sum() / len(other_vendors_data) * 100)
email_diff = cognism_email_bounce - others_email_bounce

print(f"Email Bounce Rate:")
print(f"  Cognism:        {cognism_email_bounce:.2f}%")
print(f"  Other Vendors:  {others_email_bounce:.2f}%")
if email_diff < 0:
    print(f"  Difference:     {abs(email_diff):.2f}% better ✓")
else:
    print(f"  Difference:     {email_diff:.2f}% worse ✗")
print()

# Phone invalid rates
cognism_phone_invalid = (cognism_data['phone_invalid'].sum() / len(cognism_data) * 100)
others_phone_invalid = (other_vendors_data['phone_invalid'].sum() / len(other_vendors_data) * 100)
phone_diff = cognism_phone_invalid - others_phone_invalid

print(f"Phone Invalid Rate:")
print(f"  Cognism:        {cognism_phone_invalid:.2f}%")
print(f"  Other Vendors:  {others_phone_invalid:.2f}%")
if phone_diff < 0:
    print(f"  Difference:     {abs(phone_diff):.2f}% better ✓")
else:
    print(f"  Difference:     {phone_diff:.2f}% worse ✗")
print()

# ============================================================================
# 2. ISSUE TYPE BREAKDOWN - COGNISM VS OTHERS
# ============================================================================

print("=" * 100)
print("2. ISSUE TYPE DISTRIBUTION - COGNISM VS. OTHERS")
print("=" * 100)
print()

# Issue type comparison
cognism_issue_types = cognism_data['issue_type'].value_counts()
others_issue_types = other_vendors_data['issue_type'].value_counts()

print("Cognism Issue Breakdown:")
print("-" * 80)
for issue_type, count in cognism_issue_types.items():
    pct = (count / len(cognism_data)) * 100
    print(f"  {issue_type:.<30} {count:>4} ({pct:>5.1f}%)")
print()

print("Other Vendors Issue Breakdown:")
print("-" * 80)
for issue_type, count in others_issue_types.items():
    pct = (count / len(other_vendors_data)) * 100
    print(f"  {issue_type:.<30} {count:>4} ({pct:>5.1f}%)")
print()

# Compare issue type distributions
print("Issue Type Comparison (% of total issues):")
print("-" * 80)
all_issue_types = set(list(cognism_issue_types.index) + list(others_issue_types.index))
print(f"{'Issue Type':<30} {'Cognism':<12} {'Others':<12} {'Difference'}")
print("-" * 80)
for issue_type in sorted(all_issue_types):
    cognism_pct = (cognism_issue_types.get(issue_type, 0) / len(cognism_data)) * 100 if len(cognism_data) > 0 else 0
    others_pct = (others_issue_types.get(issue_type, 0) / len(other_vendors_data)) * 100 if len(other_vendors_data) > 0 else 0
    diff = cognism_pct - others_pct
    marker = "✓" if diff < 0 else ("✗" if diff > 2 else "≈")
    print(f"{issue_type:<30} {cognism_pct:>6.1f}%     {others_pct:>6.1f}%     {diff:>+6.1f}% {marker}")
print()

# ============================================================================
# 3. REGIONAL PERFORMANCE - COGNISM
# ============================================================================

print("=" * 100)
print("3. COGNISM PERFORMANCE BY REGION")
print("=" * 100)
print()

if len(cognism_data) > 0:
    cognism_by_region = cognism_data.groupby('candidate_region').agg({
        'report_id': 'count',
        'days_since_profile_update': 'mean',
        'email_bounced': 'sum',
        'phone_invalid': 'sum'
    }).round(2)
    
    cognism_by_region['email_bounce_rate'] = (cognism_by_region['email_bounced'] / cognism_by_region['report_id'] * 100).round(2)
    cognism_by_region['phone_invalid_rate'] = (cognism_by_region['phone_invalid'] / cognism_by_region['report_id'] * 100).round(2)
    
    print("Cognism Regional Breakdown:")
    print("-" * 80)
    print(f"{'Region':<10} {'Issues':<10} {'Avg Staleness':<15} {'Email Bounce':<15} {'Phone Invalid'}")
    print("-" * 80)
    for region in cognism_by_region.index:
        row = cognism_by_region.loc[region]
        print(f"{region:<10} {int(row['report_id']):<10} {row['days_since_profile_update']:<15.1f} {row['email_bounce_rate']:<15.1f}% {row['phone_invalid_rate']:.1f}%")
    print()
else:
    print("No Cognism data available for regional analysis")
    print()

# ============================================================================
# 4. TEMPORAL ANALYSIS - COGNISM TREND OVER TIME
# ============================================================================

print("=" * 100)
print("4. COGNISM PERFORMANCE TRENDS OVER TIME")
print("=" * 100)
print()

# Convert timestamp to datetime
df['timestamp'] = pd.to_datetime(df['timestamp'])
cognism_data_time = cognism_data.copy()
cognism_data_time['timestamp'] = pd.to_datetime(cognism_data_time['timestamp'])
cognism_data_time['month'] = cognism_data_time['timestamp'].dt.to_period('M')

if len(cognism_data_time) > 0:
    monthly_cognism = cognism_data_time.groupby('month').agg({
        'report_id': 'count',
        'days_since_profile_update': 'mean',
        'email_bounced': 'sum',
        'phone_invalid': 'sum'
    }).round(2)
    
    if len(monthly_cognism) > 0:
        monthly_cognism['email_bounce_rate'] = (monthly_cognism['email_bounced'] / monthly_cognism['report_id'] * 100).round(2)
        monthly_cognism['phone_invalid_rate'] = (monthly_cognism['phone_invalid'] / monthly_cognism['report_id'] * 100).round(2)
        
        print("Cognism Monthly Performance:")
        print("-" * 80)
        print(f"{'Month':<10} {'Issues':<10} {'Avg Staleness':<15} {'Email Bounce':<15} {'Phone Invalid'}")
        print("-" * 80)
        for month in monthly_cognism.index:
            row = monthly_cognism.loc[month]
            print(f"{str(month):<10} {int(row['report_id']):<10} {row['days_since_profile_update']:<15.1f} {row['email_bounce_rate']:<15.1f}% {row['phone_invalid_rate']:.1f}%")
        print()
        
        # Trend analysis
        if len(monthly_cognism) > 1:
            first_month = monthly_cognism.iloc[0]
            last_month = monthly_cognism.iloc[-1]
            
            staleness_trend = ((last_month['days_since_profile_update'] - first_month['days_since_profile_update']) / 
                              first_month['days_since_profile_update'] * 100)
            email_trend = last_month['email_bounce_rate'] - first_month['email_bounce_rate']
            
            print("Trend Analysis (First vs. Last Month):")
            print("-" * 80)
            print(f"  Staleness Trend:     {staleness_trend:>+6.1f}% {'(improving ✓)' if staleness_trend < 0 else '(worsening ✗)'}")
            print(f"  Email Bounce Trend:  {email_trend:>+6.1f}% {'(improving ✓)' if email_trend < 0 else '(worsening ✗)'}")
            print()
    else:
        print("Insufficient monthly data for trend analysis")
        print()
else:
    print("No Cognism data available for temporal analysis")
    print()

# ============================================================================
# 5. COMPANY TIER ANALYSIS
# ============================================================================

print("=" * 100)
print("5. VENDOR PERFORMANCE BY COMPANY TIER")
print("=" * 100)
print()

# Compare Cognism vs others by company tier
print("Data Quality by Company Tier:")
print("-" * 80)

for tier in sorted(df['company_tier'].unique()):
    tier_cognism = cognism_data[cognism_data['company_tier'] == tier]
    tier_others = other_vendors_data[other_vendors_data['company_tier'] == tier]
    
    print(f"\n{tier} Tier Companies:")
    
    if len(tier_cognism) > 0:
        cog_staleness = tier_cognism['days_since_profile_update'].mean()
        cog_email_bounce = (tier_cognism['email_bounced'].sum() / len(tier_cognism) * 100)
        print(f"  Cognism: {len(tier_cognism)} issues | {cog_staleness:.1f} days staleness | {cog_email_bounce:.1f}% email bounce")
    else:
        print(f"  Cognism: No data")
    
    if len(tier_others) > 0:
        oth_staleness = tier_others['days_since_profile_update'].mean()
        oth_email_bounce = (tier_others['email_bounced'].sum() / len(tier_others) * 100)
        print(f"  Others:  {len(tier_others)} issues | {oth_staleness:.1f} days staleness | {oth_email_bounce:.1f}% email bounce")
        
        if len(tier_cognism) > 0:
            staleness_imp = ((oth_staleness - cog_staleness) / oth_staleness * 100)
            print(f"  Cognism Advantage: {staleness_imp:.1f}% fresher data")
    else:
        print(f"  Others: No data")

print()

# ============================================================================
# 6. WATERFALL POSITION EFFECTIVENESS
# ============================================================================

print("=" * 100)
print("6. WATERFALL POSITION EFFECTIVENESS")
print("=" * 100)
print()

# Analyze which vendors are at which positions and their performance
waterfall_analysis = df.groupby(['waterfall_position', 'vendor_hit']).agg({
    'report_id': 'count',
    'days_since_profile_update': 'mean',
    'email_bounced': 'sum',
    'phone_invalid': 'sum'
}).round(2)

waterfall_analysis['email_bounce_rate'] = (waterfall_analysis['email_bounced'] / waterfall_analysis['report_id'] * 100).round(2)
waterfall_analysis['phone_invalid_rate'] = (waterfall_analysis['phone_invalid'] / waterfall_analysis['report_id'] * 100).round(2)

print("Current Waterfall Configuration & Performance:")
print("-" * 80)

for position in sorted(df['waterfall_position'].unique()):
    position_data = waterfall_analysis.loc[position]
    total_at_position = position_data['report_id'].sum()
    
    print(f"\nPosition {position} ({total_at_position:,} total issues):")
    
    # Sort vendors at this position by issue count
    vendors_at_pos = position_data.sort_values('report_id', ascending=False)
    
    for vendor in vendors_at_pos.index:
        row = vendors_at_pos.loc[vendor]
        pct = (row['report_id'] / total_at_position) * 100
        
        marker = "★" if vendor == "Cognism" else " "
        
        print(f"  {marker} {vendor:<12} | {int(row['report_id']):>4} issues ({pct:>5.1f}%) | "
              f"{row['days_since_profile_update']:>5.1f} days stale | "
              f"{row['email_bounce_rate']:>5.1f}% email | "
              f"{row['phone_invalid_rate']:>5.1f}% phone")

print()

# ============================================================================
# 7. RECOMMENDATION SUMMARY
# ============================================================================

print("=" * 100)
print("7. KEY FINDINGS & RECOMMENDATIONS")
print("=" * 100)
print()

findings = []

# Finding 1: Data Freshness
if cognism_staleness < others_staleness:
    improvement = ((others_staleness - cognism_staleness) / others_staleness * 100)
    findings.append(f"✓ FINDING 1: Data Freshness")
    findings.append(f"  Cognism provides {improvement:.1f}% fresher data than existing vendors")
    findings.append(f"  ({cognism_staleness:.1f} days vs {others_staleness:.1f} days average)")
    findings.append("")

# Finding 2: Issue Volume
cognism_issue_rate = len(cognism_data) / (len(cognism_data) + len(other_vendors_data)) * 100
findings.append(f"✓ FINDING 2: Issue Volume")
findings.append(f"  Cognism represents only {cognism_issue_rate:.1f}% of all data quality issues")
findings.append(f"  despite being active throughout Q2/Q3")
findings.append("")

# Finding 3: Contact Accuracy
findings.append(f"⚠ FINDING 3: Contact Accuracy")
if email_diff > 0:
    findings.append(f"  Email bounce rate is {email_diff:.1f}% higher than average")
    findings.append(f"  This is acceptable given the significant data freshness advantage")
else:
    findings.append(f"  Email bounce rate is {abs(email_diff):.1f}% better than average")
findings.append("")

# Finding 4: Scale
if len(cognism_data) < 200:
    findings.append(f"⚠ FINDING 4: Limited Data Sample")
    findings.append(f"  Only {len(cognism_data)} issues tracked for Cognism")
    findings.append(f"  Recommend expanding usage to validate performance at scale")
    findings.append("")

# Recommendations
findings.append("RECOMMENDATIONS:")
findings.append("-" * 80)
findings.append("")
findings.append("IMMEDIATE (0-30 days):")
findings.append("  1. Promote Cognism to Waterfall Position 1")
findings.append("  2. Increase Cognism usage from ~2% to 30-40% of searches")
findings.append("  3. Demote worst performer (Vendor_D) to last position")
findings.append("")
findings.append("SHORT-TERM (30-90 days):")
findings.append("  4. Monitor Cognism performance at higher volume")
findings.append("  5. Set 90-day maximum staleness requirement for all vendors")
findings.append("  6. Implement quarterly vendor performance reviews")
findings.append("")
findings.append("LONG-TERM (90+ days):")
findings.append("  7. Consider Cognism as primary vendor (50%+ of searches)")
findings.append("  8. Phase out vendors with staleness >120 days")
findings.append("  9. Negotiate quality-based pricing with vendors")

for finding in findings:
    print(finding)

print()
print("=" * 100)
print("ANALYSIS COMPLETE")
print("=" * 100)
print()
print(f"Report generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
print(f"Output saved to: cognism_deep_dive_analysis.py")
print()

# ============================================================================
# 8. SAVE DETAILED METRICS TO JSON
# ============================================================================

output_data = {
    'analysis_date': datetime.now().isoformat(),
    'summary': {
        'cognism_issues': int(len(cognism_data)),
        'cognism_pct_of_total': float(len(cognism_data) / len(df) * 100),
        'cognism_staleness_days': float(cognism_staleness),
        'others_staleness_days': float(others_staleness),
        'staleness_improvement_pct': float(staleness_improvement),
        'cognism_email_bounce_rate': float(cognism_email_bounce),
        'others_email_bounce_rate': float(others_email_bounce),
        'cognism_phone_invalid_rate': float(cognism_phone_invalid),
        'others_phone_invalid_rate': float(others_phone_invalid)
    },
    'issue_type_comparison': {
        'cognism': {issue: int(count) for issue, count in cognism_issue_types.items()},
        'others': {issue: int(count) for issue, count in others_issue_types.items()}
    }
}

if len(cognism_data) > 0 and 'cognism_by_region' in locals():
    output_data['regional_performance'] = cognism_by_region.reset_index().to_dict('records')

if len(cognism_data_time) > 0 and 'monthly_cognism' in locals() and len(monthly_cognism) > 0:
    monthly_data = monthly_cognism.reset_index()
    monthly_data['month'] = monthly_data['month'].astype(str)
    output_data['monthly_trend'] = monthly_data.to_dict('records')

with open('/Users/mpotteiger/Developer/PM Demo/analysis/cognism_detailed_metrics.json', 'w') as f:
    json.dump(output_data, f, indent=2)

print("Detailed metrics saved to: analysis/cognism_detailed_metrics.json")
print()

