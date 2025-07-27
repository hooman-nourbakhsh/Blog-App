"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { createCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/services/setCookieOnReq";

// export async function createComment(postId, parentId, formData) {

export async function createComment(prevState, { formData, postId, parentId }) {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);

  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  };

  try {
    const { message } = await createCommentApi(rawFormData, options);

    revalidatePath("/blogs/[slug]");
    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    return {
      error,
    };
  }
}
