import fetchDataCard from "@/lib/dataDashboard";
import Card from "./_components/Card";

export default async function Profile() {
  const {numberOfUsers,numberOfComments,numberOfPosts} = await fetchDataCard();
  
  return <div>
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card title='کاربران' value={numberOfUsers} type={'users'}/>
      <Card title='پست ها' value={numberOfPosts} type={'posts'}/>
      <Card title='نظرات' value={numberOfComments} type={'comments'}/>
    </div>
  </div>;
}
