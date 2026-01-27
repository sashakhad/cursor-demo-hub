#!/usr/bin/env npx ts-node

/**
 * Scaffold a new React component following project conventions.
 * 
 * Usage: npx ts-node scripts/scaffold-component.ts <ComponentName> [--client]
 * 
 * Examples:
 *   npx ts-node scripts/scaffold-component.ts Badge
 *   npx ts-node scripts/scaffold-component.ts VisitorBadge --client
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.resolve(__dirname, "../../../../app/components");

function generateComponent(name: string, isClient: boolean): string {
  const clientDirective = isClient ? '"use client";\n\n' : "";
  const imports = isClient 
    ? 'import { ReactNode, useState } from "react";'
    : 'import { ReactNode } from "react";';

  return `${clientDirective}${imports}

interface ${name}Props {
  children: ReactNode;
  variant?: "default" | "secondary";
  className?: string;
}

function ${name}({ children, variant = "default", className = "" }: ${name}Props) {
  const variantStyles = {
    default: "bg-white text-dev-primary",
    secondary: "bg-dev-card text-dev-text",
  };

  return (
    <div className={\`\${variantStyles[variant]} \${className}\`}>
      {children}
    </div>
  );
}

export default ${name};
`;
}

function main(): void {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    console.log(`
Usage: npx ts-node scaffold-component.ts <ComponentName> [--client]

Arguments:
  ComponentName  PascalCase name for the component (e.g., Badge, StatusLabel)
  --client       Add "use client" directive for client-side interactivity

Examples:
  npx ts-node scaffold-component.ts Badge
  npx ts-node scaffold-component.ts VisitorBadge --client
`);
    process.exit(0);
  }

  const componentName = args[0] ?? "";
  const isClient = args.includes("--client");

  // Validate component name
  if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
    console.error(`Error: Component name must be PascalCase (e.g., Badge, StatusLabel)`);
    console.error(`Got: "${componentName}"`);
    process.exit(1);
  }

  const filePath = path.join(COMPONENTS_DIR, `${componentName}.tsx`);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.error(`Error: Component already exists at ${filePath}`);
    process.exit(1);
  }

  // Check if components directory exists
  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.error(`Error: Components directory not found at ${COMPONENTS_DIR}`);
    process.exit(1);
  }

  // Generate and write the component
  const content = generateComponent(componentName, isClient);
  fs.writeFileSync(filePath, content, "utf-8");

  console.log(`✓ Created ${componentName}.tsx`);
  console.log(`  Path: ${filePath}`);
  console.log(`  Type: ${isClient ? "Client component" : "Server component"}`);
  console.log(`\nNext steps:`);
  console.log(`  1. Edit the component to match your needs`);
  console.log(`  2. Run \`pnpm build\` to verify`);
  console.log(`  3. Import and use in your pages`);
}

main();
