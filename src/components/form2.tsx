'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, SetStateAction, useEffect, useState } from "react";

interface FormProps {
    modal: boolean
    setModal: React.Dispatch<SetStateAction<boolean>>
}

type DataType = {
    name: string
    email: string
    cellphone: string
    quanto_tempo_formada: string
    fora_faculdade: string
    trabalha_como_enfermeira: string
    tem_pos: string
}

const initialData = {
    name: '',
    email: '',
    cellphone: '',
    quanto_tempo_formada: '',
    fora_faculdade: '',
    trabalha_como_enfermeira: '',
    tem_pos: ''
}

const fields = [
    {
        name: 'name',
        type: 'text'
    },
    {
        name: 'email',
        type: 'text'
    },
    {
        name: 'cellphone',
        type: 'text'
    },
    {
        name: 'trabalha_como_enfermeira',
        type: 'select'
    },
    {
        name: 'tem_pos',
        type: 'select'
        
    },
    {
        name: 'fora_faculdade',
        type: 'select'
    },
]

const labels = [
    'Nome Completo:',
    'Seu melhor Email:',
    'Digite seu Telefone',
    'Você já trabalha como enfermeira?',
    'Você já tem pós graduação?',
    'Fora da faculdade, quanto você já investiu em capacitação',
]
const selectOptions = {
    quanto_tempo_formada: [
        'Há 6 meses ou menos',
        'Entre 6 meses e 1 ano',
        'Entre 1 a 5 anos',
        'Entre 5 a 10 anos',
        'Há mais de 10 anos',
    ],
    trabalha_como_enfermeira: [
        'Não, estou buscando uma contratação',
        'Sim, e busco um 2º vínculo (ou busco reposicionar minha carreira)',
        'Sim, mas não busco contratação, só quero me sentir mais segura'
    ],
    tem_pos: [
        'Sim, já concluí',
        'Não, mas estou matriculada/cursando',
        'Não',
    ],
    fora_faculdade: [
        'Nada, ainda estou na faculdade',
        'Nada, já me formei mas nunca investi',
        'Menos de R$2.000',
        'Entre R$2.000-R$10.000',
        'Mais de R$10.000',
    ]
}

