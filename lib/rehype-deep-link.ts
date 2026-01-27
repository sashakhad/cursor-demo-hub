import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";

/**
 * Rehype plugin that transforms cursor:// deep links into a wrapper
 * containing both the clickable link and a copyable prompt block.
 *
 * Input:  <a href="cursor://anysphere.cursor-deeplink/prompt?text=...">Link Text</a>
 * Output: <div class="deep-link-wrapper">
 *           <a href="cursor://..." class="deep-link-button">▶ Link Text</a>
 *           <div class="deep-link-prompt">
 *             <button class="deep-link-copy" data-prompt="...">Copy</button>
 *             <pre><code>decoded prompt text</code></pre>
 *           </div>
 *         </div>
 */
export function rehypeDeepLink() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      // Only process <a> elements with cursor:// hrefs
      if (
        node.tagName !== "a" ||
        !node.properties?.href ||
        typeof node.properties.href !== "string" ||
        !node.properties.href.startsWith("cursor://")
      ) {
        return;
      }

      const href = node.properties.href;

      // Extract the prompt text from the URL
      const promptText = extractPromptFromUrl(href);
      if (!promptText) {
        return; // Keep the link as-is if we can't extract a prompt
      }

      // Create the wrapper div with the link and prompt
      const wrapper: Element = {
        type: "element",
        tagName: "div",
        properties: {
          className: ["deep-link-wrapper"],
        },
        children: [
          // The original link (slightly modified)
          {
            type: "element",
            tagName: "a",
            properties: {
              href,
              className: ["deep-link-button"],
            },
            children: node.children,
          },
          // The prompt block
          {
            type: "element",
            tagName: "div",
            properties: {
              className: ["deep-link-prompt"],
            },
            children: [
              // Copy button
              {
                type: "element",
                tagName: "button",
                properties: {
                  className: ["deep-link-copy"],
                  "data-prompt": promptText,
                  type: "button",
                },
                children: [
                  {
                    type: "element",
                    tagName: "span",
                    properties: { className: ["copy-icon"] },
                    children: [{ type: "text", value: "📋" }],
                  },
                  {
                    type: "element",
                    tagName: "span",
                    properties: { className: ["copy-text"] },
                    children: [{ type: "text", value: "Copy prompt" }],
                  },
                ],
              },
              // Prompt text in a code block
              {
                type: "element",
                tagName: "pre",
                properties: {
                  className: ["deep-link-code"],
                },
                children: [
                  {
                    type: "element",
                    tagName: "code",
                    properties: {},
                    children: [{ type: "text", value: promptText }],
                  },
                ],
              },
            ],
          },
        ],
      };

      // Replace the original link with the wrapper
      if (parent && typeof index === "number") {
        (parent.children as Element[])[index] = wrapper;
      }
    });
  };
}

/**
 * Extract and decode the prompt text from a cursor:// deep link URL
 */
function extractPromptFromUrl(url: string): string | null {
  try {
    // The URL format is: cursor://anysphere.cursor-deeplink/prompt?text=ENCODED_TEXT
    const urlObj = new URL(url);
    const text = urlObj.searchParams.get("text");
    if (text) {
      return decodeURIComponent(text);
    }
    return null;
  } catch {
    // If URL parsing fails, try regex extraction
    const match = url.match(/[?&]text=([^&]+)/);
    if (match && match[1]) {
      try {
        return decodeURIComponent(match[1]);
      } catch {
        return match[1];
      }
    }
    return null;
  }
}

export default rehypeDeepLink;
