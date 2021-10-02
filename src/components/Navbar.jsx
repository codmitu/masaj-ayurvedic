import React from 'react'
import styled from "styled-components"
import {Link as LinkS} from "react-scroll"
import { LocationPin } from '@styled-icons/entypo/LocationPin'
import { Whatsapp } from '@styled-icons/remix-fill/Whatsapp'
import logo from "./images/denisa-logo.svg"


export const Navbar = () => {
    return (
        <Container>
            <TopSide>
                <Info>
                    <LocationPin/>&nbsp; Calea Aradului, Tmișoara
                </Info>
                <Info>
                    <Whatsapp />&nbsp;  0726 439 597
                </Info>
            </TopSide>
            <BottomSide>
                <Logo src={logo} alt="salon masaj denisa timisoara"/>
                <LinksWrapp>
                    <MyLink  duration={500} spy={true} exact="true" offset={-100} to="acasa">Acasă</MyLink>
                    <MyLink  duration={500} spy={true} exact="true" offset={-100} to="despre">Despre</MyLink>
                    <MyLink  duration={500} spy={true} exact="true" offset={-100} to="preturi">Prețuri</MyLink>
                    <MyLink  duration={500} spy={true} exact="true" offset={-100} to="contact">Contact</MyLink>
                </LinksWrapp>
            </BottomSide>
        </Container>
    )
}

const Container = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 69;
`
const TopSide = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #252525;
    color: white;
`
const Info = styled.small`
    display: flex;
    align-items: center;
    margin-right: 50px;
`
const BottomSide = styled.div`
    display: flex;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 5px 5px #0000001d;
    background-color: white;
`
const Logo = styled.img`
    margin-left: 100px;
    height: 70px;
`
const LinksWrapp = styled.div`
    display: flex;
    gap: 5vw;
    margin-right: 100px;
`
const MyLink = styled(LinkS)`
    cursor: pointer;
    &:hover {
        color: var(--col);
    }
    &.active {
        border-bottom: 1px solid var(--col);
        color: var(--col);
    }
`
