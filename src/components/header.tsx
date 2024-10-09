
import Image from "next/image"
import { SetStateAction } from "react"

interface HeaderProps {
    searchParams: {
        utm_content?: string
        utm_campaign?: string
        utm_term?: string
        utm_source?: string
        utm_medium?: string
    }
    modal: boolean
    setModal: React.Dispatch<SetStateAction<boolean>>
}

export default function Header({ setModal }: HeaderProps) {
    return (
        <header className="min-h-screen bg-image flex flex-col items-center justify-center border-b-4 border-[#c4ecf4] px-4 pb-8">
            <div className="w-full max-w-7xl sm:grid sm:grid-cols-2 flex flex-col sm:translate-y-0 translate-y-24">
                <div className="w-full max-w-xl flex flex-col gap-4 text-white sm:text-left text-center sm:items-start items-center">
                    <div className="relative w-[200px] h-[80px] sm:w-[240px] sm:h-[90px]">
                        <Image
                            src="/images/logo.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold">Aprenda a tomar as <strong>melhores decisões como enfermeira</strong> nas intercorrências com segurança e autonomia
                    </h1>
                    <p className="text-lg">Organize as suas ações como enfermeira com o nosso Protocolo, desenvolvido e <strong>comprovado por mais de 50 mil horas</strong> de plantões.</p>
                    <div className="flex flex-col items-center gap-2">
                        <button
                            onClick={() => setModal(true)}
                            className="w-full text-lg font-semibold uppercase bg-gradient-to-b from-[#854873] to-[#3a0f54] rounded-3xl  py-4 px-8 border-2 border-white"
                        > Quero me inscrever gratuitamente
                        </button>
                        <p className="flex items-center gap-2 text-white text-xl">
                            <svg className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" /></svg>
                            <span className="font-semibold">Terça-feira (15/10) ao vivo às 20h</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-72 h-72 relative sm:hidden mt-32">
                <Image
                    src="/images/bg2.png"
                    alt="Imagem de enfermeiras"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </header>
    )
}