import { BiCodeAlt, BiLogoReact, BiData } from "react-icons/bi";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaMapPin,
  FaMapMarkedAlt,
  FaDatabase,
} from "react-icons/fa";
import { DiDatabase } from "react-icons/di";

import ProjectBikeville from "../assets/images/ProjectBikeVille.png";
import ProjectPortfolio from "../assets/images/ProjectPortfolio.png";
import ProjectVibesHub from "../assets/images/ProjectVibesHub.png";
import LogoBetacom from "../assets/images/LogoBetacom.svg";
import LogoDevelhope from "../assets/images/LogoDevelhope.svg";

export const menuItems = [
  { label: "Home", href: "#hero" },
  { label: "Chi sono", href: "#about" },
  { label: "Progetti", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Esperienze", href: "#experiences" },
];

export const projects = [
  {
    id: 1,
    title: "Web App E-Commerce: Bikeville",
    image: ProjectBikeville,
    description: `Web App E-commerce con funzionalità come lista prodotti, carrello, autenticazione e criptazione dati.
Integrazione completa con Front-end sviluppato in Angular(v18.2) & TypeScript, con attività di Styling personalizzato attraverso CSS 
e Back-end Utilizzando .NET Core, C#,  Entity Framework e SQL server. `,
  },
  {
    id: 2,
    title: "Responsive Portfolio Website",
    image: ProjectPortfolio,
    description: `Portfolio personale realizzato con React.js, che sfrutta Tailwind CSS per offrire un'interfaccia utente moderna, responsive e performante. 
Il sito è strutturato in maniera modulare con componenti riutilizzabili, include animazioni fluide e un design curato per evidenziare le varie sezioni in modo dinamico e intuitivo.`,
  },
  {
    id: 3,
    title: "App for streaming music: VibesHub",
    image: ProjectVibesHub,
    description: `Applicazione di streaming musicale sviluppata\n con Java 21 e Spring Boot 3.2.1.
Confezionata come jar tramite Maven, l'applicazione segue il pattern MVC, 
integra MySQL tramite Spring Data JPA per la gestione dei dati e utilizza MiniO per l'object storage. 
Implementazione di REST API per garantire la gestione delle funzionalità.`,
  },
];

export const skills = [
  {
    id: 1,
    title: "Back-end Development",
    description:
      "Esperienza Backend in OOP: C# .NET ASP.NET Core, Entity Framework, MVC, Java, SpringBoot, SpringJPA",
    icon: BiCodeAlt,
  },
  {
    id: 2,
    title: "Front-end Development",
    description:
      "Esperienza nello sviluppo di interfacce utente responsive e moderne con: HTML, CSS, Javascipt, Typescript, Angular, React, Tailwind",
    icon: BiLogoReact,
  },
  {
    id: 3,
    title: "Data Management",
    description:
      "Esperienza nella progettazione e gestione di Database relazionali: SQL Server, MySQL, e di database NoSQL come MongoDB",
    icon: DiDatabase,
  },
];

export const experiences = [
  {
    id: 1,
    title: "Academy .NET @Betacom",
    location: "Bari, IT",
    website: "https://www.betacom.it",
    description: `Partecipazione al percorso intensivo di 500 ore dell'Academy Betacom, focalizzato sul ciclo di vita del software e sullo sviluppo full stack.
Il focus principale è stato quello di presentare le varie fasi del ciclo di vita del software e creare progetti in ambito Net Core/ C#, per il lato Back End e in ambito Angular / React per il lato Front End.

Competenze acquisite:`,
    years: "2024-2025",
    skills: [
      "C#",
      ".NET",
      "ASP.NET",
      "JS/TS",
      "React",
      "Angular",
      "SQL",
      "MongoDB",
    ],
    logo: LogoBetacom,
  },

  {
    id: 2,
    title: `Java Back-end @Develhope`,
    location: "Remoto, IT",
    website: "https://www.develhope.co",
    description: `Formazione intensiva di 6 mesi come Java Back-End Developer con Develhope. Selezionato per una borsa di studio nell'ambito del programma Ready For IT+, finanziato dal Fondo per la Repubblica Digitale.

Approfondimento di Java, Spring Boot, Spring Data JPA (Hibernate), Design Pattern (Singleton, Factory), architettura MVC e REST API.
Gestione di database SQL con MySQL, e Postman per il testing delle API.
Collaborazione in team tramite GitHub, con progetti pratici di difficoltà crescente.

Competenze acquisite:`,
    years: "2024-2024",
    skills: [
      "Java",
      "SpringBoot",
      "MySQL",
      "RestAPI",
      "SpringDataJPA",
      "SQL",
      "GIT",
    ],
    logo: LogoDevelhope,
  },
];

export const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "Davidetatone92@gmail.com",
    link: "mailto:Davidetatone92@gmail.com",
    icon: FaEnvelope,
  },
  {
    id: 2,
    type: "Phone",
    value: "+39 345 164 3264",
    link: "cell:+39 345-164-3264",
    icon: FaPhoneAlt,
  },
  {
    id: 3,
    type: "LinkedIn",
    value: "Davide Tatone",
    link: "https://www.linkedin.com/in/davide-tatone/",
    icon: FaLinkedin,
  },
  {
    id: 4,
    type: "Location",
    value: "Bari, Italia",
    link: null,
    icon: FaMapMarkedAlt,
  },
];

export const words = [
  "React",
  "Tailwind",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "MongoDB",
  "GraphQL",
  "APIs",
  "Git",
  "GitHub",
  "VS Code",
];
