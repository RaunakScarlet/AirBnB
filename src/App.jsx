import {  Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import AppLayout from "./AppLayout";
import IndexPage from "./components/IndexPage";
import Register from "./components/Register";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<IndexPage />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    );
}

export default App;
