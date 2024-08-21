import styled from '@emotion/styled';

export const Card = styled.li`
width: 298px;
height: 400px;
padding: 24px;
border-radius: 4px;
list-style: none;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.25);
cursor: pointer;
&:hover {
background-color: #F7F7F7;}
` 

export const CardTitle = styled.h2`
width: 250px;
word-break: break-word;
margin-bottom: 4px;
font-size: 32px;
color: rgb(87,87,87);
`

export const TaxCode = styled.p`
font-size: 20px;
margin-bottom: 16px;
color: rgb(111,111,111);
`

export const Phone = styled.p`
font-size: 20px;
font-weight: 700;
margin-bottom: 8px;
color: rgb(87,87,87);
`

export const Email = styled.p`
font-size: 20px;
font-weight: 700;
margin-bottom: 8px;
color: rgb(87,87,87);
`

export const BtnsWrapper = styled.div`
display: flex;
justify-content: space-between;
`

export const Registration = styled.p`
font-size: 18px;
margin-bottom: 8px;
color: rgb(87,87,87);
`

export const Address = styled.p`
font-size: 18px;
height: 66px;
margin-bottom: 8px;
color: rgb(87,87,87);
margin-bottom: 16px;
`

export const HighlightedSpan = styled.span`
background-color: : "green";
`