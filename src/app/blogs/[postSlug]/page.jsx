import Image from "next/image";

async function BlogDetail({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/slug/${params.postSlug}`, { cache: "no-store" });
  const {
    data: { post },
  } = await res.json();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">{post.title}</h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
        />
      </div>
    </div>
  );
}
export default BlogDetail;
