import LoginForm from "../../components/LoginForm/LoginForm";
import { Logo, Rights, Section } from "./LoginPage.styled";

const LoginPage = () => {
    return (
        <Section>
            <Logo><p>Lawyer partners</p> 
            <Rights>© 2024. Усі права захищєні.</Rights>
            </Logo>
<LoginForm/>
        </Section>
    )
}

export default LoginPage;