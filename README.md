# Cursor Demo Hub

A standardized demo repository for showcasing Cursor's AI-powered coding capabilities.

## Get Started

### 🟢 New to Development?

1. [Download Cursor](https://cursor.com/download)
2. Open Cursor (you can skip any project setup—just open the app)
3. Click this link to start setup: [Set Up My Mac](cursor://anysphere.cursor-deeplink/prompt?text=Help%20me%20set%20up%20my%20Mac%20to%20run%20the%20Cursor%20Demo%20Hub.%0A%0APlease%20do%20the%20following%3A%0A%0A1.%20Check%20if%20Homebrew%20is%20installed%20%28brew%20--version%29.%20If%20not%2C%20install%20it%20with%3A%0A%20%20%20%2Fbin%2Fbash%20-c%20%22%24%28curl%20-fsSL%20https%3A%2F%2Fraw.githubusercontent.com%2FHomebrew%2Finstall%2FHEAD%2Finstall.sh%29%22%0A%20%20%20Then%20add%20to%20PATH%20%28Apple%20Silicon%3A%20eval%20%22%24%28%2Fopt%2Fhomebrew%2Fbin%2Fbrew%20shellenv%29%22%29%0A%0A2.%20Check%20if%20Git%20is%20installed%20%28git%20--version%29.%20If%20not%3A%20brew%20install%20git%0A%0A3.%20Check%20if%20Node.js%2020%2B%20is%20installed%20%28node%20--version%29.%20If%20not%3A%20brew%20install%20node%4020%0A%0A4.%20Check%20if%20pnpm%20is%20installed%20%28pnpm%20--version%29.%20If%20not%3A%20npm%20install%20-g%20pnpm%0A%0A5.%20Create%20the%20directory%20and%20clone%20the%20repo%3A%0A%20%20%20mkdir%20-p%20~%2FDocuments%2FCode%0A%20%20%20cd%20~%2FDocuments%2FCode%0A%20%20%20git%20clone%20https%3A%2F%2Fgithub.com%2Fsashakhad%2Fcursor-demo-hub.git%0A%20%20%20cd%20cursor-demo-hub%0A%0A6.%20Install%20dependencies%3A%20pnpm%20install%0A%0A7.%20Tell%20me%20to%20open%20the%20folder%20in%20Cursor%3A%20File%20%E2%86%92%20Open%20Folder%20%E2%86%92%20Documents%2FCode%2Fcursor-demo-hub%0A%0AIf%20any%20step%20fails%2C%20help%20me%20troubleshoot.%20Be%20friendly%20and%20explain%20what%20each%20step%20does.)
4. Follow the instructions—Cursor will install everything you need
5. When done, open the folder: **File → Open Folder → Documents/Code/cursor-demo-hub**
6. Run `/start-demo` in Agent Chat to begin

### 🔵 Already Have Node.js?

```bash
git clone https://github.com/sashakhad/cursor-demo-hub.git
cd cursor-demo-hub
pnpm install
cursor .
```

Then run `/start-demo` in Agent Chat to begin.

---

## 📖 Full Documentation

**→ [Start Here](./docs/presenter-docs/README.md)**

- System requirements and setup guides
- Step-by-step demo flows (Cursor 101, Cursor 2.0)
- Individual feature guides with screenshots
- Troubleshooting

## Quick Reference

| Action | Shortcut / Command |
|--------|-------------------|
| Open Agent Chat | `Cmd+L` |
| Inline Edit | `Cmd+K` |
| Accept Tab | `Tab` |
| Start demo | `/start-demo` |
| Reset workspace | `/reset` |

## The Demo App

A Next.js blog used as the demo target:

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Markdown** for content
