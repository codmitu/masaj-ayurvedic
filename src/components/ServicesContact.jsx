import React from 'react'
import { Contact } from './Contact'
import { Prices } from './Prices'
import bg1 from "./images/bg1.png"
import styled from 'styled-components'

export const ServicesContact = () => {
    return (
        <Container>
            <Prices/>
            <Contact/>
        </Container>
    )
}


const Container = styled.section`
    background: url(${bg1}) bottom left/cover;
`