import styled from "styled-components"
import signupImg from "../assets/home/signupImg.jpeg";

const Container = styled.div`
  width : 100vw;
  height : 100vh;
  display : flex;
  justify-content : center;
  align-items : center;
  background : linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${signupImg})
`

const Wrapper = styled.div`
  padding : 20px;
  width : 40%;
  background-color : white;

`

const Title = styled.form`
  font-size : 24px;
  font-weight : 300;

`

const Form = styled.h1`
  display : flex;
  flex-wrap : wrap;
`

const Input = styled.input`
  flex : 1;
  min-width : 40%;
  margin : 20px 10px 0px 0px;
  padding : 10px;
`

const Agreement = styled.span`
  font-size : 12px;
  margin : 20px 0px;
`

const Button = styled.button`
  width : 40%;
  border : none;
  padding : 15px 20px;
  background-color : teal;
  color : white;
  cursor : pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder = "name"/>
          <Input placeholder = "last name"/>
          <Input placeholder = "email"/>
          <Input placeholder = "username"/>
          <Input placeholder = "password"/>
          <Input placeholder = "confirm password"/>
          <Agreement>By creating an account I consent to the processing of my personal data inaccordance with the PRIVACY POLICY.</Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register