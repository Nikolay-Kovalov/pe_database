import styled from "@emotion/styled";

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 12px;
`

export const SurnameFilterInput = styled.input`
 background-color: #f7f7f7;
border: 1px solid rgba(0,0,0,0.15);
height: 40px;
border-radius: 4px;
padding: 8px;
font-size: 20px;
&:focus-within{
outline: none;}
`

export const Fieldset = styled.fieldset`
border-color: rgba(0,0,0,0.15);
border-radius: 4px;
display: flex;
flex-direction: column;
padding: 8px
`

export const FieldsetTitle = styled.legend`
width: 208px;
padding-left: 4px;
`

export const RadioWrapper = styled.div`
display: flex;
gap: 4px;
align-items: center;
`

export const InputsWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

