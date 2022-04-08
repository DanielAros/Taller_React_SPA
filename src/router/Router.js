import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Base from "../pages/index"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;