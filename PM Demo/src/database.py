"""
Database Setup and Configuration
Provides SQLAlchemy engine, session management, and base model class.
"""

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session
from contextlib import contextmanager

from config import DATABASE_URL

# Create SQLAlchemy engine
# echo=True will log all SQL statements for debugging
engine = create_engine(
    DATABASE_URL,
    echo=False,  # Set to True for SQL debugging
    connect_args={"check_same_thread": False}  # Needed for SQLite
)

# Session factory for database operations
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Thread-safe session for concurrent access
Session = scoped_session(SessionLocal)

# Base class for all ORM models
# All model classes will inherit from this
Base = declarative_base()


@contextmanager
def get_db_session():
    """
    Context manager for database sessions.
    Ensures proper session cleanup and transaction management.
    
    Usage:
        with get_db_session() as session:
            vendors = session.query(Vendor).all()
    """
    session = Session()
    try:
        yield session
        session.commit()
    except Exception as e:
        session.rollback()
        raise e
    finally:
        session.close()


def init_db():
    """
    Initialize the database by creating all tables.
    Should be called once when setting up the application.
    """
    # Import all models to ensure they're registered with Base
    from models import vendor, candidate, data_quality_issue, waterfall_config
    
    # Create all tables
    Base.metadata.create_all(bind=engine)
    print(f"Database initialized at: {DATABASE_URL}")


def drop_all_tables():
    """
    Drop all tables from the database.
    WARNING: This will delete all data!
    """
    Base.metadata.drop_all(bind=engine)
    print("All tables dropped from database.")

