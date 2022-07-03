import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import LoginPage from "./components/LoginPage";
import SignPage from "./components/SignPage";
import RegistersPage from "./components/RegistersPage";
import NewEntryPage from "./components/NewEntryPage";
import NewExitPage from "./components/NewExitPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import React from "react";



function App() {

    const [token, setToken] = React.useState("");
    const [name, setName] = React.useState("");

    return (
        <UserContext.Provider value={{ token, setToken, name, setName }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/sign-in" element={<SignPage />} />
                    <Route path="/registers" element={<RegistersPage />} />
                    <Route path="/new-entry" element={<NewEntryPage />} />
                    <Route path="/new-exit" element={<NewExitPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;