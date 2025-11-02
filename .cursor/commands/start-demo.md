# Start Demo

Prepare a clean demo environment by creating a new demo-run branch and starting the application.

## Task

1. **Ensure we're up to date with origin main**:
   - Fetch latest from origin: `git fetch origin`
   - If currently on a different branch, switch to main: `git checkout main`
   - Pull latest changes: `git pull origin main`
   - If there are uncommitted changes, stash them first: `git stash push -m "startdemo: stashing changes"`

2. **Create a new demo-run branch**:
   - Check if `demo-run` branch already exists locally: `git branch --list demo-run`
   - If it exists, create a new branch with timestamp: `demo-run-YYYYMMDD-HHMMSS`
   - Use `git checkout -b demo-run` (or `git checkout -b demo-run-YYYYMMDD-HHMMSS`)
   - This ensures each demo starts from a fresh branch based on latest main

3. **Start the application**:
   - Run the existing `/start-app` slash command
   - This will handle:
     - Killing processes on ports 3000-3009 
     - Starting the dev server
     - Opening Chrome at localhost:3000

## Example Flow

```
# Current branch: feature-xyz with uncommitted changes
$ git stash push -m "startdemo: stashing changes"
$ git checkout main
$ git fetch origin
$ git pull origin main
$ git branch --list demo-run  # exists
$ git checkout -b demo-run-20241102-143052
# Now run /start-app command
```

## Notes

- Always creates a fresh demo branch from latest main
- Stashes any uncommitted work to prevent loss
- Automatically handles existing demo-run branches by appending timestamps
- Port cleanup is handled by the start-app command, so no duplication
- To return to previous work after demo: `git checkout - && git stash pop`