# Data Model

## MarkdownFile Entity
- **path**: string – relative path to the markdown file from the repository root.
- **title**: string – first level heading extracted from the file.
- **summary**: string – first paragraph or a one‑sentence description extracted from the file.

No persistence required beyond in‑memory processing for this CLI tool.
