import React from 'react'
import styled from 'styled-components'
import img2 from './images/img2.png'

export const About = () => {
    return (
        <Container id="despre">
            <LeftSide>
                <Img src={img2} alt="salon denisa masaj timisoara"/>
            </LeftSide>
            <RightSide>
                <Title>Despre serviciile noastre</Title>
                <Subtitle>Terapii medicale și de relaxare</Subtitle>
                <DescWrap>
                    <Desc><u>Masajul terapeutic</u> - reprezintă un mijloc eficient de prevenire, ameliorare și tratare a numeroaselor afecțiuni musculare și articulare, îmbunatățind circulația sanguină și drenajul limfatic.
                    <br/><br/>
                    Tehnicile de masaj sunt indicate mai ales în afecțiunile aparatului locomotor (reumatismale, neurologice, posttraumatice, afecțiuni articulare și periarticulare). De asemenea, este cunoscut faptul că masajul are efecte benefice asupra organismului, favorizând relaxarea fizică dar și psihică.
                    </Desc>
                    <Desc><u>Masajul de Relaxare</u> - Cel mai popular masaj adaptat nevoilor corpului tău și care ajută la eliminarea toxinelor, eliberează mintea de stres și răsfață pielea cu uleiuri aromatice.
                    <br/><br/>
                    Tehnicile de masaj sunt realizate în acompaniamentul meloterapiei.
                    <br/><br/>
                    Rezultatul scontat presupune stimularea fluxului de sânge și oxigen care aduc corpul într-un echilibru  fizic dar și mental.
                    </Desc>
                </DescWrap>
            </RightSide>
        </Container>
    )
}


const Container = styled.article`
    height: 700px;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    padding: 10vw;
    gap: 5vw;
`
const LeftSide = styled.section`
    flex: 1;
    height: 100%;
`
const Img = styled.img`
    /* height: 100%; */
`
const RightSide = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h2`
    font-size: var(--mf);
    /* font-family: var(--fsr); */
    font-weight: 400;
    margin-bottom: var(--sf);
`
const Subtitle = styled.h3`
    font-weight: 400;
    margin-bottom: var(--xsf);
    font-size: var(--xsf);
    color: gray;
    font-style: italic;
`
const DescWrap = styled.article`
    display: flex;
    gap: 50px;
    width: 100%;
`
const Desc= styled.p`
    text-align: justify;
    flex: 1;
    line-height: 1.5;
`
