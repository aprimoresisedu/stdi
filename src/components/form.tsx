'use client'

import { SetStateAction, useEffect } from "react";

interface FormProps {
    searchParams: {
        utm_content?: string
        utm_campaign?: string
        utm_term?: string
        utm_source?: string
        utm_medium?: string
        pagina?: string
    }
    modal: boolean
    setModal: React.Dispatch<SetStateAction<boolean>>
}

export function Form({ searchParams: { utm_campaign, utm_content, utm_medium, utm_source, utm_term }, modal, setModal }: FormProps) {
    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://aprimoresisedu.activehosted.com/f/embed.php?id=17';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            document.body.appendChild(script);
            cont++;
        }
    }, []);

    useEffect(() => {
        if (modal) {
            document.querySelector('body')?.classList.add('overflow-hidden')
        } else {
            document.querySelector('body')?.classList.remove('overflow-hidden')
        }
    }, [modal])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                // const inpt0 = document.getElementById('field[80]') as HTMLInputElement // pagina
                const inpt1 = document.getElementById('field[611]') as HTMLInputElement // utmsource
                const inpt2 = document.getElementById('field[612]') as HTMLInputElement // utmmedium
                const inpt3 = document.getElementById('field[610]') as HTMLInputElement // utmcampaign
                const inpt4 = document.getElementById('field[613]') as HTMLInputElement // utmcontent
                const inpt5 = document.getElementById('field[614]') as HTMLInputElement // utmterm

                // inpt0.value = pag[1] || 'nao-traqueado'
                inpt1.value = utm_source || 'nao-traqueado'
                inpt2.value = utm_medium || 'nao-traqueado'
                inpt3.value = utm_campaign || 'nao-traqueado'
                inpt4.value = utm_content || 'nao-traqueado'
                inpt5.value = utm_term || 'nao-traqueado'
            }, 2000)
        }
    }, [cont])

    useEffect(() => {
        setTimeout(() => {
            const selectElements = document.querySelectorAll<HTMLSelectElement>('select');

            // Adiciona o evento change a cada select
            selectElements.forEach(selectElement => {

                if (selectElement.options.length > 0) {
                    selectElement.remove(0)
                }

                const labelId = selectElement['name'].split('[')[1].replace(']', '')

                const label = document.querySelector<HTMLLabelElement>(`label[for="field[${labelId}]"]`);

                const disabledOption = document.createElement('option')

                disabledOption.textContent = label?.textContent ?? ''
                disabledOption.disabled = true
                disabledOption.selected = true


                selectElement.insertBefore(disabledOption, selectElement.firstChild)

                // selectElement.addEventListener('change', () => {
                //     const labelId = selectElement['name'].split('[')[1].replace(']', '')

                //     const label = document.querySelector<HTMLLabelElement>(`label[for="field[${labelId}]"]`);

                //     const disabledOption = document.createElement('option')

                //     disabledOption.textContent = label?.textContent ?? ''

                //     selectElement.insertBefore(disabledOption, selectElement.firstChild)

                //     if (!label)
                //         return

                //     label.style.display = 'none';
                // });
            });
        }, 2000)
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full h-screen ${modal ? 'flex z-[999]' : 'hidden'} items-center justify-center`}>
            <div
                onClick={() => setModal(false)}
                className="absolute top-0 left-0 w-full h-full bg-black/60"
            ></div>
            <div className="w-full sm:max-w-lg max-w-sm flex items-center justify-center bg-[#f4eae9] z-50 rounded-xl">
                <div className="p-8 w-full">
                    <div id="_forms_17" className={`_form_17 w-full`}></div>
                </div>
            </div>
        </div>
    )
}