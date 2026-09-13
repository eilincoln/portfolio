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
      "Página institucional simples para uma imobiliária desenvolvida exclusivamente com HTML5 e CSS3. Projeto criado com o objetivo de praticar estruturação de tags, estilização básica, alinhamento de elementos e versionamento de código com Git/GitHub.",
    tags: ["#HTML", "#CSS"],
    image: "/img/capas-de-projetos/imobiliaria-santos.png",
    link: "https://imobiliaria-santos-wine.vercel.app/",
    github: "https://github.com/eilincoln/imobiliaria",
  },
  {
    title: "Escuta e Cuida",
    status: "stable",
    description:
      "Plataforma digital de saúde mental voltada aos profissionais de uma UBS. Oferece acesso a atendimento psicológico online e remoto a valor social, promovendo bem-estar, acolhimento e qualidade de vida no ambiente de trabalho.",
    tags: ["#HTML", "#CSS"],
    image: "/img/capas-de-projetos/escuta-e-cuida.png",
    link: "https://lincolnberto.com/meus-projetos/escuta-e-cuida/",
  },
  {
    title: "Morauto Soluções Automotivas",
    status: "stable",
    description:
      "Landing Page institucional premium desenvolvida para uma oficina de funilaria de alto padrão em Campinas-SP. Conta com arquitetura CSS modular, design estruturado em Dark Mode, efeitos de micro-interações nativas e total responsividade para dispositivos móveis.",
    tags: ["#HTML5", "#CSS3", "#Grid", "#Flexbox", "#Git"],
    image: "/img/capas-de-projetos/morauto.png",
    link: "https://lincolnberto.com/meus-projetos/morauto/",
    github: "https://github.com/eilincoln/morauto",
  },
  {
    title: "Pet Boutique - Estética Animal",
    status: "stable",
    description:
      "Landing page institucional focada em conversão. Desenvolvida com arquitetura CSS Modular nativa, o projeto apresenta serviços especializados, galeria de marcas com filtros dinâmicos e integração total com a API do WhatsApp e Google Maps.",
    tags: ["#HTML5", "#CSS3", "#CSSGrid", "#Flexbox", "#Modular", "#Petshop"],
    image: "/img/capas-de-projetos/pet-boutique.png",
    link: "https://lincolnberto.com.br/meus-projetos/pet-boutique/",
    github: "https://github.com/eilincoln/pet-boutique",
  },
  {
    title: "Manhattan - Coffee House",
    status: "stable",
    description:
      "Landing page institucional de alto padrão desenvolvida para uma cafeteria premium. O projeto aplica conceitos avançados de estruturação semântica, controle de imagens de fundo através de múltiplos blocos com efeito Parallax nativo e navegação interna otimizada com rolagem suave.",
    tags: [
      "#HTML5",
      "#CSS3",
      "#Flexbox",
      "#DesignTokens",
      "#Modular",
      "#Parallax",
    ],
    image: "/img/capas-de-projetos/manhattan-coffee-house.png",
    link: "https://lincolnberto.com.br/meus-projetos/manhattan-coffee-house",
    github: "https://github.com/eilincoln/coffee-house",
  },
  {
    title: "AlfaTech - Soluções em Hospedagem",
    status: "stable",
    description:
      "Landing page institucional e comercial desenvolvida com foco em conversão e semântica web. Conta com arquitetura CSS modular nativa, matriz comparativa de recursos técnicos com acessibilidade tabular rigorosa e layout responsivo estruturado via CSS Grid e Flexbox.",
    tags: [
      "#HTML5",
      "#CSS3",
      "#CSSGrid",
      "#Flexbox",
      "#A11y",
      "#DesignTokens",
      "#Modular",
    ],
    image: "/img/capas-de-projetos/alfatech.png",
    link: "https://lincolnberto.com.br/meus-projetos/alfatech",
    github: "https://github.com/eilincoln/alfatech",
  },
  {
    title: "Pousada Secreta - Hotelaria & Reservas",
    status: "stable",
    description:
      "Landing page institucional de alto padrão e catálogo de acomodações desenvolvidos com foco em experiência do usuário e semântica estrita. O projeto aplica arquitetura CSS modular nativa com Design Tokens (:root), navegação fixa com efeito Glassmorphism, layout fluido com CSS Grid auto-fit e otimizações de Core Web Vitals.",
    tags: [
      "#HTML5",
      "#CSS3",
      "#CSSGrid",
      "#Flexbox",
      "#DesignTokens",
      "#A11y",
      "#ModularCSS",
      "#Glassmorphism",
    ],
    image: "/img/capas-de-projetos/pousada-secreta.png",
    link: "https://lincolnberto.com.br/meus-projetos/pousada-secreta",
    github: "https://github.com/eilincoln/pousada-secreta",
  },
  {
    title: "Sistema ATS & Gestão de Vagas Corporativas",
    status: "stable",
    description:
      "Plataforma completa de recrutamento e seleção (Applicant Tracking System) desenvolvida para centralizar a triagem de talentos corporativos. Conta com portal público de vagas com filtros instantâneos, painel administrativo protegido com métricas em tempo real, pipeline de candidatos, exportação de relatórios em CSV e camada de segurança com PostgreSQL Row Level Security (RLS) e Signed URLs temporárias.",
    tags: [
      "#React",
      "#TypeScript",
      "#Vite",
      "#Supabase",
      "#PostgreSQL",
      "#RLS",
      "#CSSModules",
      "#ReactRouter",
    ],
    image: "/img/capas-de-projetos/sistema-ats-vagas.png",
    link: "https://carrantos-vagas.vercel.app/",
    github: "https://github.com/eilincoln/carrantos-vagas",
  },
];
