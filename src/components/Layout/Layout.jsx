import { Outlet } from "react-router-dom";
import Header from "../Header/Header"
import { Container } from "./Layout.styled";
import { Suspense } from "react";

const Layout = () => {
return(
    <>
      <Header/>
    <Container>
        <Suspense>
        <Outlet/>
        </Suspense>
    </Container>
    </>
)
}

export default Layout;