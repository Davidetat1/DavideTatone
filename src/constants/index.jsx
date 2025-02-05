import { BiCodeAlt, BiMobileAlt, BiPalette, } from "react-icons/bi";
import ProjectBikeville from "../assets/images/ProjectBikeVille.png";
import ProjectPortfolio from "../assets/images/ProjectPortfolio.png";
import ProjectVibesHub from "../assets/images/ProjectVibesHub.png";


export const menuItems = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  
export const projects = [
    {
      id: 1,
      title: "E-Commerce platform: Bikeville ",
      image: ProjectBikeville,
      description:
        "Web App E-commerce con funzionalità come lista prodotti, carrello, autenticazione e criptazione dati. \nIntegrazione completa con Front-end sviluppato in Angular(v18.2) & Typecript, con attività di Styling personalizzato attraverso CSS \ne Back-end Utilizzando .NET Core, C#,  Entity Framework e SQL server.",
    },
    {
      id: 2,
      title: "Responsive Portfolio Website",
      image: ProjectPortfolio,
      description:
        "Portfolio personale realizzato con React.js, \nche sfrutta Tailwind CSS per offrire un'interfaccia utente moderna, responsive e performante. Il sito è strutturato in maniera modulare con componenti riutilizzabili, include animazioni fluide e un design curato per evidenziare le varie sezioni in modo dinamico e intuitivo.",
    },
    {
      id: 3,
      title: "App for streaming music: VibesHub",
      image: ProjectVibesHub,
      description:
         "Applicazione di streaming musicale sviluppata\n con Java 21 e Spring Boot 3.2.1. \nConfezionata come jar tramite Maven, \nl'applicazione segue il pattern MVC, \nintegra MySQL tramite Spring Data JPA per la gestione dei dati e utilizza \nMiniO per l'object storage. \nImplementazione di REST API per garantire la gestione delle funzionalità."
    },
  ];
  
  export const skills = [
    {
      title: "Back-end Development",
      description:
        "Esperienza Backend in OOP: C# .NET ASP.NET Core, Entity Framework, MVC, Java, SpringBoot, SpringJPA",
      icon: BiCodeAlt,
    },
    {
      title: "Front-end Development",
      description:
        "Esperienza nello sviluppo di interfacce utente responsive e moderne con: HTML, CSS, Javascipt, Typescript, Angular, React, Tailwind",
      icon: BiMobileAlt,
    },
    {
      title: "Data Management",
      description:
        "Esperienza nella progettazione e gestione di Database relazionali: SQL Server, MySQL, e di database NoSQL come MongoDB",
      icon: BiPalette,
    },
  ];
  
  export const contactDetails = [
    {
      id: 1,
      type: "Email",
      value: "Davidetatone92@gmail.com",
      link: "mailto:Davidetatone92@gmail.com",
      icon: "📧",
    },
    {
      id: 2,
      type: "Phone",
      value: "+123 456 7890",
      link: "tel:+1234567890",
      icon: "📞",
    },
    {
      id: 3,
      type: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://www.linkedin.com/in/davide-tatone/",
      icon: "🔗",
    },
    {
      id: 4,
      type: "Location",
      value: "Bari, Italia",
      link: null,
      icon: "📍",
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
  
  // ::-webkit-scrollbar {
  //     width: 12px;
  //     height: 12px;
  //   }
  
  //   ::-webkit-scrollbar-track {
  //     background: #20242d;
  //   }
  
  //   ::-webkit-scrollbar-thumb {
  //     background: #3b82f6;
  //     border-radius: 6px;
  //     border: 1px solid #eee;
  //     transition: background 0.3s ease;
  //   }
  
  //   ::-webkit-scrollbar-thumb:hover {
  //     background: #555555;
  //   }
  