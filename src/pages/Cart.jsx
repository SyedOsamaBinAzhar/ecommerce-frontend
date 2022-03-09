import styled, { isStyledComponent } from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Shoe from "../assets/home/shoe.jpg";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { mobile } from '../responsive';

const Container = styled.div``

const Wrapper = styled.div`
  padding : 20px;
  ${mobile({padding : "10px"})}

`

const Title = styled.h1`
  font-weight : 300;
  text-align : center;
`

const Top = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
  padding : 20px;
`

const TopTexts = styled.div`
  padding : 20px

`

const TopText = styled.span`
  text-decoration : underline;
  cursor : pointer;
  margin : 0px 10px;
  ${mobile({display : "none"})}

`


const TopButton = styled.button`
  padding : 10px;
  font-weight : 600;
  cursor : pointer;
  border : ${props => props.type === "filled" && "none"};
  background-color : ${props => props.type === "filled" ? "black" : "transparent"};
  color : ${props => props.type === "filled" && "white"};

`

const Bottom = styled.div`
  display : flex;
  justify-content : space-between;
  ${mobile({flexDirection : "column"})}

`

const Info = styled.div`
  flex : 3;
`

const Product = styled.div`
  display : flex;
  justify-content : space-between;
  ${mobile({flexDirection : "column"})}
`;

const ProductDetail = styled.div`
  display : flex;
  flex : 2;
`;

const Image = styled.img`
 width : 250px;
 height : 200px;
`;

const Details = styled.div`
  padding : 20px;
  display : flex;
  flex-direction : column;
  justify-content : space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width : 20px;
  height : 20px;
  border-radius : 50%;
  background-color : ${props => props.color}
`;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
  flex : 1;
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`;

const ProductAmountContainer = styled.div`
  display : flex;
  align-items : center;
  margin-bottom : 20px;
`
const ProductAmount = styled.div`
  font-size : 24px;
  margin : 10px
  ${mobile({margin : "5px 35px"})}

`
const ProductPrice = styled.div`
  font-size : 30px;
  font-weight : 400;
  ${mobile({marginBottom : "20px"})}

`

const Hr = styled.hr`
  background-color : #eee;
  border : none;
  height : 1px;
`

const Summary = styled.div`
  flex : 1;
  border : 0.5px solid lightgray;
  border-radius : 10px;
  padding : 20px;
  height : 50vh;
  ${mobile({width : "80%"})}

`

const SummaryTitle = styled.h1`
  font-weight : 200;
`

const SummaryItem = styled.div`
  margin : 30px 0px;
  display : flex;
  justify-content : space-between;
  font-weight : ${props => props.type === "total" && 500};
  font-size : ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width : 100%;
  padding : 10px;
  background-color : black;
  color : white;
  font-weight : 600;
`;



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
              <TopButton>Continue Shopping</TopButton>
              <TopTexts>
                <TopText>Shopping Bag (2)</TopText>
                <TopText>Your Wish List.</TopText>
              </TopTexts>
              <TopButton type = "filled">
                 Checkout Now
              </TopButton>
            </Top>

            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src = {Shoe}/>
                    <Details>
                      <ProductName><b>Product:</b>JESSE THUNDER SHIRT</ProductName>
                      <ProductId><b>ID:</b>12345678890</ProductId>
                      <ProductColor color = "black" />
                      <ProductSize><b>Size:</b> 37.5</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <AddBoxIcon/>
                        <ProductAmount>2</ProductAmount>
                      <IndeterminateCheckBoxIcon/>
                    </ProductAmountContainer>
                    <ProductPrice>$300</ProductPrice>
                  </PriceDetail>
                </Product>

                <Hr/>

                <Product>
                  <ProductDetail>
                    <Image src = {Shoe}/>
                    <Details>
                      <ProductName><b>Product:</b>JESSE THUNDER SHIRT</ProductName>
                      <ProductId><b>ID:</b>123456788</ProductId>
                      <ProductColor color = "black" />
                      <ProductSize><b>Size:</b> 37.5</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <AddBoxIcon/>
                        <ProductAmount>2</ProductAmount>
                      <IndeterminateCheckBoxIcon/>
                    </ProductAmountContainer>
                    <ProductPrice>$300</ProductPrice>
                  </PriceDetail>
                </Product>
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal:</SummaryItemText>
                  <SummaryItemPrice>$80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping:</SummaryItemText>
                  <SummaryItemPrice>$5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount:</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type = "total">
                  <SummaryItemText>Total:</SummaryItemText>
                  <SummaryItemPrice>$80</SummaryItemPrice>
                </SummaryItem>

                <Button>CHECKOUT NOW</Button>
              </Summary>
              
            </Bottom>

        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart