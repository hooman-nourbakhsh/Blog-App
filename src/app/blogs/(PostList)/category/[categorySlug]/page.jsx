import PostList from "@/app/blogs/_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/services/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

export default async function Category({ params, searchParams }) {
  const { categorySlug } = params;

  const queries = `${queryString.stringify(searchParams)}&categorySlug=${categorySlug}`;
  const coookieStore = cookies();
  const options = setCookieOnReq(coookieStore);
  const posts = await getPosts(queries, options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg text-secondary-600">پستی در این دسته بندی یافت نشد</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}
