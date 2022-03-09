import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
    display : flex;

`
const Left = styled.div`
    flex:1;
    display : flex;
    flex-direction : column;
    padding : 20px
`

const Logo = styled.h1``

const Desc = styled.p`
    margin : 20px 0px;
`

const SocialContainer = styled.div`
    display : flex;
`

const SocialIcon = styled.div`
    width : 40px;
    height : 40px;
    border-radius : 50%;
    color : white;
    background-color : #${props => props.color};
    display : flex;
    justify-content : center;
    align-items : center;
    margin-right : 20px;
`

const Center = styled.div`
    flex:1;
    padding : 20px
`

const Title = styled.h3`
    margin-bottom : 30px;
`;

const List = styled.ul`
    margin : 0;
    padding :0;
    list-style : none;
    display : flex;
    flex-wrap : wrap;

`;

const ListItem = styled.li`
    width : 50%;
    margin-bottom : 10px;
`;


const Right = styled.div`
    flex:1;
    padding : 20px;
    display : flex;
 justify-content : center;
 flex-flow : column;

`

const ContactItem = styled.div`
 margin-bottom : 20px;
 
`

const Payment = styled.img`
 width : 100%;
`



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>OSAMA</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nihil tenetur quisquam aut laudantium dolorem? Deserunt eum nemo</Desc>
            <SocialContainer>
                <SocialIcon color = "3B5999"><FacebookIcon/></SocialIcon>
                <SocialIcon color = "E4405F"><InstagramIcon/></SocialIcon>
                <SocialIcon color = "55ACEE"><TwitterIcon/></SocialIcon>
                <SocialIcon color = "E60023"><PinterestIcon/></SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
            <Title></Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>

            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem><AddLocationAltIcon style = {{marginRight : "10px"}}/> 622 Dixie Path, South London</ContactItem>
            <ContactItem><LocalPhoneIcon style = {{marginRight : "10px"}}/> 03302456783</ContactItem>
            <ContactItem><EmailIcon style = {{marginRight : "10px"}}/> contact@osama.dev</ContactItem>

            <Payment src = ""/>

        </Right>
    </Container>
  )
}

export default Footer