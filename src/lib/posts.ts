import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
}

export interface Post extends PostMeta {
  content: string;
}

export async function getPosts(): Promise<PostMeta[]> {
  if (!fs.existsSync(postsDirectory)) return [];

  const filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      category: data.category,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    category: data.category,
    content,
  };
}
