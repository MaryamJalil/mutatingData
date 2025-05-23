import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export async function generateMetaData() {
  const posts = await getPosts();
  const numberOfPosts = posts.length();
  return {
    title: `Latest Posts ${numberOfPosts}`,
    desciption: "Browse our latest post",
  };
}
export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
