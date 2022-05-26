import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { getPost } from "~/models/post.server";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "params.slug is required");
  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);
  return json({ post });
};

export default function PostSlug() {
  const { post } = useLoaderData();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
      <p>{post.markdown}</p>
    </main>
  );
}
