import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import jacket1 from "../assets/home/jacket1.jpeg";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding : 50px;
    display : flex;
    ${mobile({padding : "10px", flexDirection : "column"})}

`;

const ImageContainer = styled.div`
    flex : 1;
`;

const Image = styled.img`
    width : 80%;
    height : 90vh;
    object-fit : cover;
    ${mobile({height : "60vh", width : "100%"})}

`;

const InfoContainer = styled.div`
    flex : 1;
    paddig : 0px 50px;
    ${mobile({display : "flex", justifyContent : "center", alignItems : "center", flexDirection : "column"})}
    
`;

const Title = styled.h1`
    font-weight : 200;
    ${mobile({textAlign : "center"})}

`;

const Desc = styled.p`
    margin : 20px 0px;
    ${mobile({textAlign : "center"})}

`;

const Price = styled.span`
    font-weight : 100;
    font-size : 40px;
    
`;

const FilterContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 50%;
    margin: 30px 0px;
`

const Filter = styled.div`
    display : flex;
    align-items : center;
`

const FilterTitle = styled.span`
    font-size : 20px;
    font-weight : 200;
`

const FilterColor = styled.div`
    width : 20px;
    height : 20px;
    border-radius : 50%;
    background-color : ${props => props.color};
    margin : 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left : 10px;
    padding : 10px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width : 50%;
    display : flex;
    align-items : center;
    justify-content : space-between;
    ${mobile({display : "flex", justifyContent : "center", alignItems : "center", flexDirection : "column"})}

`

const AmountContainer = styled.div`
    display : flex;
    align-items : center;
    font-weight : 700;
`

const Amount = styled.span`
    width : 30px;
    height : 30px;
    border-radius : 10px;
    border : 1px solid teal;
    display : flex;
    justify-content : center;
    align-items : center;
`

const Button = styled.button`
    padding : 15px;
    border : 2px solid teal;
    background-color : white;
    cursor : pointer;
    font-weight : 500;
    ${mobile({marginTop : "30px"})}
    
    
    &:hover{
        background-color : #f8f8f4;
    }
`




const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src = {jacket1} />
            </ImageContainer>
            <InfoContainer>
                <Title>Jacket</Title>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus assumenda, accusamus, ut facilis ullam nulla doloribus officia nisi quam aliquid enim ex deleniti qui ducimus atque quibusdam dolorum ab beatae.</Desc>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color = "black" />
                        <FilterColor color = "blue" />
                        <FilterColor color = "gray" />
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>

                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                        <AmountContainer></AmountContainer>
                        <RemoveIcon/>
                        <Amount>1</Amount>
                        <AddIcon/>
                        <Button>Add To Cart</Button>
                    </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product