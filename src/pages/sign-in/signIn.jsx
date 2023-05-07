import {
    StyledTitle,
    StyledButton,
    StyledContainer,
    StyledSignInScreenWrapper,
    StyledDiv
  } from "./signIn.styled";
  import { Link } from "react-router-dom";
  import LabelInput from "../../components/label-input/labelInput";
  import { useState, useContext } from "react";
  
  
  const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
  
    return (
      <StyledSignInScreenWrapper>
        <StyledContainer>
        <StyledTitle> გაიარეთ ავტორიზაცია </StyledTitle>
          <StyledDiv>
            <LabelInput
              id={1}
              labelText="ფოსტა"
              type={"email"}
              name={"email-field"}
              value={email}
              onChange={onEmailChange}
            />
          </StyledDiv>
          <StyledDiv>
            <LabelInput
              id={2}
              labelText="პაროლი"
              type={"password"}
              name={"password-field"}
              value={password}
              onChange={onPasswordChange}
            />
          </StyledDiv>
           <div>
          <Link to={"/signup"}>რეგისტრაცია</Link>{" "}
        </div>
          
            <StyledButton>შესვლა</StyledButton>
          
        </StyledContainer>
      </StyledSignInScreenWrapper>
    );
  };
  
  export default SignIn;