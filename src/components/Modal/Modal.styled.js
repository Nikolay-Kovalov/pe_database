import styled from '@emotion/styled';
import { IoMdClose } from "react-icons/io";

export const Backdrop = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.4);

`

export const ModalWindow = styled.div`
// width: 1320px;
// height: 620px;
position: relative;
background-color: white;
border-radius: 4px;
padding: 24px;
`

export const IconCloseBtn = styled(IoMdClose)`
position: absolute;
font-size: 20px;
cursor: pointer;
right: 16px;
top: 16px;
`