/*
  Warnings:

  - Added the required column `empresa_id` to the `categorias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categorias" ADD COLUMN     "empresa_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "categorias" ADD CONSTRAINT "categorias_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
