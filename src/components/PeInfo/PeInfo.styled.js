import styled from '@emotion/styled';

export const MainInfoWrapper = styled.div`
// padding: 24px
`

export const MainInfoForm = styled.form`
// padding: 24px
`

export const InfoWrapper = styled.div`
display: flex;
// justify-content: space-between;
gap: 4px;
`

export const FieldInfoTitle = styled.span`
font-size: 20px;
font-weight: 500;
`

export const FieldInfo = styled.div`
display: flex;
height: 57px;
flex-direction: column;
gap: 8px;
`

export const FieldInfoTextArea = styled.div`
display: flex;
height: 107px;
flex-direction: column;
gap: 4px;
`

export const FieldInfoArea = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
height: 96px;
`

export const FieldInfoText = styled.span`
font-size: 16px;
`

export const FieldInfoInput = styled.input`
webkit-appearance: none;
appearance: none;
font-family: "Montserrat", sans-serif;
padding: 4px;
padding-left: 0;
padding-top: 0;
border-radius: 4px;
font-size: 16px;
border: none;
border-bottom: 1px solid rgba(0,0,0,0.15);
transition: all 0.3s linear;
&:focus-within{
outline: none;
border-bottom: 2px solid rgba(82, 46, 226, 0.3)
`

export const InfoTitle = styled.h1`
margin-bottom: 24px;
font-size: 36px;
`

export const Wrapper = styled.div`
padding: 8px;
display: flex;
flex-direction: column;
gap: 12px;
width: 320px;
`

export const BtnsCtrlWrapper = styled.div`
margin-top: 48px;
display: flex;
align-items: center;
justify-content: flex-end;
gap: 24px;

`

export const LoadingWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const Loader = styled.p`
font-size: 40px;
`

export const TitleInputsWrapper = styled.div`
display: flex;
gap: 12px;
`

export const TextareaInput = styled.textarea`
height: 96px;
padding: 4px;
border-radius: 4px;
font-size: 16px;
border: 1px solid rgba(0,0,0,0.15);
resize: none;
&:focus-within{
outline: 2px solid rgba(82, 46, 226, 0.3)}
`