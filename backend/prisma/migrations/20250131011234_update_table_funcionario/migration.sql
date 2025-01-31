-- DropForeignKey
ALTER TABLE "funcionarios" DROP CONSTRAINT "funcionarios_empresa_id_fkey";

-- AlterTable
ALTER TABLE "funcionarios" ALTER COLUMN "empresa_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "funcionarios" ADD CONSTRAINT "funcionarios_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
