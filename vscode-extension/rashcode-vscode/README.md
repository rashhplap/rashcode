# rashcode VS Code Extension

A practical VS Code companion for rashcode with a project-aware **Control Center**, predictable terminal launch behavior, and quick access to useful rashcode workflows.

## Features

- **Real Control Center status** in the Activity Bar:
  - whether the configured `rashcode` command is installed
  - the launch command being used
  - whether the launch shim injects `RASH_CODE_USE_OPENAI=1`
  - the current workspace folder
  - the launch cwd that will be used for terminal sessions
  - whether `.rashcode-profile.json` exists in the current workspace root
  - a conservative provider summary derived from the workspace profile or known environment flags
- **Project-aware launch behavior**:
  - `Launch rashcode` launches from the active editor's workspace when possible
  - falls back to the first workspace folder when needed
  - avoids launching from an arbitrary default cwd when a project is open
- **Practical sidebar actions**:
  - Launch rashcode
  - Launch in Workspace Root
  - Open Workspace Profile
  - Open Repository
  - Open Setup Guide
  - Open Command Palette
- **Built-in dark theme**: `rashcode Terminal Black`

## Requirements

- VS Code `1.95+`
- `rashcode` available in your terminal PATH (`npm install -g @rashhplap/rashcode`)

## Commands

- `rashcode: Open Control Center`
- `rashcode: Launch in Terminal`
- `rashcode: Launch in Workspace Root`
- `rashcode: Open Repository`
- `rashcode: Open Setup Guide`
- `rashcode: Open Workspace Profile`

## Settings

- `rashcode.launchCommand` (default: `rashcode`)
- `rashcode.terminalName` (default: `rashcode`)
- `rashcode.useOpenAIShim` (default: `false`)

`rashcode.useOpenAIShim` only injects `RASH_CODE_USE_OPENAI=1` into terminals launched by the extension. It does not guess or configure a provider by itself.

## Notes on Status Detection

- Provider status prefers the real workspace `.rashcode-profile.json` file when present.
- If no saved profile exists, the extension falls back to known environment flags available to the VS Code extension host.
- If the source of truth is unclear, the extension shows `unknown` instead of guessing.

## Development

From this folder:

```bash
npm run test
npm run lint
```

To package (optional):

```bash
npm run package
```

