#!/usr/bin/env python3
"""
Vendor Data Quality Analysis
Analyzes vendor performance and waterfall optimization opportunities
"""

import pandas as pd
import numpy as np
from collections import defaultdict
import json

# Read the data
df = pd.read_csv('/Users/mpotteiger/Developer/PM Demo/data/stale_data_report_april25-sept25/jewel_vendor_waterfall_reports_q2q3_2024.csv')

print("=" * 80)
print("VENDOR DATA QUALITY ANALYSIS - Q2/Q3 2024")
print("=" * 80)
print()

# Basic dataset info
print(f"Total Records: {len(df):,}")
print(f"Date Range: {df['timestamp'].min()} to {df['timestamp'].max()}")
print(f"Unique Companies: {df['company_name'].nunique()}")
print(f"Unique Candidates: {df['candidate_id'].nunique()}")
print()

# ============================================================================
# VENDOR PERFORMANCE ANALYSIS
# ============================================================================

print("=" * 80)
print("1. VENDOR ISSUE BREAKDOWN")
print("=" * 80)
print()

# Group by vendor and issue type
vendor_issues = df.groupby(['vendor_hit', 'issue_type']).size().reset_index(name='count')
vendor_totals = df.groupby('vendor_hit').size().reset_index(name='total_issues')

print("Total Issues by Vendor:")
print("-" * 40)
for _, row in vendor_totals.sort_values('total_issues', ascending=False).iterrows():
    pct = (row['total_issues'] / len(df)) * 100
    print(f"  {row['vendor_hit']}: {row['total_issues']:,} issues ({pct:.1f}%)")
print()

print("Issue Types by Vendor:")
print("-" * 40)
for vendor in sorted(df['vendor_hit'].unique()):
    vendor_data = vendor_issues[vendor_issues['vendor_hit'] == vendor]
    total = vendor_data['count'].sum()
    print(f"\n{vendor} ({total:,} total issues):")
    for _, issue in vendor_data.sort_values('count', ascending=False).iterrows():
        pct = (issue['count'] / total) * 100
        print(f"  - {issue['issue_type']}: {issue['count']:,} ({pct:.1f}%)")
print()

# ============================================================================
# DATA QUALITY METRICS
# ============================================================================

print("=" * 80)
print("2. DATA QUALITY METRICS BY VENDOR")
print("=" * 80)
print()

# Calculate key metrics per vendor
vendor_metrics = df.groupby('vendor_hit').agg({
    'days_since_profile_update': ['mean', 'median', 'max'],
    'email_bounced': 'sum',
    'phone_invalid': 'sum',
    'report_id': 'count'
}).round(2)

vendor_metrics.columns = ['_'.join(col).strip() for col in vendor_metrics.columns.values]
vendor_metrics = vendor_metrics.rename(columns={'report_id_count': 'total_issues'})

# Calculate error rates
vendor_metrics['email_bounce_rate'] = (vendor_metrics['email_bounced_sum'] / vendor_metrics['total_issues'] * 100).round(2)
vendor_metrics['phone_invalid_rate'] = (vendor_metrics['phone_invalid_sum'] / vendor_metrics['total_issues'] * 100).round(2)

print("Average Days Since Profile Update:")
print("-" * 40)
for vendor in vendor_metrics.sort_values('days_since_profile_update_mean', ascending=False).index:
    row = vendor_metrics.loc[vendor]
    print(f"  {vendor}: {row['days_since_profile_update_mean']:.1f} days (median: {row['days_since_profile_update_median']:.0f}, max: {row['days_since_profile_update_max']:.0f})")
print()

print("Contact Information Accuracy:")
print("-" * 40)
for vendor in vendor_metrics.index:
    row = vendor_metrics.loc[vendor]
    print(f"  {vendor}:")
    print(f"    Email bounce rate: {row['email_bounce_rate']:.1f}%")
    print(f"    Phone invalid rate: {row['phone_invalid_rate']:.1f}%")
print()

# ============================================================================
# WATERFALL POSITION ANALYSIS
# ============================================================================

print("=" * 80)
print("3. WATERFALL POSITION ANALYSIS")
print("=" * 80)
print()

waterfall_vendor = df.groupby(['waterfall_position', 'vendor_hit']).size().reset_index(name='count')
waterfall_totals = df.groupby('waterfall_position').size()

print("Issues by Waterfall Position:")
print("-" * 40)
for position in sorted(df['waterfall_position'].unique()):
    position_data = waterfall_vendor[waterfall_vendor['waterfall_position'] == position]
    total = position_data['count'].sum()
    pct = (total / len(df)) * 100
    print(f"\nPosition {position} ({total:,} issues, {pct:.1f}% of total):")
    for _, row in position_data.sort_values('count', ascending=False).iterrows():
        vendor_pct = (row['count'] / total) * 100
        print(f"  {row['vendor_hit']}: {row['count']:,} ({vendor_pct:.1f}%)")
print()

# ============================================================================
# ISSUE SEVERITY ANALYSIS
# ============================================================================

print("=" * 80)
print("4. ISSUE SEVERITY BY VENDOR")
print("=" * 80)
print()

# Define issue severity
critical_issues = ['invalid_email', 'wrong_phone']
high_issues = ['stale_employment', 'outdated_title']
medium_issues = ['stale_location']

df['severity'] = df['issue_type'].apply(lambda x: 
    'Critical' if x in critical_issues else
    'High' if x in high_issues else 'Medium'
)

severity_by_vendor = df.groupby(['vendor_hit', 'severity']).size().reset_index(name='count')

