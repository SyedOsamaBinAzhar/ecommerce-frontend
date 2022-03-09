import styled from "styled-components"
import loginImg from "../assets/home/loginImg.jpg";
import {mobile} from "../responsive";

const Container = styled.div`
  width : 100vw;
  height : 100vh;
  display : flex;
  justify-content : center;
  align-items : center;
  background : linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.5)), url(${loginImg});
  background-size : cover;

`

const Wrapper = styled.div`
  padding : 20px;
  width : 25%;
  background-color : white;
  ${mobile({width : "75%"})}

`

const Title = styled.form`
  font-size : 24px;
  font-weight : 300;

`

const Form = styled.h1`
  display : flex;
  flex-direction : column;
`

const Input = styled.input`
  flex : 1;
  min-width : 40%;
  margin : 10px 0px;
  padding : 10px;
`

const Button = styled.button`
  width : 40%;
  border : none;
  padding : 15px 20px;
  background-color : teal;
  color : white;
  cursor : pointer;
  margin-bottom  10px;
`
const Link = styled.a`
    margin : 15px 0px;
    font-size : 12px;
    text-decoration : underline;
    cursor : pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN.</Title>
        <Form>
          <Input placeholder = "username"/>
          <Input placeholder = "password"/>
          <Button>CREATE</Button>
          <Link>Forgot Password?</Link>
          <Link>Create A New Account.</Link>

        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login