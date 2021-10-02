import React from 'react'
import styled from 'styled-components'
import divider from "./images/divider2.png"
import {Arrow90degLeft} from "@styled-icons/bootstrap/Arrow90degLeft"
import logo from "./images/denisa-logo.svg"
import insta from "./images/instagram.png"
import { LocationPin } from '@styled-icons/entypo/LocationPin'
import { Whatsapp } from '@styled-icons/remix-fill/Whatsapp'
import { Sms } from '@styled-icons/material/Sms'
import bg3 from "./images/bg3.png"

export const Footer = () => {
    return (
        <Container>
            <BTT onClick={() => window.scrollTo(0, 0)}>Sus <Arrow90degLeft/></BTT>
            <Divider src={divider} alt="divider" />
            <MiddleSide>
                <Left>
                    <P><Whatsapp/> 0726 439 597</P>
                    <P><Sms/> 0726 439 597</P>
                    <P><LocationPin/> Calea Aradului, Timișoara, Timiș</P>
                </Left>
                <P><b>Program: </b>L-V 9-16</P>
            </MiddleSide>
            <BottomSide>
                <Logo src={logo} alt="Salon Denisa logo"/>
                <Small>powered by &copy;{new Date().getFullYear()} codmitu.com</Small>
                <Social href="https://instagram.com" target="_blank">
                    <Img src={insta} alt="instagram logo"/><span>Instagram</span>
                </Social>
                <Small2>powered by &copy;{new Date().getFullYear()} codmitu.com</Small2>
            </BottomSide>
        </Container>
    )
}


const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 300px;
    background: url(${bg3}) no-repeat bottom 0 left 50%/cover;
    color: white;
    background-attachment: fixed;
`
const BTT = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    color: whitesmoke;
    background-color: #2b2b2b52;
    &:hover {
        background-color: #00000088;
    }
    >svg {
        transform: rotateZ(90deg);
        margin-bottom: 10px;
    }
`
const Divider = styled.img`
    width: 150px;
    margin: 30px;
`
const MiddleSide = styled.div`
    width: 1000px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: left;
    font-size: var(--xxsf);
`
const Left = styled.div`
    line-height: 1.7;
`
const P = styled.p`

`
const BottomSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    padding: 2vh 5vw;
    max-width: 100%;
    flex-wrap: wrap;
`
const Logo = styled.img`

`
const Small = styled.small`
    font-size: var(--xxsf);
    color: lightgray;
    @media screen and (max-width: 500px) {
        display: none;
    }
`
const Small2 = styled.small`
    font-size: var(--xxsf);
    color: lightgray;
    margin: 10px auto;
    width: 100%;
    @media screen and (min-width: 500px) {
        display: none;
    }
`
const Social = styled.a`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    color: white;
    text-decoration: none;
    &:hover {
        color: black;
    }
`
const Img = styled.img`
    height: 30px;
`