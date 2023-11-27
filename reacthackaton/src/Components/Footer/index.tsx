
import { Label, Rodape } from "./styles"
import React, { useEffect, useState } from 'react';


interface PropsFooter {
    // abrirModal: () => void;
}





export const Footer = (props: PropsFooter) => {

    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Verifica se a pessoa rolou até o final da página
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 60;

            setShowFooter(isAtBottom);
        };

        // Adiciona um listener para o evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Remove o listener quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <Rodape style={{ bottom: showFooter ? '0' : '-60px' }}>
            
            <Label >Hackton Web Type</Label>

        </Rodape >


    )
}
