// src/app/services/projetos.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  constructor() {}

  
  private projetos = [

    {
      nome: " barbearias com gestão de clientes",
      link_back: "https://github.com/mateus26game/tela-de-login",
      linkdoVideo: "https://youtu.be/yy0Betc2Has",
      texto: "Este é um sistema completo desenvolvido para o gerenciamento de clientes em barbearias",
      textoDetalhado: "Este é um sistema completo para gerenciamento de clientes em barbearias, com versões web e mobile, desenvolvido com foco em organização, escalabilidade e facilidade de uso. A plataforma permite o cadastro e listagem de clientes, agendamento de atendimentos por data, controle de pagamentos (com filtros para clientes que já pagaram ou estão em aberto), além da geração automática de relatórios em PDF, como a lista de cortes do dia e notas fiscais individuais. A versão mobile, desenvolvida em Java para Android, oferece as mesmas funcionalidades do painel web, permitindo o uso direto pelo barbeiro em seu celular. O backend foi construído com Java, Spring Boot, JPA e PostgreSQL, utilizando arquitetura MVC; já o frontend foi desenvolvido com Angular e Bootstrap.",
      tecnologia: "https://skillicons.dev/icons?i=java,spring,angular",
      imagem: "https://i.pinimg.com/736x/b2/89/88/b28988f0bf59f6fa3c61bceee95b8bdf.jpg"
    },
    {
      nome: "Projeto Base - Login com Spring Security + JWT",
      link_back: "https://github.com/mateus26game/tela-de-login",
      linkdoVideo: "https://youtu.be/7UTR0WGK7BU",
      texto: "Este é um projeto backend com Spring Boot, que implementa login e registro de usuários usando Spring Security, JWT e banco de dados PostgreSQL.",
      textoDetalhado: "Este projeto é uma base sólida para autenticação e autorização em aplicações Java com Spring Boot, utilizando Spring Security com JWT (JSON Web Tokens). Ele também integra o PostgreSQL como banco de dados principal. O objetivo é oferecer um ponto de partida reutilizável para projetos futuros, com autenticação segura, controle de acesso e estrutura modular pronta para ser expandida com funcionalidades como cadastros, dashboards, e muito mais.",
      tecnologia: "https://skillicons.dev/icons?i=java,spring,angular",
      imagem: "https://www.brasilcode.com.br/wp-content/uploads/2020/09/Formularios-de-Login.png"
    },
    {
      nome: "Sistema de Gestão de Filmes",
      link_back: "https://github.com/seu-repo/chatbot-ai",
      linkdoVideo: "https://github.com/user-attachments/assets/f5221b62-5576-4c59-86cf-2311296fa705",
      texto: "Sistema Administrativo de Cadastro e Gerenciamento de Filmes",
      textoDetalhado: "Sistema Administrativo de Cadastro e Gerenciamento de Filmes Este projeto é um sistema backend desenvolvido em Java com Spring Boot para gerenciar o cadastro de filmes. Ele permite que usuários façam operações como criar, listar, atualizar e deletar filmes no banco de dados. A aplicação foi construída com foco em servir como base para sistemas administrativos ou plataformas de gerenciamento, podendo ser facilmente adaptada para outros contextos. Ela utiliza PostgreSQL como banco de dados relacional, e oferece recursos de pesquisa e filtragem de filmes por critérios como gênero e ano.",
      tecnologia: "https://skillicons.dev/icons?i=java,spring,postgres",
      imagem: "https://i.pinimg.com/736x/b7/ed/c0/b7edc0724c55f87574e4350f66b0a1a9.jpg"
    },
    {
      nome: "Projeto Stem Verde",
      link_back: "https://github.com/mateus26game/front_end_faculdade_angular",
      linkdoVideo: "https://projeto-api-8rj2.vercel.app/",
      texto: "Site em Angular para acompanhar novidades do mundo dos jogos.",
      textoDetalhado: "Stem Verde é um site desenvolvido com Angular e estilizado com Tailwind CSS, focado em trazer ao usuário uma experiência interativa com o mundo dos games. A aplicação consome uma API pública de jogos, permitindo que os usuários: Acompanhem notícias e lançamentos de jogos Visualizem detalhes como título, descrição, imagens e classificações Criem e gerenciem sua lista personalizada de jogos favoritos.",
      tecnologia: "https://skillicons.dev/icons?i=java,spring,postgres",
      imagem: "https://i.pinimg.com/736x/b6/55/e6/b655e6818d1532b7a9dfc872eda73e53.jpg"
    },{
      nome: "Chatbot com Inteligência Artificial",
      link_back: "https://github.com/seu-repo/chatbot-ai",
      linkdoVideo: "https://www.youtube.com/watch?v=8uTWnjVfj9Q",
      texto: "Chatbot com IA usando Spring Boot e API do Google Gemini.",
      textoDetalhado: "Chatbot desenvolvido em Java com Spring Boot, que permite conversas dinâmicas com personagens da cultura pop usando a API Google Gemini para respostas inteligentes. O backend utiliza banco de dados relacional para armazenar informações e contexto das interações. A interface web é construída com HTML, CSS e JavaScript, focando em usabilidade e responsividade. Tecnologias: Java, Spring Boot, Google Gemini, banco de dados relacional, HTML/CSS/JS.",
      tecnologia: "https://skillicons.dev/icons?i=java,spring,postgres,mysql,angular",
      imagem: "https://i.pinimg.com/736x/b9/7f/2d/b97f2db55c3af4343b5bf512143e0492.jpg"
    }
  ];
  

  getProjetos() {
    return this.projetos;
  }
}
