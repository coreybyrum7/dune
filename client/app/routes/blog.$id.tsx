import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BlogCard from "~/components/Blog/Card";

import { getBlogPost } from "~/models/blog.server";

type Loaderdata = {
    post: Awaited<ReturnType<typeof getBlogPost>>;
}

// loader for route
export const loader: LoaderFunction = async ({ params }) => {
    return json<Loaderdata>({
        post: await getBlogPost(params.id),
    });
};

const BlogPost = () => {
    const { post: { attributes } } = useLoaderData() as Loaderdata;
    console.log(attributes)
    return (
        <section className="site-section">
            <div className="wrapper flex items-center py-16 min-h-[calc(100vh-4rem)]">
                <div className="profile-cont w-full max-w-5xl m-auto">
                    {attributes ? (
                        <>
                            <h2>{attributes.title}</h2>
                        </>
                    ) : (
                        <p className="text-center">Oops, that post doesn't exist... yet</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogPost;
