/*
  Warnings:

  - You are about to drop the column `name` on the `categorias` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nome]` on the table `categorias` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nome` to the `categorias` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "categorias_name_key";

-- AlterTable
ALTER TABLE "categorias" DROP COLUMN "name",
ADD COLUMN     "nome" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "categorias_nome_key" ON "categorias"("nome");
