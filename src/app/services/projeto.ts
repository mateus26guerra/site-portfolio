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

  imagem5?: string;
  tituloImagem5?: string;

  imagem6?: string;
  tituloImagem6?: string;

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
      nome: 'Asclépio - Painel Administrativo',
      descricao: 'SaaS de PDV, estoque e catálogo online para várias empresas e lojas num só painel.',
      descricaoCompleta: `O Asclépio é um SaaS multiempresa e multiloja para pequenos negócios venderem no balcão e online com um único sistema. O painel administrativo reúne o PDV (frente de caixa com busca por nome ou código de barras, descontos e pagamento em dinheiro, Pix ou cartão), o controle de estoque com baixa automática a cada venda e alerta de estoque mínimo, o cadastro de produtos e categorias, os pedidos que chegam do catálogo, clientes, bairros de entrega e relatórios de faturamento. Cada empresa ganha um mini catálogo online com link próprio, logo, cores e QR code, sempre sincronizado com o preço e o estoque do caixa. O acesso é controlado por cargos e permissões vindas do JWT, com login em duas etapas para quem trabalha em mais de uma loja, e os limites de lojas e funcionários seguem o plano contratado pela empresa. O front-end é feito em Angular 21 com componentes standalone e o back-end em Spring Boot com Java e PostgreSQL.`,
      github: 'https://github.com/Asclepio-sip/Asclepio-painel.sip',
      demo: 'https://administration-ascl-pio-sip.vercel.app',
      tecnologias: 'https://skillicons.dev/icons?i=java,spring,angular,ts,postgres,docker',
      imagemCapa: '/image/projeto6/capa.webp',
      tituloImagem1: 'Tela Inicial',
      imagem1: '/image/projeto6/tela-inicial.webp',
      tituloImagem2: 'Recursos do Sistema',
      imagem2: '/image/projeto6/recursos.webp',
      tituloImagem3: 'Como Funciona',
      imagem3: '/image/projeto6/como-funciona.webp',
      tituloImagem4: 'Catálogo e Multiloja',
      imagem4: '/image/projeto6/catalogo-multiloja.webp',
      privado: false
    },
    {
      nome: 'Vagas Tech',
      descricao: 'Vagas de tecnologia de 24 empresas reunidas num lugar só, com aviso quando abre vaga nova.',
      descricaoCompleta: `O Vagas Tech acompanha os sites de carreira de 24 empresas (iFood, PicPay, Inter, Accenture, Amazon, Mastercard e outras) e junta todas as vagas de tecnologia numa única lista. Uma sincronização automática, disparada por agendador, busca as vagas novas, marca as que fecharam e evita alarme falso quando o site de alguma empresa sai do ar. No modo feed a pessoa vê uma vaga por vez e arrasta para decidir: interessante, candidatado ou ignorar. Dá para filtrar por palavras-chave (Java, Remoto, Júnior), escolher empresas favoritas e receber aviso no Telegram quando abre vaga nova. O login aceita e-mail com código de confirmação ou conta Google, e o perfil guarda o currículo para a candidatura rápida, que já prepara as respostas do formulário da vaga. O site funciona como app no celular (PWA) e também tem um app Android em Kotlin com Jetpack Compose consumindo a mesma API.`,
      demo: 'https://jubilant-disco-0ne2.onrender.com/',
      tecnologias: 'https://skillicons.dev/icons?i=nodejs,express,postgres,js,kotlin,androidstudio',
      imagemCapa: '/image/projeto4/capa.png',
      tituloImagem1: 'Tela Inicial',
      imagem1: '/image/projeto4/tela-inicial.png',
      tituloImagem2: 'Funcionalidades',
      imagem2: '/image/projeto4/funcionalidades.png',
      tituloImagem3: 'Início no Celular',
      imagem3: '/image/projeto4/app-inicio.jpeg',
      tituloImagem4: 'Modo Feed',
      imagem4: '/image/projeto4/app-modo-feed.jpeg',
      tituloImagem5: 'Seleção de Empresas',
      imagem5: '/image/projeto4/app-empresas.jpeg',
      tituloImagem6: 'Aviso no Telegram',
      imagem6: '/image/projeto4/app-telegram.jpeg',
      privado: false
    },
    {
      nome: 'Aqui Tá Bom',
      descricao: 'App para avaliar restaurantes e ver em tempo real se o lugar está cheio.',
      descricaoCompleta: `O Aqui Tá Bom nasceu para responder uma dúvida comum na hora de comer fora: o lugar é bom e está lotado agora? No app Android a pessoa encontra os restaurantes da cidade num mapa ou em lista com busca, abre a página de cada um e vê as postagens, as notas e os comentários de quem já foi. A parte colaborativa é a lotação: qualquer usuário informa como o local está naquele momento ("De boa", "Embaçado" ou "Cheio que só") e o app mostra o status atual a partir dos votos da comunidade. Também dá para publicar fotos do prato com nota de 1 a 5, curtir e comentar postagens, avaliar o restaurante e gerenciar tudo pelo perfil, com tema claro ou escuro. O app foi feito em Kotlin com Jetpack Compose e consome uma API REST própria em Java com Spring Boot, que cuida do login com JWT, guarda os dados no PostgreSQL e as imagens num armazenamento compatível com S3.`,
      github: 'https://github.com/mateus26guerra/AQUI-TA-BOM-APP',
      tecnologias: 'https://skillicons.dev/icons?i=kotlin,androidstudio,java,spring,postgres,docker',
      imagemCapa: '/image/projeto5/logo.png',
      tituloImagem1: 'Feed de Postagens',
      imagem1: '/image/projeto5/feed.jpeg',
      tituloImagem2: 'Lotação do Restaurante',
      imagem2: '/image/projeto5/restaurante.jpeg',
      tituloImagem3: 'Detalhe da Postagem',
      imagem3: '/image/projeto5/postagem.jpeg',
      tituloImagem4: 'Nova Postagem',
      imagem4: '/image/projeto5/nova-postagem.jpeg',
      privado: false
    },
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