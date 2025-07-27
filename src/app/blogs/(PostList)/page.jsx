import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/services/setCookieOnReq";
import { getPosts } from "@/services/postServices";

export default async function BlogPage() {
  const coookieStore = cookies();
  const options = setCookieOnReq(coookieStore);
  const posts = await getPosts(options);

  return (
    <div>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, odit. Vel ipsum perferendis ex eligendi natus
        odit, ea accusantium. Nulla dolorem sapiente delectus, cum nam dignissimos blanditiis cupiditate illo eius.
      </h1>
      <PostList posts={posts} />
    </div>
  );
}
