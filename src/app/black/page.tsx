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
      </div>
      <Header
        btnLabel="GARANTIR CUPOM DE DESCONTO"
        imagePath="bg3.webp"
        title={<>Black Friday DONA: Todos os nossos cursos com 50% de desconto</>}
        subtitle={<>Para garantir o desconto e participar da Live de lançamento ao vivo, é só apertar no botão abaixo enquanto ainda dá tempo:</>}
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
