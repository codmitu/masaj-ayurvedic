import styled from 'styled-components'
import React from 'react'
import diploma from './images/denisa-diploma.jpg'
import bg2 from './images/bg2.png'
import {FormContact} from './FormContact'
import Schedule from './Schedule'

export const Contact = () => {
    return (
        <Container id="contact">
            <Title>Rezervă-ți locul</Title>
            <Wrapper>
                <LeftSide>
                    <Diploma src={diploma} alt="therapeutic body massage Denisa Petrin"/>
                </LeftSide>
                <RightSide>
                    <FormContact />
                </RightSide>
            </Wrapper>
            <Schedule/>
        </Container>
    )
}

const Container = styled.article`
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    gap: 100px;
    background: url(${bg2}) top center/cover;
    padding: 5vw;
`
const Title = styled.h2`
    font-size: var(--mf);
    font-weight: 400;
    margin-bottom: var(--sf);
`
const Wrapper = styled.div`
    display: flex;
    gap: 100px;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
const LeftSide = styled.div`
    flex: 1;
    display: grid;
    place-items: center;
`
const Diploma = styled.img`
    max-height: 50vh;
    max-width: 90%;
    opacity: 0.7;
    transition: all .5s ease;
    border: 20px solid white;
    outline: 1px solid black;
    &:hover {
        opacity: 1;
    }
`
const RightSide = styled.div`
    flex: 1;
`

