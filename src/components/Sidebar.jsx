import React from 'react'
import {Link as LinkS} from "react-scroll"
import styled from 'styled-components';

export const Sidebar = ({menuOpen, setMenuOpen}) => {
    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }
    
    
    return (
        <Container className={menuOpen && "active"}>
            <ul>
                <li >
                    <MyLink onClick={handleClick} duration={500} spy={true} exact="true" offset={-100} to="acasa">Acasă</MyLink>
                </li>
                <li >
                    <MyLink onClick={handleClick} duration={500} spy={true} exact="true" offset={-100} to="despre">Despre</MyLink>
                </li>
                <li >
                    <MyLink onClick={handleClick} duration={500} spy={true} exact="true" offset={-100} to="preturi">Prețuri</MyLink>
                </li>
                <li >
                    <MyLink onClick={handleClick} duration={500} spy={true} exact="true" offset={-100} to="contact">Contact</MyLink>
                </li>
            </ul>
        </Container>
    )
}


const Container = styled.aside`
     width: 300px;
    height: 100vh;
    background-color: var(--cbd);
    position: fixed;
    top: 0;
    right: -300px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 1s ease;

    &.active {
        right: 0;
    }

    ul {
        list-style: none;
        font-size: 2rem;
        font-weight: 200;
        width: 60%;
        li {
            margin-bottom: 20px;
            cursor: pointer;
            a {
                text-decoration: none;
                color: white;
            }
            &:hover {
                font-weight: 500;
            }
        }
    }
`
const MyLink = styled(LinkS)`

`