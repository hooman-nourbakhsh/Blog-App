import { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import PostsTable from "./posts/_/components/PostsTable";
import CardWrapper from "./_components/CardWrapper";
import LatestPosts from "./_components/LatestPosts";

export default async function Profile() {
  // const { numberOfUsers, numberOfComments, numberOfPosts } = await fetchDataCard();

  return (
    <div>
      <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>

      <Suspense fallback={<Fallback />}>
        <CardWrapper />
      </Suspense>
      <h2 className="text-xl mb-4 text-secondary-600">آخرین پست ها</h2>
      <Suspense fallback={<Fallback />}>
        <LatestPosts />
      </Suspense>
    </div>
  );
}
