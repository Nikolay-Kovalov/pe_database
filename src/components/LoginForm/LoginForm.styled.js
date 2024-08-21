import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Form= styled.form`
display: flex;
background-color: #f7f7f7;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 400px;
height: 340px;
box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.1);
padding: 24px;
border-radius: 4px;
`

export const FormInnerWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
width: 100%;
`

export const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`

export const Input = styled.input`
background-color: #f7f7f7;
height: 36px;
border: 1px solid rgba(0,0,0,0.2);
padding: 8px;
border-radius: 4px;
font-size: 16px;
&:focus-within {
outline: none;
}
`

export const Label = styled.label`
padding-left: 8px;
`

export const RecoveryLink = styled(Link)`
    width: 166px;
    color:  rgb(82, 46, 226);
    display: inline-block;
    padding-bottom: 2px;
    border-bottom:  rgb(82, 46, 226);
` 

export const RegisterLinkWrapper = styled.div`
   display: flex;
    gap: 12px;
    margin-top: 12px;
`

export const RegisterLink = styled(Link)`
  
    color:  rgb(82, 46, 226);
    display: inline-block;
    padding-bottom: 2px;
    border-bottom: 1px solid rgb(82, 46, 226);
`