# Claude Code AI OS Integration for Antigravity + Gemini

This integration adds the Claude Code AI OS pack as an **optional vendor knowledge pack**.
It must not override the existing Vercel skills, project memory, or core Antigravity/Gemini workflow.

## Non-destructive policy

- Keep all existing Vercel skills unchanged.
- Do not copy Claude skills directly into `.agents/skills` by default.
- Load Claude-derived agents/skills only when the task requires them.
- Prefer the local project memory over any vendor examples or default context.
- Never import domain memory from another project.

## Recommended use

Use this optional pack for:

- planning complex changes
- code review
- security scan
- debugging loops
- research-before-code workflows
- TDD workflows
- context budget control
- continuous learning patterns
- command workflow inspiration

Avoid loading the whole pack into context at once. Use the router files to select a small subset.
