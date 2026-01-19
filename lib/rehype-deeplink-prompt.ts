import type { Root, Element, ElementContent } from "hast";
import { visit } from "unist-util-visit";

const DEEPLINK_PREFIX = "cursor://anysphere.cursor-deeplink/prompt?text=";

/**
 * Rehype plugin that transforms Cursor deeplinks to display the decoded prompt.
 * 
 * Deeplinks have the format:
 *   cursor://anysphere.cursor-deeplink/prompt?text=URL_ENCODED_PROMPT
 * 
 * This plugin finds <a> elements with these hrefs and adds the decoded prompt
 * as readable text above the link, so presenters can read it aloud or type it.
 */
export function rehypeDeeplinkPrompt() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      // Only process <a> elements
      if (node.tagName !== "a") return;

      const href = node.properties?.href;
      if (typeof href !== "string") return;
      if (!href.startsWith(DEEPLINK_PREFIX)) return;

      // Extract and decode the prompt text
      const encodedText = href.slice(DEEPLINK_PREFIX.length);
      let decodedPrompt: string;
      try {
        decodedPrompt = decodeURIComponent(encodedText);
      } catch {
        // If decoding fails, skip transformation
        return;
      }

      // Don't transform if prompt is very short (likely a slash command like /reset)
      if (decodedPrompt.length < 20 && decodedPrompt.startsWith("/")) {
        return;
      }

      // Create a simple paragraph with the prompt text
      const promptParagraph: Element = {
        type: "element",
        tagName: "p",
        properties: {
          className: ["deeplink-prompt-text"],
        },
        children: [{ type: "text", value: decodedPrompt }],
      };

      // Insert the prompt paragraph before the link
      if (parent && typeof index === "number" && "children" in parent) {
        (parent.children as ElementContent[]).splice(index, 0, promptParagraph);
        // Skip the newly inserted element to avoid infinite loop
        return index + 2;
      }
    });
  };
}

export default rehypeDeeplinkPrompt;
