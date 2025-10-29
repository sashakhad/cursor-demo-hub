# Start App

Start the development server and open the application in Chrome.

## Task

1. **Start the development server**:
   - Run `pnpm dev` in the background
   - The server will start on `http://localhost:3000`
   - Use the `run_terminal_cmd` tool with `is_background: true`

2. **Wait for the server to be ready**:
   - Wait a few seconds (3 seconds) for the server to start up
   - Use the `browser_wait_for` tool with the `time` parameter set to 3-5 seconds
   - This ensures the server is ready before attempting to navigate

3. **Open Chrome and navigate to the app**:
   - Use the browser navigation tool to navigate to `http://localhost:3000`
   - This will open Chrome automatically and load the application

## Notes

- The dev server runs with Turbopack (`next dev --turbopack`)
- The server runs in the background, so it will continue running after the command completes
- To stop the server, use Ctrl+C in the terminal or kill the process on port 3000
- If port 3000 is already in use, check what's running and handle accordingly

