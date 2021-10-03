import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


export default function Loading() {
    const variants = {
        visible: { opacity: 1 },
        invisible: { opacity: 0, pointerEvents: 'none'},
    }

    const circle = {
        small: {scale: 0},
        big: {scale: 1}
    }

    return (
        <Container as={motion.div} initial="visible" animate="invisible" variants={variants} transition={{ duration: 0.5,delay: 1}}>
            <motion.span initial="small" animate="big" variants={circle} transition={{duration: 1}}></motion.span>
        </Container>
    )
}


const Container = styled.div`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 1000;
    display: grid;
    place-content: center;
    >span {
        width: 250vw;
        height: 250vw;
        border-radius: 50%;
        background-color: var(--col);
    }
`
