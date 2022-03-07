import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import coverOne from "../assets/home/coverOne.jpg";

const Container = styled.div`
    width : 100%;
    height : 90vh;
    display : flex;
    position : relative;
    background : #F8F8F8;
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

`
const Wrapper = styled.div`
    height : 100%
`
const Slide = styled.div`
    display : flex;
    align-items : center;
    height : 100%;
    width : 100%;
`
const ImgContainer = styled.div`
    flex : 1.5;
    height : 100%;
    width : 100%;
`
const Image = styled.img`
    height : 100%;
    width : 100%;
`
const InfoContainer = styled.div`
    flex : 1;
    padding : 50px 20px;
    border : 1px solid black;
`

const Title = styled.h1`
    font-size : 70px;
    border : 1px solid black;

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
  return (
    <Container>
        <Arrow direction = "left">
            <ArrowLeftOutlinedIcon/>
        </Arrow>

        
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src = {coverOne} />
                    </ImgContainer>

                    <InfoContainer>
                        <Title>Summer Sale</Title>
                        <Description>Get Flat 30% Off On New Arrivals.</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
        
        
        <Arrow direction = "right">
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider