import { NavLink } from "react-router-dom";
import { LogoLink, HeaderTag, Navigation, HeaderInfoWrapper, Container, NavigationLink } from "./Header.styled";
import { useAuthContext } from "../../context/AuthContext";
import Button from "../UI/Button/Button";
import useLogout from "../../hooks/useLogout";


const Header = () => {
    const {authUser} = useAuthContext()
    
    const {logout} = useLogout();
    return (
        <>
        {authUser && <>
             <HeaderTag>
                <Container>
            <LogoLink to='/'><span>Lawyer</span><span>Partners</span></LogoLink>
            <Navigation>
                <NavigationLink to="/">Всі підприємці</NavigationLink>
                <NavigationLink to="/addform">Додати підприємця</NavigationLink>
                <HeaderInfoWrapper>
                    <p>Вітаємо, {authUser.name}!</p>
                <Button fs="20" onClick={logout}>Вийти</Button>
                </HeaderInfoWrapper>
            </Navigation>
            </Container>
        </HeaderTag>
            </>}
            </>
        
          
          
       
    )
}

export default Header;