export function Form2({ modal, setModal }: FormProps) {

    const { push } = useRouter()
    const [data, setData] = useState<DataType>(initialData)
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    function formatPhone(phone: string): string {
        phone = phone.replace(/\D/g, '');

        phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
        phone = phone.replace(/(\d{5})(\d)/, '$1-$2');

        return phone;
    }

    function handleChange(e: ChangeEvent<HTMLSelectElement | HTMLInputElement>, name: keyof typeof initialData) {
        setError('')

        if (name === 'cellphone') {
            setData(prevState => ({
                ...prevState,
                [name]: formatPhone(e.target.value)
            }))
        } else {
            setData(prevState => ({
                ...prevState,
                [name]: e.target.value
            }))
        }
    }

    function formatPhoneToE164(phone: string): string {
        // Remove todos os caracteres não numéricos
        const digits = phone.replace(/\D/g, "");

        // Verifica se tem o DDD (2 primeiros dígitos após o "55")
        if (digits.length === 11) {
            return `+55${digits}`;
        }

        // Se o número tiver menos de 11 dígitos, pode estar inválido
        throw new Error("Número inválido. Certifique-se de que está no formato correto.");
    }

    async function formSubmited(e: FormEvent) {
        e.preventDefault()

        setLoading(true)
        
        const verifyField1 = data.tem_pos.length === 0 || data.fora_faculdade.length === 0
        const verifyField2 = data.tem_pos === 'Selecione' || data.fora_faculdade === 'Selecione'
        
        if (verifyField1 || verifyField2) {
            setError('Preencha os campos corretamente')
            setLoading(false)
            console.log(`aqui`)
            return
        }

        const utm_content = new URLSearchParams(window.location.search).get('utm_content') || 'nao-traqueado'
        const utm_campaign = new URLSearchParams(window.location.search).get('utm_campaign') || 'nao-traqueado'
        const utm_term = new URLSearchParams(window.location.search).get('utm_term') || 'nao-traqueado'
        const utm_source = new URLSearchParams(window.location.search).get('utm_source') || 'nao-traqueado'
        const utm_medium = new URLSearchParams(window.location.search).get('utm_medium') || 'nao-traqueado'

        await fetch('https://services.leadconnectorhq.com/hooks/V4asAT7IrV5IdErLl2Fr/webhook-trigger/557271f0-ffd3-4b58-81ad-b145db1b5e29', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer pit-ee6d46b4-c92d-4e68-b3c6-735bf5bb2377`, // Armazene a chave de API em variáveis de ambiente
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data,
                trabalha_como_enfermeira: data.trabalha_como_enfermeira,
                firstName: data.name,
                email: data.email,
                phone: formatPhoneToE164(data.cellphone),
                utm_content,
                utm_campaign,
                utm_term,
                utm_source,
                utm_medium,
                pagina: 'v3',
            })
        });

        setLoading(false)
        push('/typ-v2')
    }

    useEffect(() => {
        setError('')
        setData(initialData)
        setLoading(false)
    }, [modal])

    return (
        <div className={`fixed top-0 left-0 w-full h-screen ${modal ? 'flex z-[999]' : 'hidden'} items-center justify-center`}>
            <div
                onClick={() => setModal(false)}
                className="absolute top-0 left-0 w-full h-full bg-black/60"
            ></div>
            <div className="w-full sm:max-w-lg max-w-sm flex items-center justify-center bg-white z-50 rounded-xl p-8">
                <form
                    onSubmit={formSubmited}
                    className=" w-full flex flex-col gap-2">
                    <h4 className="text-2xl font-semibold text-center mb-2">Preencha os campos abaixo e obtenha o seu ingresso</h4>
                    {fields.map((field: { name: string, type: string }, index: number) => (
                        <>
                            {field.type === 'text' ? (
                                <div>
                                    <label className="text-sm text-zinc-700 mb-1 font-semibold">{labels[index]}</label>
                                    <input
                                        required
                                        key={index}
                                        // @ts-expect-error wait error no problem
                                        value={data[field.name]}
                                        maxLength={field.name === 'cellphone' ? 15 : undefined}
                                        minLength={field.name === 'cellphone' ? 15 : undefined}
                                        type={field.name === 'email' ? 'email' : undefined}
                                        placeholder={labels[index]}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, field.name as keyof typeof initialData)}
                                        className="w-full text-sm border border-zinc-400 outline-none text-black bg-transparent rounded-md py-[6px] px-2"
                                    />
                                </div>
                            ) : (
                                <div>
                                    <label className="text-sm text-zinc-700 mb-1 font-semibold">{labels[index]}</label>
                                    <select
                                        required
                                        key={index}
                                        className="w-full text-sm border border-zinc-400 outline-none text-black bg-transparent rounded-md py-[6px] px-2"
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e, field.name as keyof typeof initialData)}
                                    >
                                        <option className="text-zinc-500">Selecione:</option>
                                        {/* @ts-expect-error wait error no problem */}
                                        {selectOptions[`${field.name}`].map((opt: string, index: number) => (
                                            <option key={index + opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </>
                    ))}
                    <button className="rounded-xl bg-[#44a226] text-white py-3 font-semibold uppercase text-sm flex justify-center items-center">
                        {loading ? (
                            <div
                                className="w-4 h-4 border-2 border-t-blue-500 border-white rounded-full animate-spin"
                            ></div>

                        ) : (
                            <span>Quero meu ingresso</span>
                        )}
                    </button>
                    {error && <span className="text-center text-red-500 font-semibold text-sm">{error}</span>}
                </form>
            </div>
        </div>
    )
}