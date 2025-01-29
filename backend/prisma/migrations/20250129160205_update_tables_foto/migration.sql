/*
  Warnings:

  - You are about to drop the column `banner` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `foto` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "empresas" ADD COLUMN     "foto" TEXT;

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "banner",
ADD COLUMN     "foto" TEXT NOT NULL;
