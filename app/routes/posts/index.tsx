import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "90s-mixtape",
        title: "A Mixtape I Made Just For You",
      },
    ],
  });
};
export default function Posts() {
  const { posts } = useLoaderData();
  console.log("🚀 ~ file: index.tsx ~ line 20 ~ Posts ~ posts", posts);
  return (
    <main>
      <h1>Posts</h1>
    </main>
  );
}
