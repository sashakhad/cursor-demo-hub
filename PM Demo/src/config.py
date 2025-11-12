"""
Application Configuration
Manages database connections and application settings.
"""

import os
from pathlib import Path

# Base directory for the project
BASE_DIR = Path(__file__).parent.parent

# Database configuration
DATABASE_PATH = BASE_DIR / "data" / "recruiting_data.db"
DATABASE_URL = f"sqlite:///{DATABASE_PATH}"

# Application settings
APP_NAME = "Vendor Waterfall System"
VERSION = "1.0.0"

# Waterfall configuration
DEFAULT_WATERFALL_CONFIG = "standard"
MAX_WATERFALL_POSITIONS = 6

# Data quality thresholds
STALENESS_WARNING_DAYS = 90
STALENESS_CRITICAL_DAYS = 120
EMAIL_BOUNCE_WARNING_THRESHOLD = 0.25
EMAIL_BOUNCE_CRITICAL_THRESHOLD = 0.35

