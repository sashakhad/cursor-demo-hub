#!/usr/bin/env bash
set -euo pipefail

# Setup script for non-developers
# Ensures the repository is up to date and creates a fresh branch to work on

echo "🚀 Setting up your workspace..."

# Fetch latest changes from remote
echo "📥 Fetching latest changes from remote..."
git fetch origin

# Get the default branch (usually main or master)
DEFAULT_BRANCH=$(git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@')
echo "📌 Default branch: $DEFAULT_BRANCH"

# Stash any local changes if there are any
if ! git diff-index --quiet HEAD -- 2>/dev/null; then
  echo "💾 Stashing any local changes..."
  git stash push -m "Setup: Stashed before switching branches on $(date +%Y-%m-%d\ %H:%M:%S)" || true
fi

# Switch to default branch and pull latest
echo "🔄 Updating $DEFAULT_BRANCH branch..."
git checkout "$DEFAULT_BRANCH" 2>/dev/null || git checkout -b "$DEFAULT_BRANCH" "origin/$DEFAULT_BRANCH"
git pull origin "$DEFAULT_BRANCH"

# Create a new branch with timestamp
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
NEW_BRANCH="work-${TIMESTAMP}"

echo "🌿 Creating new branch: $NEW_BRANCH"
git checkout -b "$NEW_BRANCH"

echo ""
echo "✅ Setup complete!"
echo "📝 You're now on branch: $NEW_BRANCH"
echo "💡 You can start working! Run 'pnpm run dev' to start the development server."

