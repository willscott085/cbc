import prisma from "@/app/lib/prisma";
import SermonList from "./components/sermon-selector";

async function fetchData() {
  const data = prisma.sermon.findMany({
    include: {
      pastor: true,
    },
  });

  return data;
}

export default async function SermonsPage() {
  const sermons = await fetchData();

  return (
    <section className="container mx-auto pt-36">
      <SermonList sermons={sermons} />
    </section>
  );
}
