import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import remarkEmoji from "remark-emoji";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { serialize } from "next-mdx-remote/serialize";
import remarkMdx from "remark-mdx";

export async function parseInput(data: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkSlug)
    .use(remarkToc, { tight: true })
    .use(remarkEmoji)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(data);
  console.log(result.toString());
  return result.toString();
}
