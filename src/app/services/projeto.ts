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
      nome: "Sistema SaaS para Barbearias",
      descricao: "Sistema completo para gerenciamento de barbearias.",
      descricaoCompleta: `O Barber Manager é um sistema SaaS desenvolvido para automatizar toda a gestão de barbearias.O sistema possui versões Web e Mobile, permitindo controlar clientes, agendamentos, pagamentos, emissão de PDF, dashboard administrativo, autenticação JWT e diversos recursos voltados ao gerenciamento do negócio.O backend foi desenvolvido em Java utilizando Spring Boot, seguindo arquitetura MVC, autenticação JWT, PostgreSQL e documentação Swagger.O painel administrativo foi desenvolvido em Angular com foco em desempenho, responsividade e facilidade de manutenção. Por questões de segurança e estratégia comercial, parte da arquitetura e das telas reais permanecem privadas.`,
      github: "https://github.com/mateus26game/tela-de-login",
      video: "https://youtu.be/yy0Betc2Has",
      tecnologias:"https://skillicons.dev/icons?i=java,spring,angular,postgres,docker,git",
      imagemCapa:"https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/122eae73-223a-4d82-8700-2bb0c819ae6a.webp",
      tituloImagem1: "Tela Principal",
      imagem1:"https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/122eae73-223a-4d82-8700-2bb0c819ae6a.webp",
      tituloImagem2: "Gestão de Clientes",
      imagem2:"https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/b07f9dfa-b35f-466e-9dca-c2991c3711ed.webp",
      tituloImagem3: "Dashboard Administrativo",
      imagem3:"https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/10570b8a-52c1-4b16-b718-bdf862cb8d65.webp",
      tituloImagem4: "Tela de Relatórios PDF",
      imagem4:"https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/55467e18-ca2d-454b-ad0b-9135d4b8e289.webp",
      tituloUml: "Diagrama UML",
      uml:"https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/81d319ad-9f80-4091-a8ce-7edebd28e899.webp",
      tituloArquitetura: "Arquitetura do Sistema",
      arquitetura:"https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/60aaaa44-d59b-4a4e-a644-44f35f683fff.webp",
      privado: true,
      tituloAviso: "Projeto Privado",
      descricaoAviso: `As telas, diagramas UML e imagens apresentadas nesta demonstração possuem apenas finalidade ilustrativa.A versão completa do sistema contém funcionalidades, regras de negócio, estrutura interna, integrações e arquitetura que permanecem privadas por questões de segurança, estratégia comercial e proteção da propriedade intelectual.Esta apresentação mostra apenas parte do projeto.`

    }

  ];

  getProjetos(): Projeto[] {
    return this.projetos;
  }

}