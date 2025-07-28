import { cookies } from "next/headers";
import { getAllUsersApi } from "@/services/authServices";
import { getAllCommentsApi } from "@/services/commentService";
import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/services/setCookieOnReq";

export default async function fetchDataCard() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);

  try {
    const data = await Promise.all([getAllUsersApi(options), getAllCommentsApi(options), getPosts()]);
    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfComments = Number(data[1].commentsCount ?? "0");
    const numberOfPosts = Number(data[2].length ?? "0");

    return { numberOfComments, numberOfPosts, numberOfUsers };
  } catch (error) {
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}
