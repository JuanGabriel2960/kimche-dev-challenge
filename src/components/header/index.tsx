import React from "react";
import { Container } from "../container";
import './styles.css'

export const Header = () => {
    return (
        <header className='header'>
            <Container>
                <h1 className="my-6 font-bold text-4xl md:text-5xl text-white">Country Search</h1>
            </Container>
        </header>
    )
}
