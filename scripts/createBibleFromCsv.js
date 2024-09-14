const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const { parse } = require("csv-parse");

const prisma = new PrismaClient();

async function deleteBibleData() {
  await prisma.bible.deleteMany({});
}

deleteBibleData();

fs.createReadStream("./prisma/seeds/kjv.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", async function ([id, book, chapter, verse, text]) {
    console.log(book, chapter, verse, text);

    const inserted = await prisma.bible.create({
      data: {
        id: +id,
        book: +book,
        chapter: +chapter,
        verse: +verse,
        text,
      },
    });

    console.log(inserted);
  });
