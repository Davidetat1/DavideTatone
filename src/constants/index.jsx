import { BiCodeAlt, BiLogoReact } from "react-icons/bi";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { DiDatabase } from "react-icons/di";

import ProjectBikeville from "../assets/images/ProjectBikeVille.png";
import ProjectPortfolio from "../assets/images/ProjectPortfolio.png";
import ProjectVibesHub from "../assets/images/ProjectVibesHub.png";
import LogoBetacom from "../assets/images/LogoBetacom.svg";
import LogoDevelhope from "../assets/images/LogoDevelhope.svg";

export const menuItems = [
  { label: "Home", href: "#home" },
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
    description: `Web App E-commerce con funzionalità avanzate, tra cui gestione dei prodotti, carrello, autenticazione e criptazione dei dati. 
      Il progetto presenta un'integrazione completa tra il front-end, sviluppato con Angular (v18.2) e TypeScript con styling personalizzato in CSS, 
      e il back-end, realizzato con .NET Core, C#, Entity Framework e SQL Server. `,
  },
  {
    id: 2,
    title: "Responsive Portfolio Website",
    image: ProjectPortfolio,
    description: `Portfolio personale sviluppato con React.js e Tailwind CSS per offrire un'interfaccia moderna, responsive e performante.
Il sito è strutturato in maniera modulare con componenti riutilizzabili e integra Framer Motion per animazioni fluide e transizioni dinamiche, per evidenziare le varie sezioni in modo intuitivo e interattivo. 
Il progetto è ospitato su Vercel, garantendo performance ottimali e un deploy rapido`,
  },
  {
    id: 3,
    title: "App for streaming music: VibesHub",
    image: ProjectVibesHub,
    description: `Applicazione di streaming musicale sviluppata con Java 21 e Spring Boot 3.2.1.
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
Il focus principale è stato quello di presentare le varie fasi del ciclo di vita del software e creare progetti in ambito Net Core/ C#, per il lato Back End e in ambito Angular / React per il lato Front End, includendo anche l'applicazione di stored procedure e trigger per la gestione dei dati.

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

export const aboutText = `Fin da piccolo ho sempre avuto una curiosità instancabile per la tecnologia. Mi affascinava capire il funzionamento delle cose.

Crescendo, quella curiosità mi ha portato a intraprendere un percorso nel mondo dello sviluppo software, dove ho affinato competenze sia nel back-end che nel front-end, lavorando con diverse tecnologie, linguaggi e framework.

Ma il codice non è tutto ciò che mi rappresenta. Ho imparato il valore della collaborazione e della determinazione non solo attraverso le righe di programmazione, ma anche attraverso lo sport, la mia prima scuola di vita, grazie al quale ho affinato costanza e perseveranza, imparando che ogni sfida, sia nel mondo digitale che nella vita reale, è un’opportunità per crescere e migliorare.

Oggi porto con me questa mentalità in ogni progetto su cui lavoro, con l'obiettivo di creare soluzioni innovative e continuare a crescere, sia come sviluppatore che come persona.`;
