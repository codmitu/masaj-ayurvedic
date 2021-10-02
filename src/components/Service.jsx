import React from 'react'
import styled from 'styled-components'

export const Service = ({item}) => {
    return (
        <Container style={{background: `url(${item.image}) center/cover`}}>
            <Title>{item.title}</Title>
            <Wrapper>
                <Desc>{item.desc.map((li, i) => (
                    <Li key={i}>{li}</Li>
                ))}
                </Desc>
                <RightSide>
                    <P><i>Preț: </i> {item.price}</P>
                    <P><i>Timp: </i> {item.time}</P>
                    <Ul><i>Zone: </i> <span>{item.zones.map((l, i) => (
                        <li key={i}>{l}</li>
                    ))}</span>
                    </Ul>
                </RightSide>
            </Wrapper>
        </Container>
    )
}


const Container = styled.div`
    max-width: 500px;
    height: 400px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    border: 3px solid brown;
    margin: 10px;
`
const Title = styled.h3`
    font-weight: 300;
    font-family: var(--fsd);
    font-size: 2rem;
    display: grid;
    place-content: center;
    height: 100%;
    color: white;
    `
const Wrapper = styled.div`
    display: flex;
    height: 60%;
    background-color: #ffffffce;
    padding: 20px 20px 30px;
    box-sizing: content-box;
    gap: 20px;
`
const Desc = styled.ul`
    height: 400px;
    text-align: justify;
    font-size: var(--xxsf);
    flex: 2;
    overflow: scroll;
    padding-right: 10px;
    border-right: 1px solid grey;
    &::-webkit-scrollbar {
        width: 0px;
    }
`
const Li = styled.li`
    margin-bottom: 20px;
    text-indent: 20px;
`
const RightSide = styled.div`
    flex: 1;
`
const P = styled.p`
    margin: 10px 0;
    padding-bottom: 10px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    font-size: var(--xsf);
`
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: "⚛";
    line-height: 1.5;
    >span >li {
        color: var(--cbd);
    }
`