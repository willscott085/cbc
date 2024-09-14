-- CreateTable
CREATE TABLE "Pastor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pastor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sermons" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "pastorId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sermons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pastor_email_key" ON "Pastor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sermons_url_key" ON "sermons"("url");

-- AddForeignKey
ALTER TABLE "sermons" ADD CONSTRAINT "sermons_pastorId_fkey" FOREIGN KEY ("pastorId") REFERENCES "Pastor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
