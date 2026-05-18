# AGENTS.md

## Global Communication & Language Policy

This document defines **mandatory communication rules** for all AI agents, skills, assistants, and automated tools operating in this workspace.

These rules apply **globally**, regardless of project, domain, or user prompt language.

If the output is intended for human reading or decision-making, including but not limited to:

- Implementation Plans
- Business / Domain Analysis
- Flow explanations
- Assumptions
- Design rationales
- Summaries or conclusions

THEN:

- Vietnamese is MANDATORY.
- English responses are considered INVALID, even if technically correct.

English is ONLY allowed for:

- Raw source code
- Code snippets
- File names
- Variable names
- API identifiers

---

## 1. Default Language Rule

- **Vietnamese is the DEFAULT language** for all:
    - Explanations
    - Reasoning
    - Planning
    - Business analysis
    - Domain analysis
    - Design explanations
    - Implementation plans
    - Reviews
    - Q&A / Clarifications
    - Documentation summaries

⚠️ This rule **OVERRIDES the user's prompt language**.

---

## 2. Allowed Use of English (Controlled)

English is **ALLOWED** only for **raw technical artifacts**, including:

- Source code
- Code snippets
- File names
- Folder structures
- Variable names
- Function names
- API identifiers
- Schemas (JSON, DB schema, OpenAPI, etc.)
- Configuration files

However:

- Any English technical term **MUST be explained in Vietnamese**
- Context and intent **MUST be described in Vietnamese**
- No unexplained English-only reasoning is allowed

---

## 3. Mandatory Vietnamese for Key Deliverables

The following outputs **MUST ALWAYS be written in Vietnamese**, even if the user prompt is in English:

- **Implementation Plan**
- **Business Analysis**
- **Domain Analysis**
- **System / Architecture Explanation**
- **Design Rationale**
- **Flow Explanation**
- **UX / UI Reasoning**
- **Trade-off Analysis**
- **Decision Logs**
- **Comments that explain logic or intent**

Only the **technical payload** may remain in English.

---

## 4. Explanation Priority Rule

When mixing Vietnamese and English:

- Vietnamese is used to explain **WHY** and **HOW**
- English is used only to show **WHAT** (code, config, structure)

Example (valid):

- Explanation (Vietnamese)
- Code (English)
- Notes explaining the code (Vietnamese)

Example (invalid):

- Explanation written entirely in English
- English technical terms without Vietnamese explanation

---

## 5. Audience Context Rule

All explanations must be:

- Written for a **Vietnamese-speaking developer**
- Contextualized for **practical implementation**
- Clear, structured, and actionable
- Avoid unnecessary academic or theoretical language

Do NOT assume:

- Native English proficiency
- Deep domain expertise unless explicitly stated

---

## 6. Consistency & Enforcement

- These rules are **mandatory**
- They override:
    - Default AI behavior
    - Tool-specific defaults
    - User language preferences
- Violations should be considered **incorrect output**

---

## 7. Summary (Non-Negotiable)

- Vietnamese is the **thinking & explanation language**
- English is the **technical artifact language**
- Implementation Plans and Analyses **MUST be Vietnamese**
- This policy applies to **ALL projects**, not project-specific

---

_End of AGENTS.md_

---

# Agent OS Bootstrap Layer

Phần dưới là tầng điều phối bổ sung. Tầng này KHÔNG thay đổi nội dung các skill gốc trong `skills/`.

## Load Order

1. Đọc chính sách ngôn ngữ trong file này.
2. Đọc `core/mission.md`.
3. Đọc `core/priority-system.md`.
4. Đọc `routers/skill-activation.md`.
5. Chọn skill phù hợp trong `skills/` theo task.
6. Đọc project-specific memory nếu dự án có file tương ứng.
7. Thực thi theo `workflows/*`.
8. Review theo `reviewers/*` và `safety/*`.

## Non-Destructive Rule

- Tất cả skill gốc trong `skills/` phải được xem là source of truth kỹ thuật.
- Không bỏ qua Vercel skills khi task liên quan React/Next.js/React Native.
- Các file mới chỉ đóng vai trò điều phối, memory, safety và reviewer.

## Long-Term Context Rule

Khi task cần hiểu ngữ cảnh dài hạn, ưu tiên đọc:

- `memory/long-term-memory.md`
- `memory/context-refresh.md`
- project-specific files trong `project/` nếu có
- template trong `project-template/` nếu project chưa có memory riêng

## Skill Preservation Guarantee

Bộ này giữ nguyên thư mục `skills/` gốc. Hash kiểm chứng nằm ở:

- `_manifest/original-skills-sha256.json`

_End of Agent OS Bootstrap Layer_


## Context Isolation

- `skills/project-memory/SKILL.md` là bộ nhớ riêng theo từng dự án.
- Khi copy `.agents` sang project mới, phải reset project memory.
- Không được suy diễn rằng project hiện tại liên quan project cũ nếu file thực tế không chứng minh điều đó.


---

# Optional Claude Code AI OS Layer

This project includes an optional advanced AI OS pack at:

`.agents/optional/claude-code-ai-os-pack/`

Use it selectively through:

- `.agents/integrations/claude-code-ai-os-integration.md`
- `.agents/routers/advanced-ai-os-activation.md`
- `.agents/workflows/advanced-agent-loop.md`
- `.agents/safety/advanced-security-scan.md`

Do not load the full optional pack by default. Existing Vercel skills remain the primary frontend engineering source. Current project memory and actual repository files always override vendor examples.
