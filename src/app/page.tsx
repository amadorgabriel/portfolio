import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[900px] w-full grid gap-8 grid-cols-1 lg:grid-cols-9 mt-40 mx-6 ">
      <div className="lg:col-span-3">
        <div className="sticky top-16 flex flex-col text-center items-center space-y-2">
          <div className="group w-38 h-38 [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* <!-- Front Side --> */}
              <div className="absolute w-full h-full[backface-visibility:hidden]">
                <Image
                  width={152}
                  height={152}
                  src="/profile.jpg"
                  alt="Foto de perfil"
                  className="rounded-full aspect-square object-cover"
                />
              </div>

              {/* <!-- Back Side --> */}
              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <Image
                  width={152}
                  height={152}
                  src="/notion-face.png"
                  alt="Avatar de perfil"
                  className="rounded-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl">Gabriel Rodrigues Amador</h1>

            <h3 className="text-yellow-500 text-xs font-semibold uppercase">
              Desenvolvedor frontend
            </h3>

            <div className="flex flex-col justify-center items-center lg:items-start space-y-2 mt-6">
              <a
                href="https://github.com/amadorgabriel"
                target="_blank"
                title="Github"
                className="w-fit  flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200"
              >
                <Github size={18} />
                <p>Github</p>
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-rodrigues-amador/"
                target="_blank"
                title="LinkedIn"
                className="w-fit flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200"
              >
                <Linkedin size={18} />
                <p>LinkedIn</p>
              </a>
              <a
                href="mailto:gabrielramador2014@gmail.com"
                target="_blank"
                title="Email"
                className="w-fit flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200"
              >
                <Mail size={18} />
                <p>Email</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 h-min bg-white rounded-2xl p-8 space-y-8">
        <div>
          <h2 className="pb-3 font-bold text-yellow-500 hover:text-yellow-700">
            Sobre
          </h2>
          <p>
            Desenvolvedor Frontend com experiência em{" "}
            <span className="font-semibold text-slate-800">
              React, Typescript e Next.js
            </span>
            . Atuação em desenvolvimento de aplicações escaláveis, otimização de
            performance e boas práticas de código.{" "}
            <span className="font-semibold text-slate-800">
              Interesse em infraestrutura, testes automatizados e arquitetura de
              software
            </span>
            . Busco aprimorar minhas habilidades para atuar como{" "}
            <span className="font-semibold text-slate-800">
              desenvolvedor pleno
            </span>
            , focando em{" "}
            <span className="font-semibold text-slate-800">
              colaboração, autonomia e entrega de valor
            </span>
            .
          </p>
        </div>
        <div>
          <h2 className="mb-3 font-bold text-yellow-500 hover:text-yellow-700">
            Onde trabalhei?
          </h2>

          <div className="mb-8">
            <h3 className="pb-2  text-[1.12rem] text-slate-900">
              Desenvolvedor Júnior V na{" "}
              <a
                href="https://www.linkedin.com/company/etiqueta-certa/"
                target="_blank"
                className="hover:underline hover:text-yellow-500 italic"
              >
                @Etiqueta Certa
              </a>
            </h3>
            <ul className="text-md/relaxed space-y-1 list-disc list-inside text-slate-800">
              <li>
                Desenvolvimento do principal produto da empresa utilizando
                ReactJs, Typescript, Styled Components, NodeJs, PrismaORM, MySQL
                e Docker.
              </li>
              <li>
                Planejamento e implementação de regras de negócio e processos
                internos.
              </li>
              <li>
                Organização do time de TI, alinhando demandas técnicas e
                operacionais.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              Técnico em Programação Frontend no{" "}
              <a
                href="https://www.linkedin.com/showcase/istic/"
                target="_blank"
                title="Instituto SENAI de Tecnologia da Informação e Comunicação"
                className="hover:underline hover:text-yellow-500 italic"
              >
                @ISTIC
              </a>
            </h3>
            <ul className="text-md/relaxed space-y-1 list-disc list-inside text-slate-800">
              <li>Desenvolvimento de sistemas para a indústria automotiva.</li>
              <li>
                Estruturação de projetos do zero, participando de reuniões com
                clientes e definição de requisitos.
              </li>
              <li>
                Trabalho com React, Typescript e metodologias ágeis
                (Scrum/Kanban).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              Desenvolvedor Júnior na{" "}
              <a
                href="https://www.linkedin.com/company/intelitrader"
                target="_blank"
                className="hover:underline hover:text-yellow-500 italic"
              >
                @Intelitrader
              </a>
            </h3>
            <ul className="text-md/relaxed space-y-1 list-disc list-inside text-slate-800">
              <li>
                Desenvolvimento de um sistema de simulação de risco pré e pós
                trade.
              </li>
              <li>Implementação de funcionalidades em ReactJs e Typescript.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
