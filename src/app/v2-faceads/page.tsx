'use client'

import { Form2 } from "@/components/form2";
import Header from "@/components/header";
import Image from "next/image";
import { useState } from "react";

interface PageProps {
  searchParams: {
    utm_content?: string
    utm_campaign?: string
    utm_term?: string
    utm_source?: string
    utm_medium?: string
  }
}

export default function Home({ searchParams }: PageProps) {

  const [modal, setModal] = useState<boolean>(false)

  return (
    <div className="bg-zinc-950">
      <Form2
        modal={modal}
        setModal={setModal}
      />
      <div className="bg-[#3a0f54] py-4 flex items-center justify-center">
        <div className="relative w-24 h-8">
          <Image
            src="/images/logo2.webp"
            alt="Logo Dona do Plantão"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <Header
        btnLabel="RESGATAR INGRESSO GRÁTIS"
        imagePath="bg3"
        title={<>Seminário Exclusivo: Tomada de Decisão Segura nas Intercorrências como Enfermeira</>}
        subtitle={<>Para resgatar GRÁTIS um dos ingressos ainda disponíveis, é só apertar no botão abaixo enquanto ainda dá tempo:</>}
        modal={modal}
        setModal={setModal}
        searchParams={searchParams}
      />
      <footer className="px-4 text-center -mt-2 bg-black py-4 flex justify-center text-white">
        <p>Dona do Plantão. Todos os direitos reservados. Políticas de Privacidade.</p>
      </footer>
    </div>
  );
}
