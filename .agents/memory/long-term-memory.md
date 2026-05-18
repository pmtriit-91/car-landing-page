# Long-Term Memory Protocol

Mục tiêu: giúp agent không quên ngữ cảnh dài hạn của dự án.

Agent nên cập nhật memory khi có:

- Quyết định architecture quan trọng.
- Convention mới được xác nhận.
- Business rule quan trọng.
- API contract quan trọng.
- UI/design invariant quan trọng.
- Workaround hoặc technical debt đã biết.

Không lưu:

- Thông tin tạm thời.
- Suy đoán chưa xác nhận.
- Log debug ngắn hạn.

Format đề xuất:

```md
## YYYY-MM-DD - Decision Title

Context:
Decision:
Impact:
Related files:
```
