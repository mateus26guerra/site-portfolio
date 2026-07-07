import { Injectable } from '@angular/core';

export interface Curso {
  titulo: string;
  imagem: string;
  plataforma: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class Cursos {
  constructor() {}

  cursosUdemy: Curso[] = [

{
  titulo: "Design Patterns com Java - Entendendo Padrões de Projeto",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/0aacce94-cef9-48cb-b478-63644e73a265.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Android Kotlin",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/324136c7-2a9e-4e89-88c9-10eab04be838.webp",
  plataforma: "PorWay",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Docker para Desenvolvedores (com Docker Swarm e Kubernetes)",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/9431ef70-6a77-4249-a83f-0b3fbc730d41.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Java COMPLETO Programação Orientada a Objetos + Projetos",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/96522d6a-9e45-4ea7-846a-b548d68bc2c0.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Microsserviços Java com Spring Boot e Spring Cloud",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/936f5ad3-f6bb-44b6-b3b1-46a28d905ec7.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Testes Unitários em Java: Domine JUnit 4, Mockito e TDD",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/036d5fd0-0b33-4c9b-b91d-f35336e2d788.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Node.js, Express, MongoDB & More The Complete Bootcamp",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/16262845-9e80-4687-9a3d-f8285d0a9845.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "JavaScript Basics for Beginners",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/f220ae74-3b6f-4f81-a126-beced7050fb3.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Understanding TypeScript",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/b52eedd5-a05d-4fb9-a137-abfc15eeab25.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "NestJS: The Complete Developer's Guide",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/d0c9238b-a72c-4a1d-b6b0-c401b3fb8bc4.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Inteligência Artificial e Java",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/62f05eef-9f7d-4b9f-98e5-993f545476cc.webp",
  plataforma: "Alura",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Understanding TypeScript",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/b52eedd5-a05d-4fb9-a137-abfc15eeab25.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "NestJS_ The Complete Developer's Guide",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/d0c9238b-a72c-4a1d-b6b0-c401b3fb8bc4.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Inteligência Artificial e Java",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/62f05eef-9f7d-4b9f-98e5-993f545476cc.webp",
  plataforma: "Alura",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Java e Spring Framework",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/2e231148-67fe-401e-bbc0-252dbc50ac57.webp",
  plataforma: "Alura",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Java Web: crie aplicações usando Spring Boot",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/0ae5d605-f7a1-4de8-8f15-19b37e6ec5e7.webp",
  plataforma: "Alura",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Java e Orientação a Objetos",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/91403023-5a97-4b11-bcec-cd129bb5bb05.webp",
  plataforma: "Alura",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Gen AI Technical",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/df01135b-ffc4-48d7-a71c-a2fedd4f5ebe.webp",
  plataforma: "Compass UOL",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "AI-Assisted",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/22880835-5a71-4525-a12a-fd5e6b20ce11.webp",
  plataforma: "Compass UOL",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Git e GitHub do básico ao avançado (c/ gist e GitHub Pages)",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/a4bc06ea-1d00-4ed5-8286-c5800e28bbbd.webp",
  plataforma: "Compass UOL",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "The Absolute Beginners Guide to Cyber Security 2024 - Part 1",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/3db2ebc1-d8af-4ef5-a155-74c42d56fa1b.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Metodologias Ágeis(XP, Scrum, Lean e Kanban )",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/b603619e-e22b-4565-b81f-3c5b14012828.webp",
  plataforma: "Udemy",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Santander 2024 - Backend com Java",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/5caf5578-2b83-4800-9df9-46d60ba73e03.webp",
  plataforma: "Dio",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Java AI Powered",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/1a056011-29e9-4a34-8668-d8e651e5f4a2.webp",
  plataforma: "Dio",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
},
{
  titulo: "Decola Tech 2024",
  imagem: "https://pub-bed746ee956247b3abd6764681bd99d8.r2.dev/produtos/416898bb-335f-4199-9e46-4add05b23705.webp",
  plataforma: "Dio",
  link: "https://www.udemy.com/course/nestjs-fundamentos/"
}

  ];

  getCursosUdemy(): Curso[] {
    return this.cursosUdemy;
  }
}
