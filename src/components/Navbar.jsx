import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
    height : 60px;
`

const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const Left = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    
`
const Language = styled.span`
    font-size : 14px;
    cursor : pointer;
`

const SearchContainer = styled.div`
    border : 1px solid lightgray;
    display : flex;
    align-items : center;
    margin-left : 25px;
    padding : 5px

`
const Input = styled.input`
    border : none;
`

const Right = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : flex-end;
`
const MenuItem = styled.div`
    font-size : 14px;
    cursor : pointer;
    margin-left : 25px;
`
const Center = styled.div`
    flex : 1;
    text-align : center
`
const Logo = styled.h1`
    font-weight : bold
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/> 
                    <SearchIcon style = {{color : "grey", fontSize : "16px"}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>OSAMA</Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>

                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon  />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar