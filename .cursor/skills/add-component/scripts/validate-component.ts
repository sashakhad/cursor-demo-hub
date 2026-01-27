#!/usr/bin/env npx ts-node

/**
 * Validate that a component follows project conventions.
 * 
 * Usage: npx ts-node scripts/validate-component.ts <ComponentName>
 * 
 * Checks:
 *   - File exists in app/components/
 *   - Has explicit TypeScript interface for props
 *   - Uses named function declaration (not arrow function export)
 *   - Has default export
 *   - Includes className prop for customization
 *   - "use client" only present when hooks are used
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.resolve(__dirname, "../../../../app/components");

interface ValidationResult {
  passed: boolean;
  message: string;
}

function validateComponent(filePath: string): ValidationResult[] {
  const results: ValidationResult[] = [];
  const content = fs.readFileSync(filePath, "utf-8");
  const fileName = path.basename(filePath, ".tsx");

  // Check 1: Has props interface
  const hasInterface = new RegExp(`interface\\s+${fileName}Props`).test(content);
  results.push({
    passed: hasInterface,
    message: hasInterface 
      ? `✓ Has ${fileName}Props interface`
      : `✗ Missing ${fileName}Props interface`,
  });

  // Check 2: Uses named function declaration
  const hasFunctionDeclaration = new RegExp(`^function\\s+${fileName}\\s*\\(`, "m").test(content);
  const hasArrowExport = new RegExp(`export\\s+(default\\s+)?const\\s+${fileName}\\s*=`).test(content);
  results.push({
    passed: hasFunctionDeclaration && !hasArrowExport,
    message: hasFunctionDeclaration && !hasArrowExport
      ? `✓ Uses named function declaration`
      : `✗ Should use "function ${fileName}()" not arrow function`,
  });

  // Check 3: Has default export
  const hasDefaultExport = /export\s+default\s+\w+/.test(content) || /export\s+default\s+function/.test(content);
  results.push({
    passed: hasDefaultExport,
    message: hasDefaultExport
      ? `✓ Has default export`
      : `✗ Missing default export`,
  });

  // Check 4: Has className prop (if it has props)
  if (hasInterface) {
    const hasClassNameProp = /className\s*\??\s*:\s*string/.test(content);
    results.push({
      passed: hasClassNameProp,
      message: hasClassNameProp
        ? `✓ Has className prop for customization`
        : `✗ Missing optional className prop`,
    });
  }

  // Check 5: "use client" matches hook usage
  const hasUseClient = content.includes('"use client"') || content.includes("'use client'");
  const usesHooks = /\buse[A-Z]\w*\s*\(/.test(content); // useState, useEffect, etc.
  // Only flag as needing client if hooks are used (event handlers passed as props don't require client)
  const needsClient = usesHooks;

  if (hasUseClient && !needsClient) {
    results.push({
      passed: false,
      message: `✗ Has "use client" but doesn't use hooks or event handlers`,
    });
  } else if (!hasUseClient && needsClient) {
    results.push({
      passed: false,
      message: `✗ Uses hooks/handlers but missing "use client" directive`,
    });
  } else {
    results.push({
      passed: true,
      message: hasUseClient
        ? `✓ Correctly marked as client component`
        : `✓ Correctly a server component`,
    });
  }

  // Check 6: No implicit any (basic check)
  const hasImplicitAny = /:\s*any\b/.test(content) || /as\s+any\b/.test(content);
  results.push({
    passed: !hasImplicitAny,
    message: hasImplicitAny
      ? `✗ Contains "any" type - use explicit types`
      : `✓ No "any" types found`,
  });

  return results;
}

function main(): void {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    console.log(`
Usage: npx ts-node validate-component.ts <ComponentName>

Validates that a component follows project conventions.

Arguments:
  ComponentName  Name of the component file (without .tsx extension)

Example:
  npx ts-node validate-component.ts Button
  npx ts-node validate-component.ts VisitorCounter
`);
    process.exit(0);
  }

  const componentName = (args[0] ?? "").replace(/\.tsx$/, "");
  const filePath = path.join(COMPONENTS_DIR, `${componentName}.tsx`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.error(`Error: Component not found at ${filePath}`);
    process.exit(1);
  }

  console.log(`Validating ${componentName}.tsx\n`);

  const results = validateComponent(filePath);
  const failures = results.filter(r => !r.passed);

  results.forEach(r => console.log(r.message));

  console.log("");

  if (failures.length === 0) {
    console.log(`All checks passed! ✓`);
    process.exit(0);
  } else {
    console.log(`${failures.length} issue(s) found.`);
    process.exit(1);
  }
}

main();
