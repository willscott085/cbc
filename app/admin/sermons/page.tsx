import prisma from "@/app/lib/prisma";

async function fetchData() {
  const data = prisma.sermon.findMany({
    include: {
      pastor: true,
    },
  });

  return data;
}

async function handler(formData: FormData) {
  "use server";
  console.log(formData);
}

export default async function AdminSermonsPage() {
  const sermons = await fetchData();

  return (
    <section className="h-screen w-screen">
      <div className="flex h-screen w-screen items-center justify-center">
        <form action={handler}>
          <fieldset className="w-full">
            <label className="w-full" htmlFor="title">
              Title
            </label>
            <input
              className="w-full rounded-md border border-slate-300 p-2"
              type="text"
              name="title"
              id="title"
            />
          </fieldset>
          <fieldset className="w-full">
            <label className="w-full" htmlFor="title">
              Url
            </label>
            <input
              className="w-full rounded-md border border-slate-300 p-2"
              type="text"
              name="url"
              id="url"
            />
          </fieldset>

          <fieldset className="w-full">
            <label className="w-full" htmlFor="title">
              Pastor
            </label>
            <select className="w-full rounded-md border border-r-8 border-slate-300 border-transparent p-2">
              {sermons.map(({ pastor, id }) => (
                <option key={id} value={pastor.id}>
                  {pastor.name}
                </option>
              ))}
            </select>
          </fieldset>
          <div className="mt-4 flex w-full items-center justify-center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
