-- CreateTable
CREATE TABLE "Bible" (
    "id" TEXT NOT NULL,
    "book" TEXT NOT NULL,
    "chapter" TEXT NOT NULL,
    "verse" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Bible_pkey" PRIMARY KEY ("id")
);
