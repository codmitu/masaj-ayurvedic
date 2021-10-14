import React from 'react'
import styled from 'styled-components'
import cover from './images/cover.png'
import img1 from './images/img1.png'
import {Link as LinkS} from "react-scroll"
import {CalendarCheckFill} from "@styled-icons/bootstrap/CalendarCheckFill"
import {motion} from 'framer-motion'


export const Home = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
            delayChildren: 1.3,
          }
        }
    }
    
    const item = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0 }
    }
    
    
    return (
        <Container id="acasa">
            <LeftSide as={motion.section} variants={container} initial="hidden" animate="show">
                <Subtitle as={motion.h3} variants={item}>Terapeută certificată și cu experiență în terapia complementară.</Subtitle>
                <Title as={motion.h1} variants={item}>Relaxare, Terapie și Răsfăț</Title>
                <Desc as={motion.p} variants={item}><b>Ayurvedic Masaj</b> - masaj de relaxare, terapeutic, somatic sau cu roci vulcanice, full body sau parțial. Masajul este o metodă ideală de a reduce tensiunea, îmbunătățește circulația, elimină durerile musculare și oferă o senzație de bine și relaxare. </Desc>
                <MyButton 
                    component={motion.LinkS}
                    variants={item} 
                    smooth={false} 
                    duration={500} 
                    spy={true} 
                    exact="true" 
                    offset={-100} 
                    to="contact"
                >
                    Programează-te <CalendarCheckFill/>
                </MyButton>
            </LeftSide>
            <RightSide>
                <Img  as={motion.img} 
                    initial={{opacity: 0, y: 100}} 
                    animate={{opacity: 1, y: 0}} 
                    transition={{delay: 1.3, duration: 1}} 
                    src={img1} alt="salon masaj timisoara" />
            </RightSide>
        </Container>
    )
}


const Container = styled.main`
    min-height: calc(100vh - 100px);
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${cover}) center / cover;
    background-attachment: fixed;
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
    @media screen and (max-width: 900px) {
        display: none;   
    }
`
const Img = styled.img`
    width: 100%;
    transform: rotate3d(30deg, 0deg, 30deg);
`