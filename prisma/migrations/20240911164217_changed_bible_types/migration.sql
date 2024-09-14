/*
  Warnings:

  - Changed the type of `book` on the `Bible` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `chapter` on the `Bible` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `verse` on the `Bible` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Bible" DROP COLUMN "book",
ADD COLUMN     "book" INTEGER NOT NULL,
DROP COLUMN "chapter",
ADD COLUMN     "chapter" INTEGER NOT NULL,
DROP COLUMN "verse",
ADD COLUMN     "verse" INTEGER NOT NULL;
