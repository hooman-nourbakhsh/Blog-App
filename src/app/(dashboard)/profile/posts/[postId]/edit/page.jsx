import { notFound } from "next/navigation";
import Breadcrumbs from "@/ui/BreadCrumbs";
import CreatePostForm from "../../create/_/CreatePostForm";
import { getPostById } from "@/services/postServices";

async function EditPage({ params }) {
  const { postId } = await params;
  const { post } = await getPostById(postId);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} />
    </div>
  );
}
export default EditPage;
