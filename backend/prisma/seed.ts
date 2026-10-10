import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  // Empresa

  const empresa = await prisma.empresa.upsert({
    where: {
      cnpj: '00000000000191',
    },
    update: {},
    create: {
      nome: 'Uniformes Demo',
      nomeFantasia: 'Uniformes Demo',
      cnpj: '00000000000191',
      email: 'contato@uniformesdemo.com.br',
      cidade: 'Belo Horizonte',
      estado: 'MG',
    },
  });

  // Configurações

  await prisma.configuracaoEmpresa.upsert({
    where: {
      empresaId: empresa.id,
    },
    update: {},
    create: {
      empresaId: empresa.id,

      quantidadeMinimaPedido: 20,

      valorAplicacao: 5,

      descontoPix: 10,

      acrescimoCartao: 8,

      prazoEntregaDiasMin: 30,

      prazoEntregaDiasMax: 45,
    },
  });

  // Perfis

  const perfilAdmin = await prisma.perfil.upsert({
    where: {
      codigo: 'ADMINISTRADOR',
    },
    update: {},
    create: {
      codigo: 'ADMINISTRADOR',
      descricao: 'Administrador do sistema',
    },
  });

  await prisma.perfil.upsert({
    where: {
      codigo: 'COMERCIAL',
    },
    update: {},
    create: {
      codigo: 'COMERCIAL',
      descricao: 'Equipe comercial',
    },
  });

  await prisma.perfil.upsert({
    where: {
      codigo: 'PRODUCAO',
    },
    update: {},
    create: {
      codigo: 'PRODUCAO',
      descricao: 'Equipe de produção',
    },
  });

  await prisma.perfil.upsert({
    where: {
      codigo: 'FINANCEIRO',
    },
    update: {},
    create: {
      codigo: 'FINANCEIRO',
      descricao: 'Equipe financeira',
    },
  });

  // Usuário admin

  const senhaHash = await bcrypt.hash(
    'Admin@123',
    10,
  );

  const admin = await prisma.usuario.upsert({
    where: {
      email: 'admin@uniformes.local',
    },
    update: {},
    create: {
      empresaId: empresa.id,

      nome: 'Administrador',

      email: 'admin@uniformes.local',

      senhaHash,
    },
  });

  // Relação usuário perfil

  await prisma.usuarioPerfil.upsert({
    where: {
      usuarioId_perfilId: {
        usuarioId: admin.id,
        perfilId: perfilAdmin.id,
      },
    },
    update: {},
    create: {
      usuarioId: admin.id,
      perfilId: perfilAdmin.id,
    },
  });

  // Formas de pagamento

  const formasPagamento = [
    {
      descricao: 'PIX',
      descontoPercentual: 10,
      acrescimoPercentual: 0,
    },
    {
      descricao: '2x sem juros',
      descontoPercentual: 0,
      acrescimoPercentual: 0,
    },
    {
      descricao: '3x sem juros',
      descontoPercentual: 0,
      acrescimoPercentual: 0,
    },
    {
      descricao: 'Cartão',
      descontoPercentual: 0,
      acrescimoPercentual: 8,
    },
  ];

  for (const forma of formasPagamento) {
    await prisma.formaPagamento.upsert({
      where: {
        descricao: forma.descricao,
      },
      update: {},
      create: forma,
    });
  }

  // Tipos aplicação

  const tiposAplicacao = [
    'SERIGRAFIA',
    'BORDADO',
    'TRANSFER',
    'SUBLIMACAO',
  ];

  for (const nome of tiposAplicacao) {
    await prisma.tipoAplicacao.upsert({
      where: {
        nome,
      },
      update: {},
      create: {
        nome,
      },
    });
  }

  // Locais aplicação

  const locaisAplicacao = [
    'PEITO',
    'COSTAS',
    'MANGA_ESQUERDA',
    'MANGA_DIREITA',
    'PERNA_ESQUERDA',
    'PERNA_DIREITA',
  ];

  for (const nome of locaisAplicacao) {
    await prisma.localAplicacao.upsert({
      where: {
        nome,
      },
      update: {},
      create: {
        nome,
      },
    });
  }

  console.log('✅ Seed concluído');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });