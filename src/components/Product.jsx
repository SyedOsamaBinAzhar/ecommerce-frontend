import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Info = styled.div`
    opacity : 0;
    width : 100%;
    height : 100%;
    position : absolute;
    left : 0;
    top : 0;
    background-color : rgba(0,0,0,0.2);
    z-index : 3;
    display : flex;
    justify-content : center;
    align-items : center;
    transition : 0.5s all ease;
`

const Container = styled.div`
    flex : 1;
    margin : 5px;
    min-width : 280px;
    height : 380px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #f5fbfd;
    position : relative;
    cursor : pointer;

    &:hover ${Info}{
        opacity : 1;
    }
`
const Circle = styled.div`
    width : 200px;
    height : 200px;
    border-radius : 50%;
    position : absolute;
`

const Image = styled.img`
    height : 75%;
    z-index : 2;
`

const Icon = styled.div`
    height : 40px;
    cursor : pointer;
    width : 40px;
    border-radius : 50%;
    background-color : white;
    display : flex;
    align-items : center;
    justify-content : center;
    margin : 10px;
    &:hover {
        background-color : #e9f5f5;
        transform : scale(1.1);
        transition : all 0.5s ease
    }
`


const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src = {item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product