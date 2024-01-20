import getTodo from "@/api/getTodo";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getTodo(params.slug);
  return <div>My Post: {data.title}</div>;
}
