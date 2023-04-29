import {
    StyledContainer,
    StyledButton,
    StyledSignupScreenWrapper,
    StyledTitle,
    StyledDiv
} from "./signUp.styled";
import LabelInput from "../../components/label-input/labelInput";
import { useState } from "react";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onNameChange = (e) => setName(e.target.value);
    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
    const onRepeatPasswordChange = (e) => setRepeatPassword(e.target.value);

    
    return (
    <StyledSignupScreenWrapper>
        <StyledContainer>
        <StyledTitle> გაიარეთ რეგისტრაცია </StyledTitle>
        <StyledDiv>
        <LabelInput
            id={0}
            labelText="სახელი"
            type={"email"}
            name={"name-field"}
            value={name}
            onChange={onNameChange}
            placeholder={"სახელი"}
            />
            </StyledDiv>
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
            <StyledDiv>

        <LabelInput
            id={3}
            labelText="გაიმეორეთ პაროლი"
            type={"password"}
            name={"password-field"}
            value={repeatPassword}
            onChange={onRepeatPasswordChange}
            />
            </StyledDiv>
        <StyledButton>რეგისტრაცია</StyledButton>
        </StyledContainer>
    </StyledSignupScreenWrapper>
    );
};

export default SignUp;
