import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../loaders/Loading";
import axios from "axios";

function SignPage() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function login(event) {

        event.preventDefault()
        setIsLoading(true)

        if (confirmPassword !== password) {
            alert("Senha e confirme senha são diferentes!");
            setIsLoading(false);
            return;
        }

        const URL = "http://localhost:5000/sign-up";
        const body = { name, password, email }

        const promise = axios.post(URL, body, {})
        promise.then(() => { setIsLoading(false); navigate("/") })

    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <Forms onSubmit={login}>
                <input type="text"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    disabled={isLoading}
                    placeholder='Name'
                    required />

                <input type="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    disabled={isLoading}
                    placeholder='Email'
                    required />

                <input type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    disabled={isLoading}
                    placeholder='Senha'
                    required />

                <input type="password"
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    disabled={isLoading}
                    placeholder='Confirme a senha'
                    required />

                <button disabled={isLoading}>
                    {isLoading ? <Loading /> : "Cadastrar"}
                </button>
            </Forms>
            <Link to={"/"}>Já tem uma conta? Entre agora!</Link>
        </Container>
    )
}

export default SignPage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ad03fc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;

        color: #FFFFFF;
    }

    a {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;

        color: #FFFFFF;
    }
`
const Forms = styled.form`
    width: 303px;
    height: 332px;
    margin-top: 32px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    input {
        width: 326px;
        height: 56px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: black;
        border-radius: 5px;
        border: none;
    }

    button {
        width: 326px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        background: #a103fc;
        color: #FFFFFF;
        border: none;
    }
`
