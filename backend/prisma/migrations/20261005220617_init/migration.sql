-- CreateEnum
CREATE TYPE "public"."PerfilCodigo" AS ENUM ('ADMINISTRADOR', 'COMERCIAL', 'PRODUCAO', 'FINANCEIRO');

-- CreateTable
CREATE TABLE "public"."empresas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nomeFantasia" TEXT,
    "cnpj" TEXT,
    "email" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "empresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."configuracoes_empresa" (
    "id" TEXT NOT NULL,
    "empresaId" TEXT NOT NULL,
    "quantidadeMinimaPedido" INTEGER NOT NULL DEFAULT 20,
    "valorAplicacao" DECIMAL(12,2) NOT NULL,
    "descontoPix" DECIMAL(5,2) NOT NULL,
    "acrescimoCartao" DECIMAL(5,2) NOT NULL,
    "prazoEntregaDiasMin" INTEGER NOT NULL,
    "prazoEntregaDiasMax" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "configuracoes_empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."perfis" (
    "id" SERIAL NOT NULL,
    "codigo" "public"."PerfilCodigo" NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "perfis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."usuarios" (
    "id" TEXT NOT NULL,
    "empresaId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senhaHash" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."usuarios_perfis" (
    "usuarioId" TEXT NOT NULL,
    "perfilId" INTEGER NOT NULL,
    "atribuidoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_perfis_pkey" PRIMARY KEY ("usuarioId","perfilId")
);

-- CreateTable
CREATE TABLE "public"."clientes" (
    "id" TEXT NOT NULL,
    "empresaId" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "nomeFantasia" TEXT,
    "cnpj" TEXT NOT NULL,
    "email" TEXT,
    "telefone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contatos_cliente" (
    "id" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cargo" TEXT,
    "email" TEXT,
    "telefone" TEXT,
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contatos_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."formas_pagamento" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "descontoPercentual" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "acrescimoPercentual" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "formas_pagamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tipos_aplicacao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "tipos_aplicacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."locais_aplicacao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "locais_aplicacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "empresas_cnpj_key" ON "public"."empresas"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "configuracoes_empresa_empresaId_key" ON "public"."configuracoes_empresa"("empresaId");

-- CreateIndex
CREATE UNIQUE INDEX "perfis_codigo_key" ON "public"."perfis"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "public"."usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cnpj_key" ON "public"."clientes"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "formas_pagamento_descricao_key" ON "public"."formas_pagamento"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "tipos_aplicacao_nome_key" ON "public"."tipos_aplicacao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "locais_aplicacao_nome_key" ON "public"."locais_aplicacao"("nome");

-- AddForeignKey
ALTER TABLE "public"."configuracoes_empresa" ADD CONSTRAINT "configuracoes_empresa_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."usuarios" ADD CONSTRAINT "usuarios_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."usuarios_perfis" ADD CONSTRAINT "usuarios_perfis_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."usuarios_perfis" ADD CONSTRAINT "usuarios_perfis_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "public"."perfis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."clientes" ADD CONSTRAINT "clientes_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "public"."empresas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."contatos_cliente" ADD CONSTRAINT "contatos_cliente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."clientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
