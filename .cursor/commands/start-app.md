# Start App

Start the development server and open the application in Cursor's built-in browser.

## Task

1. **Clean ports before starting**:
   - Run `pnpm kill:ports` to kill any processes running on ports 3000-3009
   - This ensures the server will start on port 3000 instead of falling back to another port
   - Use the `run_terminal_cmd` tool to execute `pnpm kill:ports`

2. **Start the development server**:
   - Run `pnpm dev` in the background
   - The server will start on `http://localhost:3000`
   - Use the `run_terminal_cmd` tool with `is_background: true`

3. **Wait for the server to be ready**:
   - Wait a few seconds (3-5 seconds) for the server to start up
   - Use the `browser_wait_for` tool with the `time` parameter set to 3-5 seconds
   - This ensures the server is ready before attempting to navigate

4. **Open Cursor's browser and navigate to the app**:
   - Use the `browser_navigate` tool to navigate to `http://localhost:3000`
   - This will open Cursor's built-in browser panel and load the application

## Notes

- The dev server runs with Turbopack (`next dev --turbopack`)
- The server runs in the background, so it will continue running after the command completes
- Ports are cleaned before starting to ensure the server always starts on port 3000
- If you need to stop the server manually, use Ctrl+C in the terminal or kill the process on port 3000
- Cursor's built-in browser allows direct interaction with the agent for testing and debugging

