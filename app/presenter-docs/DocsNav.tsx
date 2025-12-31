"use client";

import Link from "next/link";
import { DocEntry } from "@/lib/presenter-docs";
import { useState } from "react";

function DocLink({ entry }: { entry: DocEntry }) {
  const [isOpen, setIsOpen] = useState(false);
  const href = `/presenter-docs/${entry.slug.join("/")}`;

  if (entry.isDirectory && entry.children) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 py-2 text-dev-text font-semibold hover:text-dev-accent select-none w-full text-left"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {entry.title}
          <span className="text-dev-secondary text-sm font-normal">
            ({entry.children.length})
          </span>
        </button>
        {isOpen && (
          <div className="ml-5 border-l-2 border-dev-card-03 pl-4">
            {entry.children.map((child) => (
              <DocLink key={child.slug.join("/")} entry={child} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="py-1.5">
      <Link
        href={href}
        className="text-dev-accent hover:text-dev-text hover:underline"
      >
        {entry.title}
      </Link>
    </div>
  );
}

export function DocsNav({ entries }: { entries: DocEntry[] }) {
  return (
    <div className="space-y-1">
      {entries.map((entry) => (
        <DocLink key={entry.slug.join("/")} entry={entry} />
      ))}
    </div>
  );
}

