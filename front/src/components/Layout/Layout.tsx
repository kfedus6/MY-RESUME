import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = () => {
    return (
        <div>
            <header className="fixed w-full shadow-md flex justify-center items-center bg-slate-50">
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout