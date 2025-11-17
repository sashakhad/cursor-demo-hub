import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

async function getBestPracticesContent(): Promise<string> {
  const filePath = path.join(process.cwd(), "BROWSER_AUTOMATION_BEST_PRACTICES.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  return processedContent.toString();
}

const BackLink = () => (
  <div className="mb-8">
    <Link href="/">
      <span className="text-dev-accent cursor-pointer hover:text-dev-text">← Back to posts</span>
    </Link>
  </div>
);

export default async function CursorBestPracticesPage() {
  const contentHtml = await getBestPracticesContent();

  return (
    <div className="px-10 py-10 md:px-40 md:py-20 lg:px-80 xl:px-96">
      <BackLink />
      <div className="flex w-full flex-col items-start justify-start gap-5">
        <article className="w-full">
          <div className="mb-5 flex flex-col">
            <h1 className="mb-3 text-3xl lg:text-4xl text-dev-text">Cursor Best Practices</h1>
          </div>
          <hr className="my-5" style={{ borderColor: 'rgba(6, 48, 43, 0.3)' }} />
          <div
            className="flex flex-col gap-5 text-dev-text prose max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
      </div>
    </div>
  );
}
