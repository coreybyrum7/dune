import { BlogPost } from "~/utils/types/Blog";

const strapiApiUrl = process.env.STRAPI_API_URL;

export const getBlog = async (): Promise<Array<BlogPost>> => {
  const blog = await fetch(`${strapiApiUrl}/blogs/?populate=hero`);
  let response = await blog.json();
  return response.data;
};

export const getBlogPost = async (id: string | undefined) => {
  const blog = await fetch(`${strapiApiUrl}/blogs/${id}`);
  let response = await blog.json();
  return response.data;
};
