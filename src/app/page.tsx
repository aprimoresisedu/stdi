'use client'

import { Form } from "@/components/form";
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

  const [modal, setModal] = useState<boolean>(true)

  return (
    <>
      <Form 
        modal={modal}
        setModal={setModal}
        searchParams={searchParams}
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
        modal={modal}
        setModal={setModal}
        searchParams={searchParams}
      />
      <footer className="px-4 text-center -mt-2 bg-black py-4 flex justify-center text-white">
        <p>Dona do Plantão. Todos os direitos reservados. Políticas de Privacidade.</p>
      </footer>
    </>
  );
}
