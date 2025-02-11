export default async function Course({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <h1>Course page</h1>;
}
