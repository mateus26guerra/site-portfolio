import { Injectable } from '@angular/core';

export interface Projeto {
  nome: string;

  descricao: string;

  descricaoCompleta: string;

  github?: string;
  demo?: string;
  video?: string;

  tecnologias: string;

  imagemCapa: string;

  // Galeria
  imagem1?: string;
  tituloImagem1?: string;

  imagem2?: string;
  tituloImagem2?: string;

  imagem3?: string;
  tituloImagem3?: string;

  imagem4?: string;
  tituloImagem4?: string;

  // UML
  uml?: string;
  tituloUml?: string;

  // Arquitetura
  arquitetura?: string;
  tituloArquitetura?: string;

  // Projeto privado
  privado: boolean;
  tituloAviso?: string;
  descricaoAviso?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  constructor() {}

  private projetos: Projeto[] = [
    {
      nome: 'Sistema SaaS para Barbearias',
      descricao: 'Plataforma web para gestão completa de uma barbearia.',
      descricaoCompleta: `O Barber Manager foi desenvolvido para centralizar o atendimento e a rotina operacional de barbearias em um unico sistema. A solucao conta com telas para clientes, agendamentos, pagamentos, relatorios em PDF e painel administrativo, ajudando a reduzir tarefas manuais e melhorar o controle do negocio. O projeto foi construido com foco em desempenho, responsividade e facilidade de manutencao, e parte da arquitetura real permanece reservada por estrategia comercial.`,
      github: 'https://github.com/mateus26game/tela-de-login',
      demo: 'https://front-barbearia-lilac.vercel.app/',
      tecnologias: 'https://skillicons.dev/icons?i=java,spring,angular,postgres,docker,git',
      imagemCapa: '/image/projeto1/telaInicial.webp',
      tituloImagem1: 'Tela Inicial',
      imagem1: '/image/projeto1/telaInicial.webp',
      tituloImagem2: 'Gestao de Clientes',
      imagem2: '/image/projeto1/telaDeCleinte.webp',
      tituloImagem3: 'Dashboard Administrativo',
      imagem3: '/image/projeto1/dasbohdor.webp',
      tituloImagem4: 'Relatorios em PDF',
      imagem4: '/image/projeto1/telaDePDF.webp',
      tituloUml: 'Diagrama UML',
      uml: '/image/projeto1/diagramaUML.webp',
      tituloArquitetura: 'Arquitetura do Sistema',
      arquitetura: '/image/projeto1/Arquitetura.webp',
      privado: true,
      tituloAviso: 'Projeto em Desenvolvimento',
      descricaoAviso: 'Este projeto chegou a entrar em producao e foi utilizado por aproximadamente dois meses em um ambiente real de atendimento. Como o sistema foi desenvolvido para atender uma operacao comercial especifica, parte da arquitetura, regras internas e telas estrategicas permanecem privadas.'
    },

    {
      nome: 'Sistema de Bibliotecas e Reservas',
      descricao: 'Sistema academico para organizar salas, bibliotecas e reservas.',
      descricaoCompleta: `O projeto foi criado para resolver um problema real de organizacao na universidade, onde o controle de salas e recursos era feito de forma presencial e descentralizada. A proposta foi digitalizar o processo, permitindo consulta, organizacao e reserva de forma mais rapida e clara. As telas mostram login, gestao de salas, bibliotecas e reservas, alem do diagrama UML que apoia a modelagem da solucao.`,
      github: 'https://github.com/mateus26guerra/Fornt-sistema-de-bibliotecas',
      tecnologias: 'https://skillicons.dev/icons?i=java,spring,angular,postgres,docker,git',
      imagemCapa: '/image/projeto2/telaDeLong.png',
      tituloImagem1: 'Tela de Login',
      imagem1: '/image/projeto2/telaDeLong.png',
      tituloImagem2: 'Gestao de Salas',
      imagem2: '/image/projeto2/telaDeSala.png',
      tituloImagem3: 'Gestao de Bibliotecas',
      imagem3: '/image/projeto2/telaDeBibilotecas.png',
      tituloImagem4: 'Reserva de Sala',
      imagem4: '/image/projeto2/telaDeReserva.png',
      tituloUml: 'Diagrama UML',
      uml: '/image/projeto2/diagmauml.png',
      privado: false
    },

    {
      nome: 'E-commerce de Pedidos Online',
      descricao: 'Catalogo online com fluxo completo de pedidos e entregas.',
      descricaoCompleta: `Esse projeto foi pensado para levar o processo de compra para um ambiente online, permitindo navegar pelo catalogo, montar o pedido e acompanhar as informacoes da compra de forma simples. A experiencia cobre desde a visualizacao dos produtos ate o gerenciamento do pedido e da entrega, com foco em tornar o fluxo mais direto para o cliente e mais organizado para a operacao.`,
      demo: 'https://customer-ascl-pio-sip.vercel.app/',
      tecnologias: 'https://skillicons.dev/icons?i=java,spring,angular,postgres,docker,git',
      imagemCapa: '/image/projeto3/fotro inical.png',
      tituloImagem1: 'Catalogo Online',
      imagem1: '/image/projeto3/catalagoOnline.png',
      tituloImagem2: 'Tela de Pedido',
      imagem2: '/image/projeto3/teladePedido.png',
      tituloImagem3: 'Detalhes do Pedido',
      imagem3: '/image/projeto3/detahsddopedido.png',
      tituloImagem4: 'Gerenciamento de Pedidos',
      imagem4: '/image/projeto3/gereceiaPedido.png',
      tituloUml: 'Diagrama UML',
      uml: '/image/projeto3/diagamr uml.png',
      privado: true,
      tituloAviso: 'Projeto em Desenvolvimento',
      descricaoAviso: 'Esse projeto chegou a entrar em producao por cerca de dois meses, mas foi pausado porque ainda esta em desenvolvimento. A base do fluxo online ja estava funcionando, incluindo catalogo e pedidos, mas o sistema segue em evolucao.'
    }


  ];

  getProjetos(): Projeto[] {
    return this.projetos;
  }

}