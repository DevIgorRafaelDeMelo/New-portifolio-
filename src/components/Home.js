import React from "react";
import Curriculo from "../IMG/curriculo.pdf";
import Capturar from "../IMG/Capturar.PNG";
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
      titulo: "System 64",
      descricao:
        "Desenvolvi um sistema web completo com funcionalidades típicas de ERP, como controle de estoque, cadastro de clientes e produtos, além da geração de relatórios. A aplicação conta com uma tela de login responsiva e é construída com React.js no frontend, Node.js no backend e MySQL como banco de dados. Este projeto demonstra habilidades no desenvolvimento web, oferecendo soluções modernas e eficientes",
      imagens: [
        Capturar,
      ],
      url: "https://erp1-one.vercel.app/",
      github: "https://github.com/DevIgorRafaelDeMelo/ERP",
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
          nome: "Sequelize",
          icone: <SiSequelize className="text-red-500 text-3xl" />,
        },
      ],
      desktop: true, // Ativa o ícone de Desktop
      tablet: true, // Ativa o ícone de Tablet
      mobile: false, // Ativa o ícone de Mobile
    }, {
      id: 2,
      titulo: "Delivery Gourmet",
      descricao:
        "Este projeto consiste na criação de uma aplicação com interface intuitiva, voltada exclusivamente para o front-end. A aplicação permitirá aos usuários registrar alimentos e suas respectivas informações, como descrição, preço e quantidade, diretamente na plataforma. Além disso, será responsável por realizar todos os cálculos necessários, como o total do pedido considerando valores individuais dos itens e possíveis taxas adicionais. Após a finalização do pedido, o sistema integrará uma funcionalidade que possibilita o envio das informações detalhadas do pedido diretamente pelo WhatsApp.",
      imagens: [Capturar31],
      url: "https://erp-3n7a.vercel.app/",
      github:
        "https://github.com/DevIgorRafaelDeMelo/Delivery-Gourmet",
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
      {/* Botão de alternância de tema */}
      <div
        className={
          temaClaro
            ? "bg-gray-100 text-gray-800"
            : "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-200 text-gray-100"
        }
      >
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold"></h1>
          <div
            className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              temaClaro ? "bg-blue-400" : "bg-gray-600"
            }`}
            onClick={() => setTemaClaro((prev) => !prev)}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                temaClaro ? "translate-x-8" : "translate-x-0"
              }`}
            >
              {temaClaro ? (
                <FaSun className="text-yellow-400 m-1" />
              ) : (
                <FaMoon className="text-gray-800 m-1" />
              )}
            </div>
          </div>
        </header>
        {/* Seção principal */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center">
          <h1
            className={`text-5xl font-extrabold mb-6 ${
              temaClaro ? "text-blue-700" : "text-blue-500"
            }`}
          >
            Bem-vindo, sou Igor Rafael de Melo
          </h1>
          <p className="text-2xl mb-8">
            Estudante de Análise de Sistemas |{" "}
            <span className="font-semibold">
              Foco em Desenvolvimento Web Fullstack
            </span>
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <button
              onClick={handleDownload}
              className={`px-8 py-3 rounded ${
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
              className={`px-8 py-3 rounded ${
                temaClaro
                  ? "bg-gray-400 text-black hover:bg-gray-500"
                  : "bg-gray-500 text-white hover:bg-gray-600"
              }`}
            >
              Ver Projetos
            </button>
          </div>
          <div className="w-full mt-20 max-w-4xl">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="text-center">
                <FaReact
                  className={
                    temaClaro
                      ? "text-blue-700 text-6xl mx-auto mb-2"
                      : "text-blue-400 text-6xl mx-auto mb-2"
                  }
                />
                <span className="text-xl font-semibold">React</span>
                <p className="mt-2">Criação de Interfaces Dinâmicas</p>
              </div>
              <div className="text-center">
                <FaNodeJs
                  className={
                    temaClaro
                      ? "text-green-700 text-6xl mx-auto mb-2"
                      : "text-green-500 text-6xl mx-auto mb-2"
                  }
                />
                <span className="text-xl font-semibold">Node.js</span>
                <p className="mt-2">Desenvolvimento Backend</p>
              </div>
              <div className="text-center">
                <SiMysql
                  className={
                    temaClaro
                      ? "text-yellow-600 text-6xl mx-auto mb-2"
                      : "text-yellow-200 text-6xl mx-auto mb-2"
                  }
                />
                <span className="text-xl font-semibold">MySQL</span>
                <p className="mt-2">Banco de Dados Relacional</p>
              </div>
            </div>
          </div>
        </section>
        {/* Ícones das habilidades secundárias no lado direito */}
        <section
          className={`flex flex-col justify-center items-center gap-4 w-48 absolute right-8 top-1/2 transform -translate-y-1/2 ${
            temaClaro
              ? "bg-gray-300 text-white py-20 rounded-xl"
              : "bg-transparent text-gray-100"
          }`}
        >
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
                temaClaro ? "text-sm text-blue-700" : "text-sm text-blue-300"
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
                temaClaro ? "text-sm text-blue-400" : "text-sm text-blue-200"
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
                temaClaro ? "text-sm text-blue-600" : "text-sm text-blue-200"
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
                temaClaro ? "text-sm text-pink-600" : "text-sm text-pink-200"
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
                temaClaro ? "text-sm text-gray-600" : "text-sm text-gray-300"
              }
            >
              GitHub
            </span>
          </div>
        </section>
        {/* seção sobre */}
        <section
          id="sobre"
          className={`min-h-screen flex flex-col justify-center items-center text-center py-16 px-10 ${
            temaClaro ? "bg-white text-black" : ""
          }`}
        >
          <div className="max-w-5xl">
            <h2
              className={`text-4xl font-bold mb-6 ${
                temaClaro ? "text-gray-900" : "text-gray-100"
              }`}
            >
              Sobre Mim
            </h2>
            <p className="text-lg text-gray-300 px-8 py-6 bg-gray-800 rounded-lg shadow-lg leading-relaxed">
              Olá! Eu sou{" "}
              <span className="text-gray-100 font-semibold">
                Igor Rafael de Melo
              </span>
              , estudante de{" "}
              <span className="text-gray-100 font-semibold">
                Análise de Sistemas
              </span>{" "}
              com uma paixão incomparável por{" "}
              <span className="text-gray-100 font-semibold">tecnologia</span> e
              desenvolvimento web full stack. Transformar ideias em soluções
              digitais inovadoras e impactantes é o que me move.
              <br />
              <br />
              Minha jornada como desenvolvedor é marcada por uma sólida base em
              ferramentas e tecnologias essenciais. Com{" "}
              <span className="text-gray-100 font-semibold">React</span>, crio
              interfaces dinâmicas e modernas que oferecem experiências
              intuitivas para os usuários. No backend, domino{" "}
              <span className="text-gray-100 font-semibold">Node.js</span>,
              desenvolvendo sistemas robustos e eficientes. Tenho grande
              experiência em gestão de{" "}
              <span className="text-gray-100 font-semibold">
                bancos de dados MySQL
              </span>
              , além de estilizar projetos com precisão usando{" "}
              <span className="text-gray-100 font-semibold">Tailwind CSS</span>{" "}
              e <span className="text-gray-100 font-semibold">Bootstrap</span>.
              Minhas competências incluem manipulação de{" "}
              <span className="text-gray-100 font-semibold">JSON</span>,
              automação de processos com{" "}
              <span className="text-gray-100 font-semibold">Postman</span>, e o
              uso de{" "}
              <span className="text-gray-100 font-semibold">Sequelize</span> e{" "}
              para manipular dados. Além disso, minha prática com{" "}
              <span className="text-gray-100 font-semibold">GitHub</span> me
              permite colaborar e gerenciar versões de projetos com fluidez.
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
          className={`min-h-screen flex flex-col justify-center items-center text-center py-16 px-10 ${
            temaClaro ? "bg-gray-100 text-gray-800" : ""
          }`}
        >
          <h2
            className={`text-4xl font-bold mb-8 ${
              temaClaro ? "text-gray-800" : "text-gray-100"
            }`}
          >
            Meus Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto) => (
              <div
                key={projeto.id}
                className={`rounded-lg shadow-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-xl cursor-pointer flex flex-col items-center ${
                  temaClaro
                    ? "bg-white text-gray-800"
                    : "bg-gray-800 text-gray-300"
                }`}
                onClick={() => setExpandedCard(projeto.id)}
              >
                {/* Imagem */}
                <div className="mb-4">
                  <img
                    src={projeto.imagens[0]}
                    alt={`Imagem do ${projeto.titulo}`}
                    className="w-full h-72 object-cover rounded-md"
                  />
                </div>

                {/* Título */}
                <h3
                  className={`text-2xl font-bold mb-4 text-center ${
                    temaClaro ? "text-blue-700" : "text-blue-400"
                  }`}
                >
                  {projeto.titulo}
                </h3>

                {/* Descrição */}
                <p
                  className={`mb-4 text-center ${
                    temaClaro ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {projeto.descricao.slice(0, 200)}...
                </p>

                {/* Tecnologias Utilizadas */}
                <div className="flex justify-center flex-wrap gap-3 mb-4">
                  {projeto.tecnologias.map((tecnologia, index) => (
                    <div
                      key={index}
                      className={`text-center flex items-center gap-2 rounded-md px-2 py-1 ${
                        temaClaro
                          ? "bg-gray-200 text-gray-700"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {tecnologia.icone} {/* Ícone da tecnologia */}
                      <span className="text-sm">{tecnologia.nome}</span>
                    </div>
                  ))}
                </div>

                {/* Dispositivos Responsivos */}
                <div className="flex justify-center gap-4 mb-4">
                  {projeto.desktop && (
                    <FaDesktop className=" text-2xl" title="Desktop" />
                  )}
                  {projeto.tablet && (
                    <FaTabletAlt className="  text-2xl" title="Tablet" />
                  )}
                  {projeto.mobile && (
                    <FaMobileAlt className="  text-2xl" title="Mobile" />
                  )}
                </div>

                {/* Botão para GitHub */}
                <a
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center text-center w-50 px-4 py-2 rounded transition-colors ${
                    temaClaro
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "bg-[#42035FFF] text-white hover:bg-[#9B07C0FF]"
                  }`}
                >
                  <FaGithub className="mr-2 text-xl" />
                  Ver no GitHub
                </a>

                {/* Botão para acessar o site do projeto */}
                <a
                  href={projeto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center text-center w-50 px-4 py-2 rounded transition-colors mt-2 ${
                    temaClaro
                      ? "bg-green-700 text-white hover:bg-blue-800"
                      : "bg-blue-700 text-white hover:bg-blue-400"
                  }`}
                >
                  <FaExternalLinkAlt className="mr-2 text-xl" />
                  Acessar o Site
                </a>
              </div>
            ))}
          </div>
          {expandedCard && (
            <div
              className={`fixed inset-0 flex justify-center items-center p-8 ${
                temaClaro
                  ? "bg-gray-100 bg-opacity-75"
                  : "bg-black bg-opacity-50"
              }`}
            >
              {/* Modal com fundo semi-transparente */}
              <div
                className={`relative rounded-lg shadow-lg p-6 max-w-3xl w-full ${
                  temaClaro
                    ? "bg-white text-gray-800"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {/* Botão de Fechar */}
                <button
                  onClick={() => setExpandedCard(null)}
                  className={`absolute top-0 -right-16 font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center shadow-md ${
                    temaClaro
                      ? "text-gray-800 bg-gray-300 hover:bg-gray-400"
                      : "text-gray-700 bg-white hover:bg-gray-200"
                  }`}
                  title="Fechar"
                >
                  <FaTimes />
                </button>

                {/* Carrossel */}
                <div className="mb-4 relative">
                  {/* Botão para imagem anterior */}
                  <button
                    onClick={handlePrevious}
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-full flex items-center justify-center ${
                      temaClaro
                        ? "bg-gray-300 text-gray-700 hover:bg-gray-400"
                        : "bg-gray-900 text-white"
                    }`}
                  >
                    <FaChevronLeft className="text-xl" />
                  </button>

                  {/* Imagem do carrossel */}
                  <img
                    src={
                      projetos.find((projeto) => projeto.id === expandedCard)
                        .imagens[carrosselIndex]
                    }
                    alt="Imagem do carrossel"
                    className="w-full h-94 object-cover rounded-md"
                  />

                  {/* Botão para próxima imagem */}
                  <button
                    onClick={handleNext}
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-full flex items-center justify-center ${
                      temaClaro
                        ? "bg-gray-300 text-gray-700 hover:bg-gray-400"
                        : "bg-gray-900 text-white"
                    }`}
                  >
                    <FaChevronRight className="text-xl" />
                  </button>
                </div>

                {/* Título e Descrição */}
                <h3
                  className={`text-3xl font-bold mb-4 ${
                    temaClaro ? "text-blue-700" : "text-blue-400"
                  }`}
                >
                  {
                    projetos.find((projeto) => projeto.id === expandedCard)
                      .titulo
                  }
                </h3>
                <p
                  className={`mb-4 ${
                    temaClaro ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {
                    projetos.find((projeto) => projeto.id === expandedCard)
                      .descricao
                  }
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  {projetos
                    .find((projeto) => projeto.id === expandedCard)
                    .tecnologias.map((tecnologia, index) => (
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

                {/* Botão para GitHub */}
                <div className="space-y-12">
                  <a
                    href={
                      projetos.find((projeto) => projeto.id === expandedCard)
                        .github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center justify-center px-6 py-3 rounded transition-colors ${
                      temaClaro
                        ? "bg-blue-700 text-white hover:bg-blue-800"
                        : "bg-[#42035FFF] text-white hover:bg-[#9B07C0FF]"
                    }`}
                  >
                    <FaGithub className="mr-2 text-xl" />
                    Ver no GitHub
                  </a>
                  <a className="p-4" />
                  <a
                    href={
                      projetos.find((projeto) => projeto.id === expandedCard)
                        .url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center justify-center px-6 py-3 rounded transition-colors ${
                      temaClaro
                        ? "bg-blue-700 text-white hover:bg-blue-800"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    <FaExternalLinkAlt className="mr-2 text-xl" />
                    Acessar o Site
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>
        {/* Seção Github  */}
        <section
          id="languages-chart"
          className={`h-[50vh] flex flex-col justify-center items-center text-center py-8 px-10 ${
            temaClaro ? "bg-white text-black" : ""
          }`}
        >
          <h2
            className={`text-4xl font-bold mb-4 ${
              temaClaro ? "text-gray-900" : "text-gray-100"
            }`}
          >
            Linguagens Mais Utilizadas
          </h2>
          {loading ? (
            <p className={`${temaClaro ? "text-gray-700" : "text-gray-300"}`}>
              Carregando dados...
            </p>
          ) : Object.keys(repoLanguages).length === 0 ? (
            <p className={`${temaClaro ? "text-gray-700" : "text-gray-300"}`}>
              Nenhuma linguagem encontrada.
            </p>
          ) : (
            <div
              className={`${
                temaClaro ? "bg-gray-200" : "bg-gray-800"
              } p-6 rounded-lg shadow-lg w-full max-w-lg`}
            >
              {/* Gráfico com Tamanho Ajustado */}
              <Doughnut
                data={{
                  labels: Object.keys(repoLanguages),
                  datasets: [
                    {
                      data: Object.values(repoLanguages),
                      backgroundColor: [
                        "#FF0033",
                        "#007BFF",
                        "#FFC107",
                        "#00C49A",
                        "#9900FF",
                        "#FF6A00",
                      ],
                      hoverBackgroundColor: [
                        "#FF0022",
                        "#0056D2",
                        "#FFAA00",
                        "#00B378",
                        "#8800CC",
                        "#FF4C00",
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
                          size: 16,
                          weight: "bold",
                        },
                        boxWidth: 20,
                        padding: 20,
                        color: temaClaro ? "#333" : "#FFF",
                      },
                    },
                    tooltip: {
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      titleFont: { size: 12, weight: "bold" },
                      bodyFont: { size: 12 },
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
          className={`min-h-screen w-full flex flex-col justify-center items-center text-center py-16 px-10 mx-auto ${
            temaClaro ? "bg-white text-black" : ""
          }`}
        >
          <h2
            className={`text-4xl font-bold mb-8 ${
              temaClaro ? "text-gray-900" : "text-gray-100"
            }`}
          >
            Outros projetos Github
          </h2>

          {loading ? (
            <p className={`${temaClaro ? "text-gray-700" : "text-gray-300"}`}>
              Carregando repositórios...
            </p>
          ) : repos.length === 0 ? (
            <p className={`${temaClaro ? "text-gray-700" : "text-gray-300"}`}>
              Nenhum repositório encontrado.
            </p>
          ) : (
            <div className="flex flex-col items-center">
              {/* Lista de repositórios */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {repos.slice(0, visibleCount).map((repo) => (
                  <div
                    key={repo.id}
                    className={`rounded-lg shadow-lg p-6 text-center transform transition-transform hover:-translate-y-2 hover:shadow-xl ${
                      temaClaro ? "bg-gray-200" : "bg-gray-800"
                    }`}
                  >
                    {/* Nome do Repositório */}
                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        temaClaro ? "text-blue-700" : "text-blue-400"
                      }`}
                    >
                      {repo.name}
                    </h3>

                    {/* Descrição do Repositório */}
                    <p
                      className={`mb-4 ${
                        temaClaro ? "text-gray-900" : "text-gray-300"
                      }`}
                    >
                      {repo.description
                        ? repo.description.slice(0, 100)
                        : "Sem descrição disponível."}
                    </p>

                    {/* Dados Adicionais */}
                    <div
                      className={`text-sm mb-4 ${
                        temaClaro ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      <p>
                        Última atualização:{" "}
                        <span className="font-bold">
                          {new Date(repo.updated_at).toLocaleDateString(
                            "pt-BR"
                          )}
                        </span>
                      </p>
                      <p className="flex items-center justify-center text-center">
                        Linguagem:{" "}
                        <span className="font-bold flex items-center ml-2">
                          {repo.language === "JavaScript" && (
                            <FaJsSquare
                              className={`text-sm mr-1 ${
                                temaClaro
                                  ? "text-yellow-600"
                                  : "text-yellow-400"
                              }`}
                            />
                          )}
                          {repo.language === "React" && (
                            <FaReact
                              className={`text-sm mr-1 ${
                                temaClaro ? "text-blue-700" : "text-blue-400"
                              }`}
                            />
                          )}
                          {repo.language === "Node.js" && (
                            <FaNodeJs
                              className={`text-sm mr-1 ${
                                temaClaro ? "text-green-700" : "text-green-500"
                              }`}
                            />
                          )}
                          {repo.language === "Bootstrap" && (
                            <SiBootstrap
                              className={`text-sm mr-1 ${
                                temaClaro
                                  ? "text-purple-600"
                                  : "text-purple-500"
                              }`}
                            />
                          )}
                          {repo.language === "Tailwind CSS" && (
                            <SiTailwindcss
                              className={`text-sm mr-1 ${
                                temaClaro ? "text-blue-600" : "text-blue-500"
                              }`}
                            />
                          )}
                          {repo.language === "TypeScript" && (
                            <SiTypescript
                              className={`text-sm mr-1 ${
                                temaClaro ? "text-blue-700" : "text-blue-400"
                              }`}
                            />
                          )}
                          {repo.language || "Não especificada"}
                        </span>
                      </p>
                    </div>

                    {/* Botão para acessar o repositório */}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded transition-colors ${
                        temaClaro
                          ? "bg-blue-700 text-white hover:bg-blue-800"
                          : "bg-black hover:bg-[#2B2B2BFF]"
                      }`}
                    >
                      Acessar Repositório
                    </a>
                  </div>
                ))}
              </div>

              {/* Botão para mostrar mais repositórios */}
              {visibleCount < repos.length && (
                <button
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className={`mt-4 px-6 py-2 rounded transition-colors ${
                    temaClaro
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "bg-blue-500 text-white hover:bg-blue-700"
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
      </div>
    </>
  );
}

export default Home;
