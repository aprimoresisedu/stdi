
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
                    <div className="relative w-[210px] h-[120px] sm:w-[176px] sm:h-[102px]">
                        <Image
                            src="/images/logo3.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold">{title}
                    </h1>
                    <p className="text-lg">{subtitle}</p>
                    <div className="flex flex-col items-center gap-4">
                        <p className="flex items-center gap-2 text-white text-lg">
                            <svg className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M140-160q-25 0-42.5-17.5T80-220q0-25 17.5-42.5T140-280h20v-440q0-33 23.5-56.5T240-800h560q17 0 28.5 11.5T840-760q0 17-11.5 28.5T800-720H240v440h180q25 0 42.5 17.5T480-220q0 25-17.5 42.5T420-160H140Zm460 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z"/></svg>
                            <span className="font-semibold">Online via Google Meet</span>
                        </p>
                        <button
                            onClick={() => setModal(true)}
                            className="w-full text-lg font-semibold uppercase bg-gradient-to-b from-[#C451C0] to-[#6D2D6B] animate-pulse rounded-3xl  py-4 px-8 border-2 border-white"
                        >{btnLabel}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
