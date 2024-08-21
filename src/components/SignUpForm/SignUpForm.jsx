import { useState } from "react";
import Button from "../UI/Button/Button"
import { Form, FormInnerWrapper, Input, InputWrapper,Label } from "./SignUpForm.styled";
import useSignup from "../../hooks/useSignup";

const SignUpForm = () => {
    const [inputs, setInputs] = useState({
        name: "",
        surname: "",
        email: "",
        password: ""
    })

    const {loading, signup} = useSignup();

    const handleInputsChange = (evt) => {
      setInputs({...inputs, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await signup(inputs)
        console.log(inputs)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormInnerWrapper>
            <InputWrapper>
                <Label htmlFor="">Імʼя</Label>
            <Input onChange={handleInputsChange} type="text" name="name" value={inputs.name}/>
            </InputWrapper>
            
            <InputWrapper>
                <Label htmlFor="">Прізвище</Label>
            <Input onChange={handleInputsChange} type="text" name="surname" value={inputs.surname}/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="">Пошта</Label>
            <Input onChange={handleInputsChange} type="text" name="email" value={inputs.email}/>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor="">Пароль</Label>
            <Input onChange={handleInputsChange} type="text" name="password" value={inputs.password}/>
            </InputWrapper>
            </FormInnerWrapper>
            <Button fs="20">Зареєструватись</Button>
        </Form>
    )
}

export default SignUpForm;