import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = () => {
    return (
        <div>
            <header className="fixed w-full flex justify-center items-center">
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="mt-auto z-50 bg-yellow-400">
                <Footer />
            </footer>
        </div>
    )
}

export default Layout