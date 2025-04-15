import { Outlet } from "react-router-dom"
import Footer from "../component/Footer"
import Header from "../component/Header"
import { Container, Row } from "react-bootstrap"

const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Row>
                        <Outlet />
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default MainLayout