import styled from '@emotion/styled';
import { Link,NavLink } from 'react-router-dom';

export const LogoLink = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 60px;
height: 60px;
border-radius: 50%;
padding: 8px;
background-color: rgb(82, 46, 226);
color: white;
font-size: 10px;
`

export const HeaderTag = styled.header`

padding: 12px 0px;
border-bottom: 1px solid rgb(82, 46, 226);
margin-bottom: 12px;

`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
  width: 1320px;
  margin: 0 auto;
`

export const Navigation = styled.nav`
display: flex;
align-items: center;
gap: 24px;
`

export const HeaderInfoWrapper = styled.div`
display: flex;
gap: 12px;
align-items: center;
margin-left: 36px;
`

export const NavigationLink = styled(NavLink)`
color: ${({active}) => active ? "green" : "black"};

`