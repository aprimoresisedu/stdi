
import Image from "next/image"
import { ReactNode, SetStateAction } from "react"

interface HeaderProps {
    title: ReactNode
    subtitle: ReactNode
    btnLabel: string
    imagePath: string
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

export default function Header({ setModal, title, subtitle, btnLabel, imagePath }: HeaderProps) {
    return (
        <header className={`min-h-screen ${imagePath === 'bg2' ? 'bg-image' : 'bg-image-3'} flex flex-col items-center justify-center border-b-4 border-[#c4ecf4] px-4 pb-8`}>
            <div className="w-full max-w-7xl sm:grid sm:grid-cols-2 flex flex-col">
                <div className="w-full max-w-xl flex flex-col gap-8 text-white sm:text-left text-center sm:items-start items-center">
                    <div className="relative w-[200px] h-[80px] sm:w-[240px] sm:h-[90px]">
                        <Image
                            src="/images/logo.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold">{title}
                    </h1>
                    <p className="text-lg">{subtitle}</p>
                    <div className="flex flex-col items-center gap-8">
                        <p className="flex items-center gap-2 text-white text-xl">
                            <svg className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" /></svg>
                            <span className="font-semibold">Terça-feira (10/12) ao vivo às 20h</span>
                        </p>
                        <button
                            onClick={() => setModal(true)}
                            className="w-full text-lg font-semibold uppercase bg-gradient-to-b from-[#854873] to-[#3a0f54] rounded-3xl  py-4 px-8 border-2 border-white"
                        >{btnLabel}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
