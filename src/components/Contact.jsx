import styled from 'styled-components'
import React from 'react'
import diploma from './images/denisa-diploma.jpg'
import bg2 from './images/bg2.png'


export const Contact = () => {
    return (
        <Container id="contact">
            <Title>Rezervă-ți locul</Title>
            <Wrapper>
                <LeftSide>
                    <Diploma src={diploma} alt="therapeutic body massage Denisa Petrin"/>
                </LeftSide>
                <RightSide>

                </RightSide>
            </Wrapper>
        </Container>
    )
}

const Container = styled.article`
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    gap: 100px;
    background: url(${bg2}) center/cover;
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
`
const LeftSide = styled.div`
    flex: 1;
`
const Diploma = styled.img`
    max-height: 50vh;
    max-width: 90%;
`
const RightSide = styled.div`
    flex: 1;
`

