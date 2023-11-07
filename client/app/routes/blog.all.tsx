import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BlogCard from "~/components/Blog/Card";

import { getBlog } from "~/models/blog.server";

type Loaderdata = {
  blog: Awaited<ReturnType<typeof getBlog>>;
}

// loader for route
export const loader = async () => {
  return json<Loaderdata>({
    blog: await getBlog(),
  });
};

export default function Index() {
  const { blog } = useLoaderData() as Loaderdata;
  return (
    <section className="site-section profiles-section">
      <div>
        <header className="section-header">
          <h2 className="text-4xl">Blog!</h2>
          <p>Welcome to the new blog</p>
        </header>
        {blog.length > 0 ? (
          <ul className="profiles-list">
            {blog.map((post) => (
              <li key={post.id} className="profile-item">
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No blog posts yet 🙂</p>
        )}{" "}
      </div>
    </section>
  );
}
