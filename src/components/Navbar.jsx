import React from 'react'
import styled from "styled-components"
import {Link as LinkS} from "react-scroll"
import { LocationPin } from '@styled-icons/entypo/LocationPin'
import { Whatsapp } from '@styled-icons/remix-fill/Whatsapp'
import logo from "./images/denisa-logo.svg"


export const Navbar = ({menuOpen, setMenuOpen}) => {
    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <Container>
            <TopSide>
                <Info>
                    <a href="https://pickmi.online" target="_blank">PickMi by codmitu</a>
                </Info>
                <Info>
                    <LocationPin/>&nbsp; Calea Aradului, Tmișoara
                </Info>
                <Info>
                    <Whatsapp />&nbsp;  0726 439 597
                </Info>
            </TopSide>
            <BottomSide>
                <Logo src={logo} alt="salon masaj ayervedic timisoara"/>
                <LinksWrapp>
                    <MyLink  duration={500} spy={true} exact="true" offset={-100} to="acasa">Acasă</MyLink>
                    <MyLink  duration={500} spy={true} exact="true" offset={-100} to="despre">Despre</MyLink>
                    <MyLink  duration={500} spy={true} exact="true" offset={-100} to="preturi">Prețuri</MyLink>
                    <MyLink  duration={500} spy={true} exact="true" offset={-100} to="contact">Contact</MyLink>
                </LinksWrapp>
                <Menu className={menuOpen && "active"}>
                    <div className="hamburger" onClick={handleClick}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </Menu>
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
    font-size: var(--xsf);
`
const Info = styled.small`
    display: flex;
    align-items: center;
    margin-right: 50px;
    a {
        position: fixed;
        top: 7px;
        left: 50px;
        color: #fff;
    }
    @media screen and (max-width: 500px) {
        margin-right: 20px;
        a {
            left: 20px;
        }
    }
    @media screen and (max-width: 400px) {
        a {
            visibility: hidden;
        }
    }
`
const BottomSide = styled.div`
    display: flex;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 5px 5px #0000001d;
    background-color: white;
    padding: 0 5vw;
`
const Logo = styled.img`
    height: 70px;
    max-width: 30vw;
`
const LinksWrapp = styled.div`
    display: flex;
    gap: 5vw;
    @media screen and (max-width: 600px) {
        display: none;
    }
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
const Menu = styled.menu`
     .hamburger {
        width: 32px;
        height: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        span {
            width: 100%;
            height: 3px;
            background-color: var(--cbd);
            transform-origin: left;
            transition: all 1s ease;
        }
    }
    &.active {
        /* background-color: #15023a;
        color: white; */
        .hamburger {
            span {
                &:first-child {
                    background-color: var(--cbd);
                    transform: rotate(45deg);
                }
                &:nth-child(2) {
                    opacity: 0;
                }
                &:last-child {
                    background-color: var(--cbd);
                    transform: rotate(-45deg);
                }
            }
        }
    }
    @media screen and (min-width: 600px) {
        display: none;
    }
`