import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[900px] w-full grid gap-8 grid-cols-1 lg:grid-cols-9 mt-40 mx-6 ">
      <div className="lg:col-span-3">
        <div className="sticky top-16 flex flex-col text-center items-center space-y-2">
          <div className="group w-38 h-38 [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full[backface-visibility:hidden]">
                <Image
                  width={152}
                  height={152}
                  src="/profile.jpg"
                  alt="Foto de perfil de Gabriel Rodrigues Amador"
                  className="rounded-full aspect-square object-cover"
                />
              </div>

              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <Image
                  width={152}
                  height={152}
                  src="/notion-face.png"
                  alt="Avatar de perfil de Gabriel Rodrigues Amador"
                  className="rounded-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl">Gabriel Rodrigues Amador</h1>

            <h2 className="text-yellow-500 text-xs font-semibold uppercase">
              Desenvolvedor frontend
            </h2>

            <p className="text-xs text-slate-500">São Paulo, Brasil</p>

            <div className="flex flex-col justify-center items-center lg:items-start space-y-2 mt-6">
              <a
                href="https://github.com/amadorgabriel"
                target="_blank"
                title="Github - Gabriel Amador"
                className="w-fit  flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                <p>Github</p>
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-rodrigues-amador/"
                target="_blank"
                title="LinkedIn - Gabriel Rodrigues Amador"
                className="w-fit flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
                <p>LinkedIn</p>
              </a>
              <a
                href="https://www.goodreads.com/user/show/131404275-gabriel-amador"
                target="_blank"
                title="Goodreads - Minhas Leituras"
                className="w-fit flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200"
                rel="noopener noreferrer"
              >
                <BookOpen size={18} />
                <p>Leituras</p>
              </a>
              <a
                href="mailto:gabrielramador2014@gmail.com"
                target="_blank"
                title="Email - gabrielramador2014@gmail.com"
                className="w-fit flex space-x-2 items-center px-2 cursor-pointer rounded-[4px] text-slate-600 hover:text-slate-900 hover:bg-gray-200"
                rel="noreferrer"
              >
                <Mail size={18} />
                <p>Email</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 h-min space-y-4">
        <section className="bg-white rounded-lg p-8">
          <h2 className="pb-3 font-bold text-yellow-500">Sobre</h2>
          <p className="pb-2">
            Desenvolvedor frontend com{" "}
            <b className="text-gray-800 font-semibold">
              +4 anos de experiência sólida
            </b>{" "}
            em ReactJS, TypeScript e arquitetura de software, focado na criação
            de soluções escaláveis e otimizadas.
          </p>
          <p>
            Carrego comigo muito entusiasmo. No momento atual tenho procurado
            expandir meus horizontes com novos desafios, estudos e causas para
            colaborar. Acredito que meu caminho profissional se sustenta em
            extrair o melhor das experiências, contruir relacionamentos e
            aprender.
          </p>
        </section>

        <section className="bg-white rounded-lg p-8">
          <h2 className="mb-3 font-bold text-yellow-500">Experiências</h2>

          <article className="mb-8">
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              Desenvolvedor Frontend na{" "}
              <a
                href="https://www.linkedin.com/company/etiqueta-certa/"
                target="_blank"
                className="hover:underline text-yellow-500 hover:text-yellow-700 italic"
                rel="noopener noreferrer"
              >
                @Etiqueta Certa
              </a>
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              JUN 2023 - PRESENTE (2 anos e 2 meses)
            </p>
            <ul className="text-md/relaxed space-y-1 list-disc list-inside text-slate-800">
              <li>
                Desenvolvedor da nova versão do principal produto SaaS da
                empresa, desde a concepção de regras de negócio até a
                implementação final.
              </li>
              <li>
                Liderança no desenvolvimento de soluções frontend robustas
                utilizando React.js, TypeScript e RadixUi, garantindo
                escalabilidade e manutenibilidade do código.
              </li>
              <li>
                Colaboração com equipes de Backend (C#, MySQL) para integração
                de APIs e otimização de fluxos de dados.
              </li>
              <li>
                Atuação na migração da estrutura de infra para AWS (Amplify,
                Route53, Bucket, RDS, EC2).
              </li>
            </ul>
          </article>

          <article className="mb-8">
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              Desenvolvedor Frontend no{" "}
              <a
                href="https://www.linkedin.com/showcase/istic/"
                target="_blank"
                title="Instituto SENAI de Tecnologia da Informação e Comunicação"
                className="hover:underline text-yellow-500 hover:text-yellow-700  italic"
                rel="noopener noreferrer"
              >
                @ISTIC
              </a>
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              NOV 2021 - MAI 2023 (1 ano e 7 meses)
            </p>
            <ul className="text-md/relaxed space-y-1 list-disc list-inside text-slate-800">
              <li>
                Definição e estruturação da arquitetura Frontend, incluindo a
                seleção de bibliotecas (React.js, TypeScript, React Query).
              </li>
              <li>
                Gestão de stakeholders: Atuação como ponto focal para clientes e
                fornecedores, conduzindo reuniões e garantindo alinhamento.
              </li>
              <li>
                Responsável pela gestão de cronogramas e estimativas de esforço,
                contribuindo para a entrega de projetos dentro do prazo.
              </li>
            </ul>
          </article>

          <article>
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              Desenvolvedor Frontend na{" "}
              <a
                href="https://www.linkedin.com/company/intelitrader"
                target="_blank"
                className="hover:underline text-yellow-500 hover:text-yellow-700  italic"
                rel="noopener noreferrer"
              >
                @Intelitrader
              </a>
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              SET 2021 - OUT 2021 (2 meses)
            </p>
            <ul className="text-md/relaxed space-y-1 list-disc list-inside text-slate-800">
              <li>
                Desenvolvimento de um sistema de simulação de risco pré e pós
                trade.
              </li>
              <li>Implementação de funcionalidades em ReactJs e Typescript.</li>
            </ul>
          </article>
        </section>

        <section className="bg-white rounded-lg p-8">
          <h2 className="pb-3 font-bold text-yellow-500">Formação Acadêmica</h2>

          <article className="pb-4">
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              Superior em Análise e Desenvolvimento de Sistemas
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              Associação Educacional Nove de Julho -{" "}
              <a
                href="https://www.uninove.br/"
                target="_blank"
                className="hover:underline italic"
                rel="noopener noreferrer"
              >
                @UNINOVE
              </a>
            </p>
          </article>

          <article className="pb-4">
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              Técnico em Multimídia - Comunicação em Meios Digitais
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              Escola de informática -{" "}
              <a
                href="https://www.sp.senai.br/"
                target="_blank"
                className="hover:underline italic"
                rel="noopener noreferrer"
              >
                @SENAI
              </a>
            </p>
          </article>

          <article>
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              Técnico em Desenvolvimento de Sistemas
            </h3>
            <p className="text-sm text-slate-500 mb-2">
              Escola de informática -{" "}
              <a
                href="https://www.sp.senai.br/"
                target="_blank"
                className="hover:underline italic"
                rel="noopener noreferrer"
              >
                @SENAI
              </a>
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
