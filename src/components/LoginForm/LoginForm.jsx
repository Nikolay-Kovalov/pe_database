import Button from "../UI/Button/Button";
import { Form, FormInnerWrapper, Input, InputWrapper,Label, RecoveryLink, RegisterLink, RegisterLinkWrapper } from "./LoginForm.styled";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const LoginForm = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const {loading, login} = useLogin();
    

    const handleInputChange = (evt) => {
        switch (evt.target.name) {
          case "password": 
          setPassword(evt.target.value);
          return
       
        case "email": 
        setEmail(evt.target.value)
        return
        default: return
        
    }
}

    const handleSubmit = async (evt) => {
        evt.preventDefault();
      
        await login({email, password})
    }
    return (
        <Form onSubmit={handleSubmit}>
        <FormInnerWrapper>
        <InputWrapper>
            <Label htmlFor="">Пошта</Label>
        <Input onChange={handleInputChange} value={email} name="email" type="text" />
        </InputWrapper>
        <InputWrapper>
            <Label htmlFor="">Пароль</Label>
        <Input onChange={handleInputChange} value={password} name="password"  type="text" />
        </InputWrapper>
        <div>
        <RecoveryLink to="/">Забули пароль?</RecoveryLink>
                <RegisterLinkWrapper >
                <span>Ще не зареєстровані?</span>
                <RegisterLink to="/signup">Тисніть тут</RegisterLink>
                </RegisterLinkWrapper>
        </div>
        
        </FormInnerWrapper>
        <Button fs="20">Увійти</Button>
    </Form>
    )
}

export default LoginForm;