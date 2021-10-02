import React from 'react'
import styled from 'styled-components'
import bg1 from "./images/bg1.png"
import { Service } from './Service';
import {data} from './data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const Prices = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 10000,
        onEdge: false,
        arrows: true,
        fade: false,
        pauseOnHover: false,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: false,
            }
            }
          ]
    };

    return (
        <Container id="preturi">
            <Title>Prețuri și Servicii</Title>
            <Wrapper>
                <Slider {...settings}>
                    {data.map(item => (
                        <Service key={item.id} item={item}/>
                    ))}
                </Slider>
            </Wrapper>
        </Container>
    )
}

const Container= styled.article`
    width: 100%;
    min-height: calc(100vh - 100px);
    background: url(${bg1}) center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
    padding: 5vw 0;
`
const Title = styled.h2`
    font-size: var(--mf);
    font-weight: 400;
    margin-bottom: var(--sf);
    align-self: flex-start;
    margin-left: 10vw;
`
const Wrapper = styled.div`
    width: 100%;
`