print("Issue Severity Distribution:")
print("-" * 40)
for vendor in sorted(df['vendor_hit'].unique()):
    vendor_sev = severity_by_vendor[severity_by_vendor['vendor_hit'] == vendor]
    total = vendor_sev['count'].sum()
    print(f"\n{vendor}:")
    for _, row in vendor_sev.sort_values('severity').iterrows():
        pct = (row['count'] / total) * 100
        print(f"  {row['severity']}: {row['count']:,} ({pct:.1f}%)")
print()

# ============================================================================
# WATERFALL OPTIMIZATION ANALYSIS
# ============================================================================

print("=" * 80)
print("5. WATERFALL OPTIMIZATION OPPORTUNITIES")
print("=" * 80)
print()

# Calculate quality score for each vendor (lower is better)
vendor_scores = pd.DataFrame()
vendor_scores['total_issues'] = vendor_totals.set_index('vendor_hit')['total_issues']
vendor_scores['avg_staleness'] = vendor_metrics['days_since_profile_update_mean']
vendor_scores['email_bounce_rate'] = vendor_metrics['email_bounce_rate']
vendor_scores['phone_invalid_rate'] = vendor_metrics['phone_invalid_rate']

# Normalize scores (0-100, lower is better)
vendor_scores['staleness_score'] = (vendor_scores['avg_staleness'] / vendor_scores['avg_staleness'].max() * 100).round(2)
vendor_scores['contact_error_score'] = ((vendor_scores['email_bounce_rate'] + vendor_scores['phone_invalid_rate']) / 2).round(2)
vendor_scores['volume_score'] = (vendor_scores['total_issues'] / vendor_scores['total_issues'].max() * 100).round(2)

# Overall quality score (weighted average)
vendor_scores['quality_score'] = (
    vendor_scores['staleness_score'] * 0.4 +
    vendor_scores['contact_error_score'] * 0.4 +
    vendor_scores['volume_score'] * 0.2
).round(2)

vendor_scores = vendor_scores.sort_values('quality_score')

print("Vendor Quality Ranking (Lower Score = Better Quality):")
print("-" * 60)
print(f"{'Vendor':<12} {'Quality Score':<15} {'Issues':<10} {'Staleness':<12} {'Contact Errors'}")
print("-" * 60)
for vendor in vendor_scores.index:
    row = vendor_scores.loc[vendor]
    print(f"{vendor:<12} {row['quality_score']:<15.1f} {int(row['total_issues']):<10,} {row['avg_staleness']:<12.1f} {row['contact_error_score']:.1f}%")
print()

# Current vs Recommended waterfall positions
print("Current Waterfall Vendor Distribution:")
print("-" * 40)
current_waterfall = df.groupby(['waterfall_position', 'vendor_hit']).size().unstack(fill_value=0)
print(current_waterfall)
print()

print("=" * 80)
print("6. RECOMMENDATIONS")
print("=" * 80)
print()

best_vendors = vendor_scores.head(2).index.tolist()
worst_vendors = vendor_scores.tail(2).index.tolist()

recommendations = []

recommendations.append(f"1. PROMOTE HIGH-QUALITY VENDORS")
recommendations.append(f"   • {best_vendors[0]} shows the best overall quality (score: {vendor_scores.loc[best_vendors[0], 'quality_score']:.1f})")
recommendations.append(f"   • Consider prioritizing in waterfall positions 1-2")
recommendations.append("")

recommendations.append(f"2. DEMOTE OR REPLACE POOR PERFORMERS")
recommendations.append(f"   • {worst_vendors[-1]} has the highest issues (score: {vendor_scores.loc[worst_vendors[-1], 'quality_score']:.1f})")
recommendations.append(f"   • Move to position 4 or consider removal from waterfall")
recommendations.append("")

recommendations.append(f"3. DATA FRESHNESS PRIORITY")
avg_staleness = df['days_since_profile_update'].mean()
recommendations.append(f"   • Average profile staleness: {avg_staleness:.0f} days")
recommendations.append(f"   • Implement 90-day maximum staleness requirement")
recommendations.append(f"   • Request more frequent updates from vendors")
recommendations.append("")

critical_rate = (df['severity'] == 'Critical').sum() / len(df) * 100
recommendations.append(f"4. CRITICAL ISSUE REDUCTION")
recommendations.append(f"   • {critical_rate:.1f}% of issues are critical (invalid contact info)")
recommendations.append(f"   • Implement pre-validation before data acceptance")
recommendations.append(f"   • Consider penalties for vendors with >30% critical error rates")
recommendations.append("")

recommendations.append(f"5. RECOMMENDED OPTIMAL WATERFALL:")
ranked_vendors = vendor_scores.index.tolist()
for i, vendor in enumerate(ranked_vendors, 1):
    score = vendor_scores.loc[vendor, 'quality_score']
    recommendations.append(f"   Position {i}: {vendor} (quality score: {score:.1f})")

for rec in recommendations:
    print(rec)

print()
print("=" * 80)
print("Analysis complete. See waterfall_optimization_report.md for detailed recommendations.")
print("=" * 80)

# Save detailed metrics to JSON
output_data = {
    'vendor_totals': vendor_totals.to_dict('records'),
    'vendor_metrics': vendor_metrics.reset_index().to_dict('records'),
    'vendor_quality_scores': vendor_scores.reset_index().to_dict('records'),
    'recommended_waterfall': {f'position_{i+1}': vendor for i, vendor in enumerate(ranked_vendors)},
    'summary_stats': {
        'total_issues': int(len(df)),
        'avg_staleness_days': float(df['days_since_profile_update'].mean()),
        'critical_issue_rate': float(critical_rate),
        'date_range': f"{df['timestamp'].min()} to {df['timestamp'].max()}"
    }
}

with open('/Users/mpotteiger/Developer/PM Demo/analysis/vendor_metrics.json', 'w') as f:
    json.dump(output_data, f, indent=2)

print("\nDetailed metrics saved to: analysis/vendor_metrics.json")

