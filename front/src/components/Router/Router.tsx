import { Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../../pages/Home"
import Error from "../../pages/Error"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    )
}

export default Router