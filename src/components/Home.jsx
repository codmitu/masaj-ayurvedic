import React from 'react'
import styled from 'styled-components'
import cover from './images/cover.png'
import img1 from './images/img1.png'
import {Link as LinkS} from "react-scroll"
import {CalendarCheckFill} from "@styled-icons/bootstrap/CalendarCheckFill"

export const Home = () => {
    return (
        <Container id="acasa">
            <LeftSide>
                <Subtitle>Terapeută certificată și cu experiență în terapia complementară.</Subtitle>
                <Title>Relaxare, Terapie și Răsfăț</Title>
                <Desc><b>Salon Denisa</b> - masaj de relaxare, terapeutic, somatic sau cu roci vulcanice, full body sau parțial. Masajul este o metodă ideală de a reduce tensiunea, îmbunătățește circulația, elimină durerile musculare și oferă o senzație de bine și relaxare. </Desc>
                <MyButton smooth={true} duration={500} spy={true} exact="true" offset={-100} to="contact">
                    Programează-te <CalendarCheckFill/>
                </MyButton>
            </LeftSide>
            <RightSide>
                <Img src={img1} alt="salon masaj" />
            </RightSide>
        </Container>
    )
}


const Container = styled.main`
    min-height: calc(100vh - 100px);
    background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${cover}) center / cover;
    margin-top: 100px;
    display: flex;
    align-items: center;
    padding: 10vw;
    gap: 5vw;
`
const LeftSide = styled.section`
    flex: 1;
    text-align: left;
`
const Subtitle = styled.h3`
    font-size: var(--mf);
    margin-bottom: var(--sf);
    line-height: 1;
    color: #646464;
    font-weight: 200;
`
const Title = styled.h1`
    font-size: var(--bf);
    margin-bottom: var(--mf);
    line-height: 1;
    font-weight: 700;
    font-family: var(--fsd);
    color: var(--cbd);
`
const Desc = styled.p`
    font-size: var(--sf);
    text-align: justify;
    >b {
        color: var(--col);
    }
`
const MyButton = styled(LinkS)`
    background-color: var(--con);
    color: white;
    padding: 10px 30px;
    border-radius: 5px;
    margin-top: var(--mf);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    user-select: none;
    >svg {
        margin-left: 10px;
    }
    &:hover {
        background-color: var(--cod);
    }
    &:active {
        background-color: var(--col);
    }
`
const RightSide = styled.section`
    flex: 1;
`
const Img = styled.img`
    width: 100%;
    transform: rotate3d(30deg, 0deg, 30deg);
`