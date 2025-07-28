import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/services/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

export default async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const coookieStore = cookies();
  const options = setCookieOnReq(coookieStore);
  const { posts } = await getPosts(queries, options);

  const { search } = searchParams;

  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0 ? " هیچ پستی با این مشخصات پیدا نشد " : `نشان دادن ${posts.length} نتیجه برای`}
          <span className="font-bold"> &quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
}
