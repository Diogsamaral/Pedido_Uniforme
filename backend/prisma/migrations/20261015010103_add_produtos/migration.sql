-- CreateTable
CREATE TABLE "public"."produtos" (
    "id" TEXT NOT NULL,
    "empresaId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tabela_precos" (
    "id" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "quantidadeMin" INTEGER NOT NULL,
    "quantidadeMax" INTEGER NOT NULL,
    "precoUnitario" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tabela_precos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."produtos" ADD CONSTRAINT "produtos_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tabela_precos" ADD CONSTRAINT "tabela_precos_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "public"."produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
