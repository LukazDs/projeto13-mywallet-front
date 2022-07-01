import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import LoginPage from "./components/LoginPage";
import SignPage from "./components/SignPage";
import RegistersPage from "./components/RegistersPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/sign-in" element={<SignPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;