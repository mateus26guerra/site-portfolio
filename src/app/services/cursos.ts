import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cursos {
  constructor() {}

  cursosUdemy = [
    {
      titulo: "Git e GitHub do básico ao avançado",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQFmyQ7Q4LNKzw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734275789079?e=1754078400&v=beta&t=xM1Gj9K0PvIgequOUeiwK4MYOLXj3-er_jrx_43VDVc",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/typescript-do-basico-ao-avancado"
    },
    {
      titulo: "Cyber Security",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQH9qeoHVq3oAA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734275673244?e=1754078400&v=beta&t=D8Q5JklYXQMLImd3Zf7gziV9ccBxCMUTirM4ptukccc",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "AI-Assisted ",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQFvA-9t_QXiTw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734558926088?e=1754078400&v=beta&t=XpGP0KH81KARZ0ygONpovRIFQ6hJqj1Uyh1MhFK6TPI",
      plataforma: "Compass.uol",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Gen AI Technical ",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQHV_ZWzZYzEoQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734559117026?e=1754078400&v=beta&t=fJrVt-RH_TYjyDnTiu617zIK5EzqOhcV9lDrgCQZmUo",
      plataforma: "Compass.oul",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Inteligência Artificial e Java ",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQFLRo-lL04WTQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1735321619181?e=1754078400&v=beta&t=y-6jF0SoGbIwrK-9hjmglIdaQhhSXuD-RyBBUTouqQ0",
      plataforma: "Alura",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Metodologias Ágeis",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQErgc5Yceg7pg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734275570271?e=1754078400&v=beta&t=0nBVe2Nd01pOoF8p7Tr6zK6PPFdAw1MsepbLouY8a84",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Java Web: Spring Boot",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQEcb1qBV2aJyg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1735320143926?e=1754078400&v=beta&t=RmwiAKmK9DogCMSAnDcrUXTA93XasLhyiZJLWKNMi7g",
      plataforma: "Alura",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Java e Spring Framework",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQETAsG7fwhRvw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1735321427530?e=1754078400&v=beta&t=UdQF9TtKHfmlpHLRIhQtRy9lHRtekN0rlL_nrZNfAn0",
      plataforma: "Alura",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Java e Orientação a Objetos",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQHoPftyetYpMA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1735319585825?e=1754078400&v=beta&t=JKRQgGWHBl17S-j1NjQ0yxNUVIvWHk93T0FiAkVklaQ",
      plataforma: "Alura",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Banckend com java ",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQEyN-1NEXuboQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723149725117?e=1754078400&v=beta&t=TOKTdC0uZotlJVCZ_QPekSitUCiJNmWgZBVEUWMSi6E",
      plataforma: "Dio",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Java AI Powered",
      imagem: "https://hermes.dio.me/certificates/cover/H0S57ARY.jpg",
      plataforma: "Dio",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Decola Tech 2024",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQFlrq7ibYm3dg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1705185965993?e=1754078400&v=beta&t=prOzgPmLXbtxobQBf1iyKu2a275HISnNgJ2Y32vJfXk",
      plataforma: "Dio",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "JavaScript Basics for Beginners ",
      imagem: "https://media.licdn.com/dms/image/v2/D4E2DAQHw6vjT0f6W_w/profile-treasury-document-cover-images_480/B4EZdDUI15HcA0-/0/1749181043405?e=1754078400&v=beta&t=-iOymHBixlFT1PZNOXhtdk1Bn6joiG2vt7fr4QdXB2M",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "NestJS_ The Complete",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQG8_A9FrhHGSA/profile-treasury-document-cover-images_480/B4DZdDKkxIGUA0-/0/1749178536342?e=1754078400&v=beta&t=rNmv6Rbz37m5rdmBiFDxv5FJDUgKN8H6Orj9MJ87gII",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Node.js, Express, MongoDB",
      imagem: "https://media.licdn.com/dms/image/v2/D4E2DAQELFWxG1PHMRw/profile-treasury-document-cover-images_480/B4EZdDUU2QG4A8-/0/1749181092600?e=1754078400&v=beta&t=piAYXA6YUaqbij2LMFxhS2EdTARpgPv4XbV0fdFWDvM",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Understanding TypeScript",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQFN-SdA25WrFg/profile-treasury-document-cover-images_480/B4DZdDLrMwH4Aw-/0/1749178824850?e=1754078400&v=beta&t=XdjXbaE2EVfvjRQl4UiI6E4fkY2r5qpLGRXlJfdq3GQ",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    }
  ];

  getCursosUdemy() {
    return this.cursosUdemy;
  }
}
