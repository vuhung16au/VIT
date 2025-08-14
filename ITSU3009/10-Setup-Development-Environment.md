# Setup Development Environment: Cursor vs VS Code + GitHub Copilot

This guide helps you choose between Cursor and VS Code + GitHub Copilot, then sets you up quickly on macOS.

## TL;DR — Which should you pick?

- Cursor
  - More automated day-to-day (built-in AI workflows, indexing).
  - Less manual configuration and faster onboarding.
  - Great for moving fast with minimal setup.
- VS Code + Copilot (including Agent Mode)
  - More control over AI behavior, tools, and workspace settings.
  - Richer ecosystem and features; integrates deeply with tasks, test runners, and extensions.
  - Can take longer on complex requests due to multi-step planning and tool runs.

Free for students

- Cursor for students: <https://cursor.com/students>
- GitHub Student Developer Pack (includes Copilot Free plan eligibility): <https://github.com/education/students>


---

## Install Cursor (macOS)

Based on the official installation guide: <https://docs.cursor.com/en/get-started/installation>

1) Download and install
	- Go to <https://cursor.com/> and click “Download”.
	- Or pick a specific build: <https://cursor.com/downloads>
	- Run the installer and open Cursor.

2) First-time setup wizard
	- Choose keyboard shortcuts, theme, and terminal preferences.
	- You can re-run onboarding anytime: press ⌘⇧P and search for “Cursor: Start Onboarding”.
	- Learn more: Keyboard Shortcuts, Themes, Shell Commands (linked from the doc page).

3) Create an account to unlock AI
	- You’ll be prompted during setup, or open Settings (⌘⇧J).
	- Manage your account at <https://cursor.com/dashboard>.

4) Understand codebase indexing
	- Indexing starts automatically when you open a project and typically takes 1–15 minutes depending on size.
	- Progress: Settings (⌘⇧J) → Indexing & Docs.
	- More details: <https://docs.cursor.com/en/context/codebase-indexing>

5) Optional: migrate settings from other editors
	- Import VS Code settings directly.
	- Migration guides available for JetBrains, Eclipse, Neovim, and Sublime.

6) Next steps
	- Quickstart: <https://docs.cursor.com/en/get-started/quickstart>
	- Concepts: <https://docs.cursor.com/en/get-started/concepts>
	- Guides: <https://docs.cursor.com/en/guides>
	- Troubleshooting: <https://docs.cursor.com/en/troubleshooting/common-issues>

Why Cursor?

- Minimal setup, strong default AI behavior, and automatic project indexing.
- Ideal if you want to move quickly with fewer knobs to turn.

---

## Install VS Code + GitHub Copilot (Agent Mode)

Reference: <https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode>

Prerequisites

- Install the latest VS Code: <https://code.visualstudio.com/download>
- Access to GitHub Copilot (Copilot Free plan available): <https://github.com/github-copilot/signup>

Enable Agent Mode (autonomous edits inside VS Code)

- Requires VS Code 1.99+.
- Turn on the setting: `chat.agent.enabled`.

Using Agent Mode

1) Open Chat (⌃⌘I) and select “Agent” from the chat mode selector.
2) Enter a high-level request (e.g., “Add OAuth login”); the agent finds context and edits files.
3) Manage tools via the Tools icon; you can reference tools with `#toolName` in prompts.
4) Confirm tool runs and terminal commands when prompted (for safety).
5) Optionally edit tool input parameters before execution.
6) Auto-fix is on by default (`github.copilot.chat.agent.autoFix`); VS Code iterates to resolve issues like failed tests.
7) Review suggested edits in-editor; accept or discard per file or all at once.

Useful settings

- `chat.agent.maxRequests`: caps the number of agent requests per prompt.
- `github.copilot.chat.agent.runTasks`: allows running `tasks.json` tasks automatically.
- `chat.tools.autoApprove` (experimental): auto-approve all tools/commands — be cautious.
- `chat.tools.terminal.autoApprove`: fine-grained allow/deny for terminal commands.
- `chat.checkpoints.enabled`: enable checkpoints to revert multi-file edits.

Agent Mode vs Copilot Coding Agent

- Agent Mode runs inside VS Code with user-in-the-loop, applies edits directly.
- Copilot coding agent runs in GitHub and creates PRs for well-defined tasks.
- Comparison: <https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode#_agent-mode-vs-copilot-coding-agent>

Troubleshooting

- Agent Mode not visible: update VS Code to 1.99+, enable `chat.agent.enabled`.
- Too many tools error (max 128): deselect tools or enable virtual tools threshold.
- Terminal/tool prompts blocked: review approvals or tweak `chat.tools.*` settings.

Why VS Code + Copilot?

- Maximum control, visibility, and extensibility with VS Code’s ecosystem.
- Best when you want to shape the plan, wire tools, and integrate with testing/build tasks.

---

## Quick Comparison

- Automation
  - Cursor: Higher by default (indexing, guided flows).
  - VS Code Agent Mode: High for complex tasks; may run multiple steps/tools.
- Control & Ecosystem
  - Cursor: Streamlined, opinionated.
  - VS Code: Extensive control, extensions, and workflows.
- Performance feel
  - Cursor: Often feels snappy for everyday work.
  - Agent Mode: May take longer for complex, multi-step requests (planning, tools, tests).

Pick Cursor if you prefer speed and simplicity. Pick VS Code + Copilot if you want deep control, tooling, and integration with your existing workflows.
