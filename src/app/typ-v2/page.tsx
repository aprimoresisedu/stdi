'use client'

import Image from "next/image";

export default function Home() {

  return (
    <>
      <main
        className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center border-b-4 border-[#c4ecf4] px-4 pb-8"
      >
        <section className="flex justify-center items-center pt-16 sm:pt-32">
          <div className="w-full max-w-xl">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-4 text-center text-white">
                <div className="relative w-24 h-8">
                  <Image
                    src="/images/logo2.webp"
                    alt="Logo Dona do Plantão"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="relative w-full max-w-sm h-6 sm:h-8 rounded-full bg-zinc-800 overflow-hidden flex justify-center items-center">
                  <div className="absolute left-0 h-full w-[80%] bg-[#44a226]"></div>
                  <span className="absolute text-sm font-semibold">80%</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold max-w-2xl">Faltam apenas 2 passos para você confirmar seu cadastro👇</h3>
                <p>Na segunda-feira (01/07) ao vivo às 20h, você vai poder participar do Seminário: Tomada de Decisão na Intercorrência – para poder atuar de forma segura nas intercorrências, utilizando um passo a passo mental, comprovado pelas nossas +1000 alunas.</p>
                <p>Então, para garantir que você vai receber todos os avisos e resgatar seu ingresso (e para garantir que você vai conseguir aproveitar essa oportunidade única), você precisa seguir os passos abaixo:</p>
              </div>
              <div className="bg-zinc-100 border rounded-xl p-4 sm:p-12 flex flex-col gap-12">
                <div className="flex flex-col items-center gap-4 text-center">
                  <h5 className="text-emerald-700 text-xl font-bold px-4 py-2 bg-emerald-100 rounded-lg">1º Passo</h5>
                  <div className="sm:max-w-xl">
                    <p className="z-50 text-xl font-semibold">Entre no grupo exclusivo do Whatsapp para receber todos os avisos e todos os materiais do Seminário.</p>
                    <p className="z-50 ">OBS: é muito importante que você salve o nosso contato para receber o link com prioridade. Sem cumprir esse passo, não poderemos garantir sua inscrição.</p>
                    <div className="mt-12">
                      <a
                        href="https://chat.whatsapp.com/JCbsIEVmhiR6iRYumlDxdr"
                        className="text-white font-semibold bg-[#44a226] rounded-xl py-3 px-6 uppercase text-lg shadow"
                      >Confirmar inscrição</a>
                    </div>
                  </div>
                </div>
                <hr className="border-zinc-200 sm:block hidden" />
                <div className="flex flex-col items-center gap-4 text-center">
                  <h5 className="text-red-700 text-xl font-bold px-4 py-2 bg-red-100 rounded-lg">2º Passo - Muito importante!</h5>
                  <div className="sm:max-w-xl">
                    <p className="text-xl font-semibold">Verifique no seu email se você recebeu o vouncher validando a sua inscrição</p>
                    <p>OBS: é muito importante que você salve o nosso contato para receber o link com prioridade. Sem cumprir esse passo, não poderemos garantir sua inscrição.</p>
                    <div className="flex gap-4 justify-center items-center mt-4">
                      <Image
                        width={48}
                        height={48}
                        alt="Ícone gmail"
                        src="/images/gmail.png"
                        className="rounded-lg"
                      />
                      <Image
                        width={48}
                        height={48}
                        alt="Ícone outlook"
                        src="/images/outlook.png"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-4 text-center -mt-2 bg-black py-4 flex justify-center text-white">
        <p>Dona do Plantão. Todos os direitos reservados. Políticas de Privacidade.</p>
      </footer>
    </>
  );
}
