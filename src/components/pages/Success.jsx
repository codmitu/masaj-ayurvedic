import React from 'react'
import styled from 'styled-components'
import cover from "../images/cover.png"

export const Success = () => {
    return (
        <Container>
            <h1>Success</h1>
            <p>Ai făcut o rezervare la Salon Masaj Denisa</p>
            <a href="https://codmitu.github.io/salon-masaj-denisa/">Mergi înapoi la pagina principală</a>
        </Container>
    )
}

const Container = styled.article`
    height: 100vh;
    display: grid;
    place-content: center;
    text-align: center;
    background: linear-gradient(to top, #ff0000a4, #ff00004b), url(${cover}) center/cover;
    color: white;
    >h1 {
        font-size: var(--xbf);
        font-family: var(--fsc);
    }
    >a {
        text-decoration: none;
        color: white;
        border: 1px solid brown;
        margin-top: 50px;
        padding: 10px;
        border-radius: 10px;
        background-color: #ad00007b;
        &:hover {
            background-color: #ad0000b2;
        }
    }
`