
import { Label, Rodape } from "./styles"
import React, { useEffect, useState } from 'react';


interface PropsFooter {
    // abrirModal: () => void;
}





export const Footer = (props: PropsFooter) => {

    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 60;

            setShowFooter(isAtBottom);
        };

        window.addEventListener('scroll', handleScroll);

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
