import { Suspense } from "react";
import PostList from "./_components/PostList";
import Spinner from "@/ui/Spinner";

export default async function BlogPage() {
  return (
    <div>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, odit. Vel ipsum perferendis ex eligendi natus odit, ea accusantium. Nulla
        dolorem sapiente delectus, cum nam dignissimos blanditiis cupiditate illo eius.
      </h1>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}
