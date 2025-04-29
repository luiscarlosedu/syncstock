import { Outlet } from "react-router";

export function EmployeeRouteGuard() {
    const funcionario = {
        nome: "arnaldo",
        email: "eduardo@teste.com",
        employed: true
    };

    if(!funcionario.employed) {
        console.log("error");
    }

    return <Outlet />
}

/*

model Funcionario {
  id String @id @default(uuid())
  nome String
  email String @unique
  senha String
  employed Boolean @default(false)
  foto String?
  
  // movimentacoes Movimentacao[]

  createdAt DateTime? @default(now())
  updatedAt DateTime @updatedAt

  empresa Empresa? @relation(fields: [empresa_id], references: [id])

  @@map("funcionarios")
  empresa_id String? 
}
*/