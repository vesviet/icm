# Agent Skills — ICM Project

This project uses the global engineering skill pack from `.agent/`.

## Mandatory Rules (Always-On)

Before ANY action, you MUST read and follow the rules in `.agent/rules/code.md`. Key constraints:

- **META-RULE**: Before finalizing any response or executing a command, explicitly verify your action against `.agent/rules/code.md`. If any step violates a rule, halt and ask the user for permission.
- Do NOT create a commit unless the user explicitly confirms.
- Do NOT push, tag, or publish unless the user explicitly confirms.
- Ensure all code changes pass local linters, tests, and build checks before committing.
- Do NOT expose secrets, credentials, or sensitive values in any user-visible artifact.
- Do NOT mention agents, AI workflow, or internal process metadata in commits, changelogs, or release notes.
- Prefer repo-local standards over defaults when they exist.

Full rules: `.agent/rules/code.md`

## Role System

When the user assigns you a Role, you MUST:

1. Read `.agent/role/role-standard.md` first (mandatory for ALL roles).
2. Read the specific role file from `.agent/role/<role-name>.md`.
3. Follow the **SKILL TOOLBOX LOCK**: Only use Primary Skills listed in your role's Skill Toolbox. Supporting Skills require collaboration context. Skills outside the Toolbox require explicit user permission.
4. Follow the **BOUNDARY LOCK**: If a task falls outside your role's core responsibilities, politely decline and recommend the appropriate role.

Available roles: `.agent/role/README.md`

## Skills (Organized by Taxonomy)

Skills are organized under `.agent/skills/` in taxonomy folders:

- `.agent/skills/agent/` — Agent context management, memory compaction, tool orchestration, quality gates, and handoff
- `.agent/skills/foundation/` — Portable skills for all roles (commit, review, test, navigate, troubleshoot)
- `.agent/skills/backend/` — API, event, integration, and service scaffolding
- `.agent/skills/frontend/` — UI components, pages, API client integration, frontend testing
- `.agent/skills/platform/` — Deployment, runtime debugging, telemetry
- `.agent/skills/security-data/` — Secrets, database maintenance, security audit
- `.agent/skills/documentation/` — Technical docs and tech radar

Each skill has a `SKILL.md` with steps, rules, and a checklist. Read the full SKILL.md before executing.

Skill index: `.agent/skills/README.md`

## Workflows

When executing a workflow from `.agent/workflows/`, you MUST:

1. Output a markdown checklist `[ ]` for ALL steps.
2. Process only ONE step at a time.
3. Mark each step as `[x]` and explain the result before moving to the next.
4. Respect the `Role:` tag on each step — that role owns the step.

Available workflows: `.agent/workflows/README.md`

## Quick Reference

| Need | Go to |
|------|-------|
| Rules (always-on) | `.agent/rules/code.md` |
| Role standard | `.agent/role/role-standard.md` |
| All roles | `.agent/role/README.md` |
| All skills | `.agent/skills/README.md` |
| All workflows | `.agent/workflows/README.md` |
