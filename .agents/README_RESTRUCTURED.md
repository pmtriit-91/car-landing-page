# Restructured Agent Skills Pack

Bộ này được tái cấu trúc theo hướng **Agent Operating System**. Các skill kỹ thuật gốc được giữ nguyên; riêng `skills/project-memory` được reset thành template rỗng để tránh context bleeding giữa các dự án.

## Không thay đổi

- `skills/vercel-react-best-practices`
- `skills/vercel-composition-patterns`
- `skills/vercel-react-native-skills`
- `skills/git-commit-excellence`
- `skills/web-design-guidelines`
- `skills/project-memory` *(đã reset thành template rỗng để tránh dính context dự án cũ)*

## Bổ sung

- `core/`: nguyên tắc vận hành chung
- `routers/`: chọn skill theo task
- `workflows/`: planner/executor/reviewer/debug/refactor/commit
- `safety/`: chống refactor phá hệ thống, API safety, UI invariants
- `memory/`: protocol bộ nhớ dài hạn
- `reviewers/`: checklist review theo vai trò
- `project-template/`: template điền riêng cho từng dự án
- `_manifest/`: hash kiểm chứng skill gốc

## Cách dùng đề xuất

1. Copy `.agents` vào project.
2. Giữ nguyên các technical skills trong `skills/`; reset `skills/project-memory/SKILL.md` theo từng project.
3. Tạo folder `.agents/project/` từ `project-template/` cho từng dự án cụ thể.
4. Với web project, không load React Native skills trừ khi task liên quan mobile.
5. Khi agent bắt đầu session, đọc `AGENTS.md` trước.
