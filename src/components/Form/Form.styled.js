import styled from '@emotion/styled';

export const MainForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
  background-color: rgb(250, 250, 250);
box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.25);

border-radius: 4px;
width: 96%;
height: 672px;
margin: 0 auto;
padding: 24px;`

export const InputWrapper = styled.div`
display: flex;
min-height: 84px;
gap: 4px;
flex-direction: column;
`

export const RateInputWrapper = styled.div`
display: flex;
min-height: 84px;
gap: 4px;
flex-direction: column;
`

export const TextAreaWrapper = styled.div`
display: flex;
gap: 4px;
flex-direction: column;
`

export const Label = styled.label`
margin-left: 4px;
font-weight: 600;
color: rgb(37,37,37);
`

export const Input = styled.input`
 background-color: rgb(250, 250, 250);
 width: ${props => props.width}px;
height: 40px;
border-radius: 4px;
padding: 8px;
font-size: 20px;
border: 1px solid rgba(0,0,0,0.15);
&:focus-within{
outline: 2px solid rgba(82, 46, 226, 0.3)}
`

export const TextArea = styled.textarea`
resize: none;
 background-color: rgb(250, 250, 250);
min-height: ${props => props.height}px;
border-radius: 4px;
border: 1px solid rgba(0,0,0,0.15);
padding: 8px;
font-size: 20px;
&:focus-within{
outline: 2px solid rgba(82, 46, 226, 0.3)}
`

export const SubmitButton = styled.button`

color: white;
font-size: 20px;
width: 140px;
height: 40px;
border: none;
border-radius: 4px;
background-color: rgb(82, 46, 226);
margin-left: 12px;
cursor: pointer;

`

export const FormBlocksWrapper = styled.div`
display: flex;
flex-direction: column;
// gap: 12px;
padding: 12px;
max-height: 522px;
`

export const FormInnerWrapper = styled.div`
display: flex;
justify-content: space-between;
`
export const RadioWrapper = styled.div`
margin-bottom: 12px;
`

export const LocationWrapper = styled.fieldset`
border-color: rgba(0,0,0,0.15);
min-height: 542px;
border-radius: 4px;
display: flex;
flex-direction: column;
// gap: 12px;
padding: 12px
`
export const LocationWrapperTitle = styled.legend`
width: ${props => props.width}px;
padding-left:8px;
font-weight: 600;
color: rgb(37,37,37);
`

export const Select = styled.select`
  appearance: none;
  background-color: rgb(250, 250, 250);
height: 40px;
border-radius: 4px;
padding: 8px;
font-size: 20px;
border: 1px solid rgba(0,0,0,0.15);
`
export const TaxRateWrapper = styled.div`
min-height: 84px;
display: flex;
justify-content: space-between;
`

export const ErrorInputText = styled.p`
color: red;
font-size: 12px;
padding-left: 4px;
`;