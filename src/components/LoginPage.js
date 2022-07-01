import styled from "styled-components";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function login(event) {
        event.preventDefault()

        setIsLoading(true)

        setTimeout(() => navigate("/noexist"), 5000) 

    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <Forms onSubmit={login}>
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

                <button disabled={isLoading}>
                    {isLoading ? "Inativo" : "Entrar"}
                </button>
            </Forms>
            <Link to={"/sign-in"}>Primeira vez? Cadastre-se!</Link>
        </Container>
    )
}

export default LoginPage;

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
    height: 222px;
    margin-top: 32px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    input {
        width: 326px;
        height: 56px;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: black;
    }

    button {
        width: 326px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        text-align: center;
        background: #a103fc;
        border: none;
    }
`
