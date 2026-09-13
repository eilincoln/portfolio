export interface Project {
  title: string;
  status: "stable" | "building" | "null";
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Imobiliária Santos",
    status: "stable",
    description:
      "Página institucional desenvolvida com HTML5 e CSS3 para praticar estruturação semântica e versionamento Git.",
    tags: ["#HTML", "#CSS"],
    image: "/img/capas-de-projetos/imobiliaria-santos.png",
    link: "https://imobiliaria-santos-wine.vercel.app/",
    github: "https://github.com/eilincoln/imobiliaria",
  },
  {
    title: "Escuta e Cuida",
    status: "stable",
    description:
      "Plataforma digital de saúde mental voltada aos profissionais de uma UBS. Acesso a atendimento psicológico online a valor social.",
    tags: ["#HTML", "#CSS"],
    image: "/img/capas-de-projetos/escuta-e-cuida.png",
    link: "https://lincolnberto.com/meus-projetos/escuta-e-cuida/",
  },
  {
    title: "Morauto Soluções Automotivas",
    status: "stable",
    description:
      "Landing page institucional premium desenvolvida para oficina de alto padrão. CSS modular, dark mode e micro-interações nativas.",
    tags: ["#HTML5", "#CSS3", "#Grid", "#Flexbox"],
    image: "/img/capas-de-projetos/morauto.png",
    link: "https://lincolnberto.com/meus-projetos/morauto/",
    github: "https://github.com/eilincoln/morauto",
  },
  {
    title: "Pet Boutique - Estética Animal",
    status: "stable",
    description:
      "Landing page de conversão com galeria de filtros e integração com a API do WhatsApp e Google Maps.",
    tags: ["#HTML5", "#CSS3", "#CSSGrid", "#Flexbox"],
    image: "/img/capas-de-projetos/pet-boutique.png",
    link: "https://lincolnberto.com.br/meus-projetos/pet-boutique/",
    github: "https://github.com/eilincoln/pet-boutique",
  },
  {
    title: "Manhattan - Coffee House",
    status: "stable",
    description:
      "Landing page de alto padrão com blocos de efeito Parallax nativo e navegação interna otimizada com rolagem suave.",
    tags: ["#HTML5", "#CSS3", "#DesignTokens", "#Parallax"],
    image: "/img/capas-de-projetos/manhattan-coffee-house.png",
    link: "https://lincolnberto.com.br/meus-projetos/manhattan-coffee-house",
    github: "https://github.com/eilincoln/coffee-house",
  },
  {
    title: "AlfaTech - Soluções em Hospedagem",
    status: "stable",
    description:
      "Landing page comercial com matriz comparativa de planos técnicos estruturada com alta acessibilidade tabular.",
    tags: ["#HTML5", "#CSS3", "#A11y", "#DesignTokens"],
    image: "/img/capas-de-projetos/alfatech.png",
    link: "https://lincolnberto.com.br/meus-projetos/alfatech",
    github: "https://github.com/eilincoln/alfatech",
  },
  {
    title: "Pousada Secreta - Hotelaria & Reservas",
    status: "stable",
    description:
      "Landing page com catálogo de acomodações, efeito Glassmorphism na navegação fixa e otimizações de Core Web Vitals.",
    tags: ["#HTML5", "#CSS3", "#Glassmorphism", "#ModularCSS"],
    image: "/img/capas-de-projetos/pousada-secreta.png",
    link: "https://lincolnberto.com.br/meus-projetos/pousada-secreta",
    github: "https://github.com/eilincoln/pousada-secreta",
  },
  {
    title: "Dev Bio Hub",
    status: "stable",
    description:
      "Hub de conversão e micro-portfólio interativo construído com a API nativa <dialog>, CSS Modules e despacho estruturado para WhatsApp.",
    tags: ["#React", "#TypeScript", "#Vite", "#CSSModules", "#A11y"],
    image: "/img/capas-de-projetos/preview-desktop.png",
    link: "https://links.lincolnberto.com",
    github: "https://github.com/eilincoln/lincolnberto-bio",
  },
  {
    title: "Sistema ATS & Gestão de Vagas Corporativas",
    status: "stable",
    description:
      "Plataforma completa de recrutamento com portal público de vagas, métricas em tempo real, PostgreSQL RLS e Signed URLs.",
    tags: [
      "#React",
      "#TypeScript",
      "#Vite",
      "#Supabase",
      "#PostgreSQL",
      "#RLS",
    ],
    image: "/img/capas-de-projetos/sistema-ats-vagas.png",
    link: "https://carrantos-vagas.vercel.app/",
    github: "https://github.com/eilincoln/carrantos-vagas",
  },
];
