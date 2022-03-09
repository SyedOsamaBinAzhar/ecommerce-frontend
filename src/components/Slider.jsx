import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import coverOne from "../assets/home/coverOne.jpg";
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
    width : 100%;
    height : 90vh;
    display : flex;
    position : relative;
    background : #F8F8F8;
    overflow-x : hidden;

`

const Arrow = styled.div`
    width : 50px;
    height : 50px;
    background-color : #fff7f7;
    border-radius : 50px;
    display : flex;
    justify-content : center;
    align-items : center;
    position : absolute;
    top : 0;
    bottom : 0;
    left : ${props => props.direction === "left" && "10px"};
    right : ${props => props.direction === "right" && "10px"};
    cursor : pointer;
    margin : auto;
    opacity : 0.5;
    z-index : 2;
    border : 1px solid black;

`
const Wrapper = styled.div`
    height : 100%;
    display : flex;
    transform : translateX(${props => props.slideIndex * -100}vw);
    transition : all 1s ease
`
const Slide = styled.div`
    display : flex;
    align-items : center;
    height : 100%;
    width : 100vw;
    background-color : ${props => props.bg}
`

const ImgContainer = styled.div`
    flex : 1.5;
    height : 100%;
    width : 100vw;
`
const Image = styled.img`
    height : 100%;
    width : 100%;
`
const InfoContainer = styled.div`
    flex : 1;
    padding : 50px 20px;
`

const Title = styled.h1`
    font-size : 70px;

`
const Description = styled.p`
    margin : 50px 0px;
    font-size : 20px;
    font-weight : 500;
    letter-spacing : 3px;
`
const Button = styled.button`
    padding : 10px 30px;
    font-size : 20px;
    background-color : transparent;
    cursor : pointer;
    border-radius : 20px;
`



const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if(direction === "left"){
        //if slide index value is greater than 0 so decerement else the value is 0 so onclick result should be 2
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }  

  return (
    <Container>
        <Arrow direction = "left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>

        <Wrapper slideIndex = {slideIndex}>
            {
                sliderItems.map( item => (
                    <Slide bg="#F8F8F8" key = {item.id}>
                    <ImgContainer>
                        <Image src = {item.img} />
                    </ImgContainer>

                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                ))
            }
        </Wrapper>
        
        
        <Arrow direction = "right" onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider