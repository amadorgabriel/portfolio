import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-[900px] w-full grid gap-8 grid-cols-1 lg:grid-cols-4 mt-40 mx-6 ">
      <div className="col-span-1">
        <div className="sticky top-16 flex flex-col text-center items-center space-y-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmzymUiTAl3wkxxak91-U6ifnnBj5kbDebJFwqHCRFzYveVYMoZ3OfHu8QKVhpE6-Yl4&usqp=CAU"
            alt="Imagem de perfil"
            className="w-32 rounded-full aspect-square object-cover"
          />

          <div className="space-y-2">
            <h1 className="text-2xl">Etiqueta Certa</h1>

            <h3 className="text-blue-500 text-sm font-semibold">
              Empresa de conformidade têxtil
            </h3>

            <div className="flex flex-col justify-center items-center lg:items-start space-y-2 mt-4">
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

      <div className="col-span-3 h-min bg-white rounded-2xl p-8 space-y-8">
        <div>
          <h2 className="pb-3 font-bold text-blue-500 hover:text-blue-700">
            Sobre
          </h2>
          <p>
            Plataforma para criação de etiquetas em conformidade com o INMETRO,
            ABNT e padrões internacionais.
          </p>
        </div>
        <div>
          <h2 className="mb-3 font-bold text-blue-500 hover:text-blue-700">
            Eventos
          </h2>

          <div className="mb-8">
            <h3 className="pb-2  text-[1.12rem] text-slate-900">
              Fórum da qualidade têxtil do Brasil{" "}
              <a
                href="#"
                target="_blank"
                className="hover:underline hover:text-blue-500"
              >
                @Blumenal
              </a>
            </h3>
            <p className="text-md/relaxed">
              A Etiqueta Certa é uma das idealizadoras do Fórum da Qualidade
              Têxtil do Brasil. O Fórum da Qualidade Têxtil é um evento que
              acontece anualmente com o objetivo de reunir profissionais do
              varejo e da indústria da moda para discutir boas práticas e gestão
              da qualidade. É um grande espaço para networking, com palestras
              diversas e convidados nacionais e internacionais especialistas nos
              assuntos. A próxima edição será em 2025 em Blumenau, Santa
              Catarina. Faça sua inscrição na lista de espera e seja avisado
              quando as inscrições forem abertas.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              Febratex{" "}
              <a
                href="#"
                target="_blank"
                className="hover:underline hover:text-blue-500"
              >
                @BC
              </a>
            </h3>
            <p className="text-md/relaxed">
              A cada dois anos, a Etiqueta Certa marca presença na maior feira
              da indústria têxtil da América Latina, a Febratex. A Febratex
              acontece bianualmente, na capital têxtil do país, em Blumenau,
              Santa Catarina, e reúne centenas de expositores dos segmentos mais
              variados. É o maior evento têxtil da América Latina e a Etiqueta
              Certa tem sempre o prazer de estar lá, revendo parceiros,
              reencontrando clientes e selando futuros negócios.
            </p>
          </div>

          <div>
            <h3 className="pb-2 text-[1.12rem] text-slate-900">
              Febratex{" "}
              <a
                href="#"
                target="_blank"
                className="hover:underline hover:text-blue-500"
              >
                @BC
              </a>
            </h3>
            <p className="text-md/relaxed">
              A cada dois anos, a Etiqueta Certa marca presença na maior feira
              da indústria têxtil da América Latina, a Febratex. A Febratex
              acontece bianualmente, na capital têxtil do país, em Blumenau,
              Santa Catarina, e reúne centenas de expositores dos segmentos mais
              variados. É o maior evento têxtil da América Latina e a Etiqueta
              Certa tem sempre o prazer de estar lá, revendo parceiros,
              reencontrando clientes e selando futuros negócios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
