import prisma from "@/lib/prisma";

async function fetchData() {
  const data = prisma.bible.findMany({
    where: {
      AND: [{ book: 66 }, { chapter: 1 }],
    },
    orderBy: { verse: "asc" },
  });

  return data;
}

export default async function BiblePage() {
  const bible = await fetchData();

  console.log(bible);

  return (
    <div className="container mx-auto">
      <ul>
        {bible.map(({ id, book, chapter, verse, text }) => (
          <li key={id}>
            <sub className="ordinal">{verse}</sub>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
