import React from "react";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/login"
                 element={<Login />} />
            <Route path="/register"
             element={<Register />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App