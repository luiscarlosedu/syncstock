/*
  Warnings:

  - You are about to drop the column `token_vinculo` on the `empresas` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "empresas_token_vinculo_key";

-- AlterTable
ALTER TABLE "empresas" DROP COLUMN "token_vinculo";
