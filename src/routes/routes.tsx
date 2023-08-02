import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/home";

const Views = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Views;