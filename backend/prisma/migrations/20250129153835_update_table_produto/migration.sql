/*
  Warnings:

  - You are about to drop the column `role` on the `funcionarios` table. All the data in the column will be lost.
  - You are about to drop the column `estoque_minimo` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `preco_custo` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `preco_venda` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `banner` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria_id` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "empresas" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "funcionarios" DROP COLUMN "role",
ADD COLUMN     "foto" TEXT,
ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "estoque_minimo",
DROP COLUMN "preco_custo",
DROP COLUMN "preco_venda",
DROP COLUMN "quantidade",
ADD COLUMN     "banner" TEXT NOT NULL,
ADD COLUMN     "categoria_id" TEXT NOT NULL,
ADD COLUMN     "preco" INTEGER NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL;

-- CreateTable
CREATE TABLE "categorias" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categorias_name_key" ON "categorias"("name");

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
