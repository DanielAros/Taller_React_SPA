import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard.js";
import Base from "../pages/index";
import Create from "../pages/Create";
import Update from "../pages/Update"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="/crear" element={<Create/>}/>
                    <Route path="actualizar/:id" element={<Update/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;