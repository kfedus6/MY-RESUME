import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useEffect, useState } from "react"

const Layout = () => {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })
    }, [])

    return (
        <div>
            <header className={scroll > 50 ? "transition duration-300 ease-in fixed w-full flex justify-center items-center shadow-xl bg-white z-50" : "fixed w-full flex justify-center items-center transition duration-300 ease-in"}>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="mt-auto z-50 bg-yellow-400">
                <Footer />
            </footer>
        </div >
    )
}

export default Layout