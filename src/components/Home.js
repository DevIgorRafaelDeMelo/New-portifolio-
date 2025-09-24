import React from "react";
import Curriculo from "../IMG/curriculo.pdf";
import Capturar1 from "../IMG/Capturar1.PNG";
import Capturar2 from "../IMG/Capturar2.PNG";
import Capturar3 from "../IMG/Capturar3.PNG";
import Capturar4 from "../IMG/Capturar4.PNG";
import Capturar5 from "../IMG/Capturar5.PNG";
import Capturar6 from "../IMG/Capturar6.PNG";
import Capturar7 from "../IMG/Capturar7.PNG";
import Capturar31 from "../IMG/Projeto3.1.PNG";
import Capturar21 from "../IMG/Projeto2.1.PNG";
import Capturar22 from "../IMG/Projeto2.2.PNG";
import Capturar23 from "../IMG/Projeto2.3.PNG";
import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  FaNodeJs,
  FaReact,
  FaJsSquare,
  FaGithub,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaDiscord,
  FaSun,
  FaMoon,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaRegCheckCircle,
  FaDesktop,
  FaTabletAlt,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiJson,
  SiPostman,
  SiSequelize,
  SiStyledcomponents,
  SiTypescript,
  SiJavascript,
  SiAxios,
  SiJsonwebtokens,
  SiExpress,
} from "react-icons/si";

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
  const [temaClaro, setTemaClaro] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [carrosselIndex, setCarrosselIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(9);
  const [repos, setRepos] = useState([]);
  const [repoLanguages, setRepoLanguages] = useState({});
  const [loading, setLoading] = useState(true);
  const projetos = [
    {
      id: 1,
      titulo: "Connect",
      descricao:
        "Sistema Integrado de Agendamento e Gestão Financeira. O Connect é uma solução completa desenvolvida para otimizar o agendamento e o controle financeiro de empresas, com uma interface intuitiva e recursos robustos que permitem a gestão de agenda por meio do cadastro de clientes, funcionários e horários, garantindo controle preciso de compromissos e disponibilidade; organização de equipes com gerenciamento de perfis de colaboradores e seus respectivos horários de trabalho; controle financeiro com módulo dedicado ao faturamento, pagamentos e fluxo de caixa, incluindo categorização de receitas e despesas; e dashboards inteligentes que oferecem visualização clara e dinâmica dos indicadores financeiros e operacionais, facilitando a tomada de decisões estratégicas.",
      imagens: [
        Capturar1,
        Capturar2,
        Capturar3,
        Capturar4,
        Capturar5,
        Capturar6,
        Capturar7,
      ],
      github: "https://github.com/DevIgorRafaelDeMelo/Connect",
      tecnologias: [
        {
          nome: "React",
          icone: <FaReact className="text-blue-400 text-3xl" />,
        },
        {
          nome: "Node.js",
          icone: <FaNodeJs className="text-green-500 text-3xl" />,
        },
        {
          nome: "MySql",
          icone: <SiMysql className="text-yellow-400 text-3xl" />,
        },
        {
          nome: "Tailwind CSS",
          icone: <SiTailwindcss className="text-blue-500 text-3xl" />,
        },
        {
          nome: "Postman",
          icone: <SiPostman className="text-orange-500 text-3xl" />,
        },
        {
          nome: "Axios",
          icone: <SiAxios className="text-blue-500 text-3xl" />,
        },
        {
          nome: "Jsonwebtokens",
          icone: <SiJsonwebtokens className="text-black-500 text-3xl" />,
        },
        {
          nome: "Express",
          icone: <SiExpress className="text-blue-700 text-3xl" />,
        },
      ],
      desktop: true,
      tablet: true,
      mobile: false,
    },
    {
      id: 2,
      titulo: "Delivery Gourmet",
      descricao:
        "Este projeto consiste na criação de uma aplicação com interface intuitiva, voltada exclusivamente para o front-end. A aplicação permitirá aos usuários registrar alimentos e suas respectivas informações, como descrição, preço e quantidade, diretamente na plataforma. Além disso, será responsável por realizar todos os cálculos necessários, como o total do pedido considerando valores individuais dos itens e possíveis taxas adicionais. Após a finalização do pedido, o sistema integrará uma funcionalidade que possibilita o envio das informações detalhadas do pedido diretamente pelo WhatsApp.",
      imagens: [Capturar31],
      url: "https://erp-3n7a.vercel.app/",
      github: "https://github.com/DevIgorRafaelDeMelo/Delivery-Gourmet",
      tecnologias: [
        {
          nome: "React",
          icone: <FaReact className="text-blue-400 text-3xl" />,
        },
        {
          nome: "Javascript",
          icone: <SiJavascript className="text-yellow-300 text-3xl" />,
        },
        {
          nome: "Tailwind CSS",
          icone: <SiTailwindcss className="text-blue-500 text-3xl" />,
        },
        {
          nome: "Html5",
          icone: <FaHtml5 className="text-orange-500 text-3xl" />,
        },
        {
          nome: "CSS3",
          icone: <FaCss3Alt className="text-blue-400 text-3xl" />,
        },
      ],
      desktop: true, // Ativa o ícone de Desktop
      tablet: false, // Ativa o ícone de Tablet
      mobile: false, // Ativa o ícone de Mobile
    },
    {
      id: 3,
      titulo: "Interfaçe de Restaurante",
      descricao:
        "Desenvolvi a interface de um restaurante, utilizando tecnologias de frontend, com foco em criar um design moderno, funcional e totalmente responsivo. Este projeto destaca minha capacidade de entregar interfaces adaptáveis a diferentes dispositivos, garantindo uma experiência visual agradável e eficiente para os usuários.",
      imagens: [Capturar21, Capturar22, Capturar23],
      url: "https://projeto-burguer.vercel.app/",
      github: "https://github.com/DevIgorRafaelDeMelo/Projeto-Burguer",
      tecnologias: [
        {
          nome: "Javascript",
          icone: <SiJavascript className="text-yellow-300 text-3xl" />,
        },
        {
          nome: "Html5",
          icone: <FaHtml5 className="text-orange-500 text-3xl" />,
        },
        {
          nome: "CSS3",
          icone: <FaCss3Alt className="text-blue-400 text-3xl" />,
        },
        {
          nome: "Bootstrap",
          icone: <SiBootstrap className="text-purple-500 text-3xl" />,
        },
        {
          nome: "Resposividade",
          icone: <FaRegCheckCircle className="text-green-500 text-3xl" />, // Ícone adicionado
        },
      ],
      desktop: true, // Ativa o ícone de Desktop
      tablet: true, // Ativa o ícone de Tablet
      mobile: true, // Ativa o ícone de Mobile
    },
  ];
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Curriculo;
    link.download = "curriculo.pdf";
    link.click();
  };
  const handleNext = () => {
    const imagens = projetos.find(
      (projeto) => projeto.id === expandedCard
    ).imagens;
    setCarrosselIndex((prev) => (prev + 1) % imagens.length);
  };
  const handlePrevious = () => {
    const imagens = projetos.find(
      (projeto) => projeto.id === expandedCard
    ).imagens;
    setCarrosselIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  };
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/DevIgorRafaelDeMelo/repos`
        );
        const repos = await response.json();
        setRepos(repos);
        const languagesCount = {};
        repos.forEach((repo) => {
          const language = repo.language;
          if (language) {
            languagesCount[language] = (languagesCount[language] || 0) + 1;
          }
        });
        setRepoLanguages(languagesCount);
      } catch (error) {
        console.error("Erro ao buscar linguagens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <>
      <div
        className={`min-h-screen px-6 py-8 transition-colors duration-500 ${
          temaClaro
            ? "bg-blue-50 text-gray-800"
            : "bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white"
        }`}
      >
        <header className="flex justify-between items-center max-w-5xl mx-auto mb-12">
          <h1
            className={`text-4xl font-bold tracking-tight transition-colors text-blue-700  `}
          >
            Portfólio
          </h1>

          {/* Botão de alternância de tema */}
          <button
            onClick={() => setTemaClaro((prev) => !prev)}
            className={`w-10 h-10 flex items-center justify-center rounded-full shadow-md transition duration-300 ${
              temaClaro
                ? "bg-white text-blue-700 border border-blue-300 hover:bg-blue-100"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
            aria-label="Alternar tema"
          >
            {temaClaro ? (
              <FaSun className="text-yellow-500 text-xl" />
            ) : (
              <FaMoon className="text-white text-xl" />
            )}
          </button>
        </header>
        {/* Seção principal */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12">
          <h1
            className={`text-5xl font-extrabold tracking-tight mb-6 text-balance text-blue-700 `}
          >
            Bem-vindo, sou Igor Rafael de Melo
          </h1>

          <p
            className={`text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl ${
              temaClaro ? "text-gray-700" : "text-blue-200"
            }`}
          >
            Estudante de Análise de Sistemas |{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Foco em Desenvolvimento Web Fullstack
            </span>
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <button
              onClick={handleDownload}
              className={`px-8 py-3 rounded-full font-medium transition duration-300 ${
                temaClaro
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Baixar Currículo
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("projetos");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-8 py-3 rounded-full font-medium transition duration-300 ${
                temaClaro
                  ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
                  : "bg-gray-600 text-white hover:bg-gray-500"
              }`}
            >
              Ver Projetos
            </button>
          </div>

          <div className="w-full mt-20 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* React */}
              <div
                className={`text-center p-6 rounded-xl transition duration-300 ${
                  temaClaro
                    ? "bg-white shadow-md hover:shadow-lg"
                    : "bg-gray-800 shadow-md hover:shadow-lg"
                }`}
              >
                <FaReact
                  className={`text-6xl mx-auto mb-2 ${
                    temaClaro ? "text-blue-700" : "text-blue-400"
                  }`}
                />
                <span className="text-xl font-semibold">React</span>
                <p className="mt-2 text-sm">Criação de Interfaces Dinâmicas</p>
              </div>

              {/* Node.js */}
              <div
                className={`text-center p-6 rounded-xl transition duration-300 ${
                  temaClaro
                    ? "bg-white shadow-md hover:shadow-lg"
                    : "bg-gray-800 shadow-md hover:shadow-lg"
                }`}
              >
                <FaNodeJs
                  className={`text-6xl mx-auto mb-2 ${
                    temaClaro ? "text-green-700" : "text-green-500"
                  }`}
                />
                <span className="text-xl font-semibold">Node.js</span>
                <p className="mt-2 text-sm">Desenvolvimento Backend</p>
              </div>

              {/* MySQL */}
              <div
                className={`text-center p-6 rounded-xl transition duration-300 ${
                  temaClaro
                    ? "bg-white shadow-md hover:shadow-lg"
                    : "bg-gray-800 shadow-md hover:shadow-lg"
                }`}
              >
                <SiMysql
                  className={`text-6xl mx-auto mb-2 ${
                    temaClaro ? "text-yellow-600" : "text-yellow-200"
                  }`}
                />
                <span className="text-xl font-semibold">MySQL</span>
                <p className="mt-2 text-sm">Banco de Dados Relacional</p>
              </div>
            </div>
          </div>
        </section>
        {/* Ícones das habilidades secundárias no lado direito */}
        <section
          className={`w-48 h-96 overflow-hidden absolute right-8 top-1/2 transform -translate-y-1/2 rounded-xl ${
            temaClaro
              ? "bg-gray-300 text-white py-4"
              : "bg-transparent text-gray-100"
          }`}
        >
          <div className="flex flex-col gap-4 scroll-loop">
            {/* 🔁 Conteúdo duplicado para loop contínuo */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="text-center">
                  <FaJsSquare
                    className={
                      temaClaro
                        ? "text-yellow-700 text-3xl mx-auto mb-1"
                        : "text-yellow-400 text-3xl mx-auto mb-1"
                    }
                  />
                  <span
                    className={
                      temaClaro
                        ? "text-sm text-yellow-600"
                        : "text-sm text-yellow-300"
                    }
                  >
                    JavaScript
                  </span>
                </div>
                <div className="text-center">
                  <SiTypescript
                    className={
                      temaClaro
                        ? "text-blue-800 text-3xl mx-auto mb-1"
                        : "text-blue-600 text-3xl mx-auto mb-1"
                    }
                  />
                  <span
                    className={
                      temaClaro
                        ? "text-sm text-blue-700"
                        : "text-sm text-blue-300"
                    }
                  >
                    TypeScript
                  </span>
                </div>
                <div className="text-center">
                  <SiTailwindcss
                    className={
                      temaClaro
                        ? "text-blue-600 text-3xl mx-auto mb-1"
                        : "text-blue-500 text-3xl mx-auto mb-1"
                    }
                  />
                  <span
                    className={
                      temaClaro
                        ? "text-sm text-blue-400"
                        : "text-sm text-blue-200"
                    }
                  >
                    Tailwind CSS
                  </span>
                </div>
                <div className="text-center">
                  <SiBootstrap
                    className={
                      temaClaro
                        ? "text-purple-600 text-3xl mx-auto mb-1"
                        : "text-purple-500 text-3xl mx-auto mb-1"
                    }
                  />
                  <span
                    className={
                      temaClaro
                        ? "text-sm text-purple-400"
                        : "text-sm text-purple-200"
                    }
                  >
                    Bootstrap
                  </span>
                </div>
                <div className="text-center">
                  <SiJson
                    className={
                      temaClaro
                        ? "text-yellow-700 text-3xl mx-auto mb-1"
                        : "text-yellow-500 text-3xl mx-auto mb-1"
                    }
                  />
                  <span
                    className={
                      temaClaro
                        ? "text-sm text-yellow-600"
                        : "text-sm text-yellow-200"
                    }
                  >
                    JSON
                  </span>
                </div>
                <div className="text-center">
                  <SiPostman
                    className={
                      temaClaro
                        ? "text-orange-600 text-3xl mx-auto mb-1"
                        : "text-orange-400 text-3xl mx-auto mb-1"
                    }
                  />
                  <span
                    className={
                      temaClaro
                        ? "text-sm text-orange-500"
                        : "text-sm text-orange-200"
                    }
                  >
                    Postman
                  </span>
                </div>
                <div className="text-center">
                  <SiSequelize
                    className={
                      temaClaro
                        ? "text-blue-800 text-3xl mx-auto mb-1"
                        : "text-blue-700 text-3xl mx-auto mb-1"
                    }
                  />
                  <span
                    className={
                      temaClaro
                        ? "text-sm text-blue-600"
                        : "text-sm text-blue-200"
                    }
                  >
                    Sequelize
                  </span>
                </div>
                <div className="text-center">
                  <SiStyledcomponents
                    className={
                      temaClaro
                        ? "text-pink-700 text-3xl mx-auto mb-1"
                        : "text-pink-500 text-3xl mx-auto mb-1"
                    }
                  />
                  <span
                    className={
                      temaClaro
                        ? "text-sm text-pink-600"
                        : "text-sm text-pink-200"
                    }
                  >
                    Styled Components
                  </span>
                </div>
                <div className="text-center">
                  <FaGithub
                    className={
                      temaClaro
                        ? "text-gray-700 text-3xl mx-auto mb-1"
                        : "text-gray-400 text-3xl mx-auto mb-1"
                    }
                  />
                  <span
                    className={
                      temaClaro
                        ? "text-sm text-gray-600"
                        : "text-sm text-gray-300"
                    }
                  >
                    GitHub
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
        {/* seção sobre */}
        <section
          id="sobre"
          className={`min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 transition-colors duration-500 ${
            temaClaro ? "bg-white text-gray-800" : ""
          }`}
        >
          <div className="max-w-5xl w-full">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight text-blue-700 `}
            >
              Sobre Mim
            </h2>

            <p
              className={`text-lg md:text-xl leading-relaxed px-6 py-8 rounded-xl shadow-lg transition duration-300 ${
                temaClaro
                  ? "bg-blue-50 text-gray-700"
                  : "bg-gray-800 text-blue-200"
              }`}
            >
              Olá! Eu sou{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                Igor Rafael de Melo
              </span>
              , estudante de{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                Análise de Sistemas
              </span>{" "}
              com uma paixão incomparável por{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                tecnologia
              </span>{" "}
              e desenvolvimento web full stack. Transformar ideias em soluções
              digitais inovadoras e impactantes é o que me move.
              <br />
              <br />
              Minha jornada como desenvolvedor é marcada por uma sólida base em
              ferramentas e tecnologias essenciais. Com{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                React
              </span>
              , crio interfaces dinâmicas e modernas que oferecem experiências
              intuitivas para os usuários. No backend, domino{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                Node.js
              </span>
              , desenvolvendo sistemas robustos e eficientes. Tenho grande
              experiência em gestão de{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                bancos de dados MySQL
              </span>
              , além de estilizar projetos com precisão usando{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                Tailwind CSS
              </span>{" "}
              e{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                Bootstrap
              </span>
              . Minhas competências incluem manipulação de{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                JSON
              </span>
              , automação de processos com{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                Postman
              </span>
              , e o uso de{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                Sequelize
              </span>{" "}
              para manipular dados. Além disso, minha prática com{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-300">
                GitHub
              </span>{" "}
              me permite colaborar e gerenciar versões de projetos com fluidez.
              <br />
              <br />
              Além do desenvolvimento, atuo como suporte em um ERP, onde
              contribuo para a resolução rápida de problemas e aprimoramento
              contínuo de sistemas. Essa experiência me proporcionou habilidades
              indispensáveis como análise crítica, atendimento eficaz às
              demandas e comunicação assertiva.
              <br />
              <br />
              Estou sempre em busca de aprendizado e evolução, com o objetivo de
              consolidar minha carreira como desenvolvedor full stack. Meu
              propósito é criar soluções tecnológicas que impulsionem negócios e
              tornem o mundo digital mais acessível e eficiente.
            </p>
          </div>
        </section>
        {/* seção projetos */}
        <section
          id="projetos"
          className={`min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 transition-colors duration-500 ${
            temaClaro ? "bg-gray-100 text-gray-800" : " "
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 tracking-tight text-blue-700  `}
          >
            Meus Projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
            {projetos.map((projeto) => (
              <div
                key={projeto.id}
                className={`group rounded-xl overflow-hidden shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer flex flex-col ${
                  temaClaro
                    ? "bg-white text-gray-800"
                    : "bg-gray-900 text-gray-100"
                }`}
                onClick={() => setExpandedCard(projeto.id)}
              >
                {/* Imagem com efeito de zoom */}
                <div className="overflow-hidden aspect-video">
                  <img
                    src={projeto.imagens[0]}
                    alt={`Imagem do ${projeto.titulo}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      temaClaro ? "text-blue-700" : "text-blue-400"
                    }`}
                  >
                    {projeto.titulo}
                  </h3>

                  <p className={`text-sm mb-4 leading-relaxed`}>
                    {projeto.descricao.slice(0, 160)}...
                  </p>

                  {/* Tecnologias */}
                  <div className="w-full flex flex-wrap justify-center gap-2 mb-4">
                    {projeto.tecnologias.map((tecnologia, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          temaClaro ? " text-gray-700" : "  text-gray-200"
                        }`}
                      >
                        {tecnologia.icone}
                        {tecnologia.nome}
                      </span>
                    ))}
                  </div>

                  {/* Dispositivos */}
                  <div className="flex justify-center gap-3 text-blue-500 dark:text-blue-300 mb-4">
                    {projeto.desktop && <FaDesktop title="Desktop" />}
                    {projeto.tablet && <FaTabletAlt title="Tablet" />}
                    {projeto.mobile && <FaMobileAlt title="Mobile" />}
                  </div>

                  {/* Botões */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <a
                      href={projeto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium transition duration-300 ${
                        temaClaro
                          ? "bg-blue-700 text-white hover:bg-blue-800"
                          : "bg-[#42035FFF] text-white hover:bg-[#9B07C0FF]"
                      }`}
                    >
                      <FaGithub className="text-lg" />
                      GitHub
                    </a>

                    {projeto.url && (
                      <a
                        href={projeto.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium transition duration-300 ${
                          temaClaro
                            ? "bg-green-700 text-white hover:bg-green-800"
                            : "bg-blue-700 text-white hover:bg-blue-500"
                        }`}
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        .{/* Seção Github  */}
        <section
          id="languages-chart"
          className={`min-h-[50vh] flex flex-col justify-center items-center text-center px-6 py-12 transition-colors duration-500 ${
            temaClaro ? "  text-gray-800" : " text-gray-200"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-semibold mb-6 tracking-tight ${
              temaClaro ? "text-gray-800" : "text-gray-100"
            }`}
          >
            Linguagens Mais Utilizadas
          </h2>

          {loading ? (
            <p className={`${temaClaro ? "text-gray-600" : "text-gray-400"}`}>
              Carregando dados...
            </p>
          ) : Object.keys(repoLanguages).length === 0 ? (
            <p className={`${temaClaro ? "text-gray-600" : "text-gray-400"}`}>
              Nenhuma linguagem encontrada.
            </p>
          ) : (
            <div
              className={`p-6 rounded-lg border transition duration-300 w-full max-w-lg ${
                temaClaro
                  ? "bg-gray-50 border-gray-200"
                  : "bg-gray-800 border-gray-700"
              }`}
            >
              <Doughnut
                data={{
                  labels: Object.keys(repoLanguages),
                  datasets: [
                    {
                      data: Object.values(repoLanguages),
                      backgroundColor: [
                        "#0480f3ff", // fundo claro
                        "#0026ffff", // areia quente
                        "#00eeffff", // verde oliva
                        "#6C7A89", // azul acinzentado
                        "#3A3A3A", // cinza escuro
                        "#1E1E24", // grafite profundo
                      ],
                      hoverBackgroundColor: [
                        "#EAE6E1",
                        "#CBB89E",
                        "#8FA77A",
                        "#5A6A78",
                        "#2E2E2E",
                        "#121216",
                      ],
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "bottom",
                      labels: {
                        font: {
                          size: 14,
                          weight: "normal",
                        },
                        boxWidth: 14,
                        padding: 10,
                        color: temaClaro ? "#4B5563" : "#D1D5DB",
                      },
                    },
                    tooltip: {
                      backgroundColor: temaClaro ? "#F9FAFB" : "#1F2937",
                      titleFont: { size: 12, weight: "bold" },
                      bodyFont: { size: 12 },
                      titleColor: temaClaro ? "#111827" : "#F9FAFB",
                      bodyColor: temaClaro ? "#374151" : "#E5E7EB",
                    },
                  },
                }}
                style={{ height: "250px", width: "250px" }}
              />
            </div>
          )}
        </section>
        {/* Seção Github commits */}
        <section
          id="github"
          className={`min-h-screen w-full flex flex-col justify-center items-center text-center px-6 py-16 transition-colors duration-500 ${
            temaClaro ? "bg-white text-gray-800" : " "
          }`}
        >
          <h2
            className={`text-4xl font-bold mb-10 tracking-tight text-blue-700  `}
          >
            Outros projetos GitHub
          </h2>

          {loading ? (
            <p className={`${temaClaro ? "text-gray-600" : "text-blue-200"}`}>
              Carregando repositórios...
            </p>
          ) : repos.length === 0 ? (
            <p className={`${temaClaro ? "text-gray-600" : "text-blue-200"}`}>
              Nenhum repositório encontrado.
            </p>
          ) : (
            <div className="flex flex-col items-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
                {repos.slice(0, visibleCount).map((repo) => (
                  <div
                    key={repo.id}
                    className={`rounded-xl shadow-md p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                      temaClaro
                        ? "bg-gray-100 text-gray-800"
                        : "bg-gray-800 text-blue-200"
                    }`}
                  >
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        temaClaro ? "text-blue-700" : "text-blue-400"
                      }`}
                    >
                      {repo.name}
                    </h3>

                    <p className="text-sm mb-4 leading-relaxed">
                      {repo.description
                        ? repo.description.slice(0, 100)
                        : "Sem descrição disponível."}
                    </p>

                    <div className="text-xs mb-4 space-y-1">
                      <p>
                        Última atualização:{" "}
                        <span className="font-semibold">
                          {new Date(repo.updated_at).toLocaleDateString(
                            "pt-BR"
                          )}
                        </span>
                      </p>
                      <p className="flex items-center justify-center">
                        Linguagem:{" "}
                        <span className="font-semibold flex items-center ml-2">
                          {repo.language === "JavaScript" && (
                            <FaJsSquare className="text-yellow-400 text-sm mr-1" />
                          )}
                          {repo.language === "React" && (
                            <FaReact className="text-cyan-400 text-sm mr-1" />
                          )}
                          {repo.language === "Node.js" && (
                            <FaNodeJs className="text-green-500 text-sm mr-1" />
                          )}
                          {repo.language === "Bootstrap" && (
                            <SiBootstrap className="text-purple-400 text-sm mr-1" />
                          )}
                          {repo.language === "Tailwind CSS" && (
                            <SiTailwindcss className="text-cyan-300 text-sm mr-1" />
                          )}
                          {repo.language === "TypeScript" && (
                            <SiTypescript className="text-blue-400 text-sm mr-1" />
                          )}
                          {repo.language || "Não especificada"}
                        </span>
                      </p>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block mt-2 px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                        temaClaro
                          ? "bg-blue-700 text-white hover:bg-blue-800"
                          : "bg-cyan-400 text-black hover:bg-blue-500"
                      }`}
                    >
                      Acessar Repositório
                    </a>
                  </div>
                ))}
              </div>

              {visibleCount < repos.length && (
                <button
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className={`mt-8 px-6 py-2 rounded-full text-sm font-medium transition duration-300 ${
                    temaClaro
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "bg-cyan-400 text-black hover:bg-blue-500"
                  }`}
                >
                  Mostrar mais repositórios
                </button>
              )}
            </div>
          )}
        </section>
        {/* Footer com Tema Dinâmico */}
        <footer
          className={`pt-20 text-gray-300 py-8 ${
            temaClaro ? "bg-gray-200 text-gray-900" : " "
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6">
            {/* Seção de texto */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3
                className={`text-lg font-bold ${
                  temaClaro ? "text-blue-700" : "text-blue-400"
                }`}
              >
                Igor Rafael de Melo
              </h3>
              <p
                className={`${
                  temaClaro ? "text-gray-900" : "text-gray-200"
                } text-sm`}
              >
                Desenvolvedor Fullstack | Foco em Desenvolvimento Web
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/DevIgorRafaelDeMelo"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  temaClaro
                    ? "text-gray-900 hover:text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/igor-rafael-de-melo-3b9a69240/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  temaClaro
                    ? "text-blue-700 hover:text-blue-800"
                    : "text-blue-500 hover:text-blue-400"
                }`}
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:devigorafael@example.com"
                className={`transition-colors ${
                  temaClaro
                    ? "text-cyan-700 hover:text-cyan-800"
                    : "text-cyan-400 hover:text-cyan-300"
                }`}
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <a
                href="https://w.app/h2msq4"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  temaClaro
                    ? "text-green-700 hover:text-green-800"
                    : "text-green-400 hover:text-green-300"
                }`}
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="https://discordapp.com/users/836726896229220382"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  temaClaro
                    ? "text-purple-700 hover:text-purple-800"
                    : "text-purple-400 hover:text-purple-300"
                }`}
              >
                <FaDiscord className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Direitos autorais */}
          <div
            className={`text-center mt-4 text-sm ${
              temaClaro ? "text-gray-700" : "text-gray-400"
            }`}
          >
            © {new Date().getFullYear()} Igor Rafael de Melo. Todos os direitos
            reservados.
          </div>
        </footer>
        {expandedCard &&
          (() => {
            const projetoSelecionado = projetos.find(
              (projeto) => projeto.id === expandedCard
            );

            return (
              <div
                role="dialog"
                aria-modal="true"
                className={`fixed inset-0 flex justify-center items-center p-8 z-50 ${
                  temaClaro
                    ? "bg-gray-100 bg-opacity-75"
                    : "bg-black bg-opacity-50"
                }`}
              >
                <div
                  className={`relative rounded-lg shadow-lg p-6 max-w-3xl w-full max-h-screen overflow-y-auto animate-fadeIn ${
                    temaClaro
                      ? "bg-white text-gray-800"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {/* Botão de Fechar */}
                  <button
                    onClick={() => setExpandedCard(null)}
                    className={`absolute top-4 right-4 z-20 font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center shadow-md transition duration-300 ${
                      temaClaro
                        ? "text-gray-800 bg-gray-200 hover:bg-gray-300"
                        : "text-white bg-gray-600 hover:bg-gray-500"
                    }`}
                    title="Fechar"
                    aria-label="Fechar modal"
                  >
                    <FaTimes />
                  </button>

                  {/* Carrossel */}
                  <div className="mb-6 relative overflow-hidden rounded-lg shadow-lg">
                    <button
                      onClick={handlePrevious}
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-md transition duration-300 ease-in-out ${
                        temaClaro
                          ? "bg-white text-gray-700 hover:bg-gray-200"
                          : "bg-gray-800 text-white hover:bg-gray-700"
                      }`}
                      aria-label="Imagem anterior"
                    >
                      <FaChevronLeft className="text-2xl" />
                    </button>

                    <img
                      src={projetoSelecionado.imagens[carrosselIndex]}
                      alt="Imagem do carrossel"
                      className="w-full h-96 object-cover rounded-lg transition duration-500 ease-in-out"
                    />

                    <button
                      onClick={handleNext}
                      className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-md transition duration-300 ease-in-out ${
                        temaClaro
                          ? "bg-white text-gray-700 hover:bg-gray-200"
                          : "bg-gray-800 text-white hover:bg-gray-700"
                      }`}
                      aria-label="Próxima imagem"
                    >
                      <FaChevronRight className="text-2xl" />
                    </button>
                  </div>

                  {/* Título e Descrição */}
                  <h3
                    className={`text-3xl font-bold mb-4 ${
                      temaClaro ? "text-blue-700" : "text-blue-400"
                    }`}
                  >
                    {projetoSelecionado.titulo}
                  </h3>
                  <p
                    className={`mb-4 ${
                      temaClaro ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {projetoSelecionado.descricao}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    {projetoSelecionado.tecnologias.map((tecnologia, index) => (
                      <div
                        key={index}
                        className={`flex flex-col items-center text-center ${
                          temaClaro ? "text-gray-700" : "text-gray-300"
                        }`}
                      >
                        {tecnologia.icone}
                        <span
                          className={`text-sm mt-2 ${
                            temaClaro ? "text-gray-600" : "text-gray-300"
                          }`}
                        >
                          {tecnologia.nome}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Botões externos */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href={projetoSelecionado.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-6 py-3 rounded transition-colors ${
                        temaClaro
                          ? "bg-blue-700 text-white hover:bg-blue-800"
                          : "bg-[#42035FFF] text-white hover:bg-[#9B07C0FF]"
                      }`}
                    >
                      <FaGithub className="mr-2 text-xl" />
                      Ver no GitHub
                    </a>

                    {projetoSelecionado.url?.trim() && (
                      <a
                        href={projetoSelecionado.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-6 py-3 rounded transition-colors ${
                          temaClaro
                            ? "bg-blue-700 text-white hover:bg-blue-800"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        <FaExternalLinkAlt className="mr-2 text-xl" />
                        Acessar o Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
      </div>
    </>
  );
}

export default Home;
