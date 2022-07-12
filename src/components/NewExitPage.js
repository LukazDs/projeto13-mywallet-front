import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../loaders/Loading";
import UserContext from "../contexts/UserContext";
import axios from "axios";

function NewExitPage() {

    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { token } = useContext(UserContext);

    const tokenValid = !token ? localStorage.getItem("token") : token;

    if(!tokenValid) {
        navigate("/");
        console.log("Para acessar essa página é nescessário estar logado!")
        return;
    }

    function login(event) {
        event.preventDefault()

        setIsLoading(true)

        const URL = "https://mywalletcount.herokuapp.com/insert-value?type=subtract";
        const body = { description, value };

        const config = { headers: { "Authorization": `Bearer ${tokenValid}` } };
        const promise = axios.post(URL, body, config);

        promise.then(_res => { setIsLoading(false); navigate("/registers") })
            .catch(err => { alert(err.response.data); navigate("/") });
    }

    return (
        <Container>
            <h2>Nova saída</h2>
            <Forms onSubmit={login}>
                <input type="number"
                    min={1}
                    onChange={e => setValue(e.target.value)}
                    value={value}
                    disabled={isLoading}
                    placeholder="Valor"
                    required />

                <input type="text"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    disabled={isLoading}
                    placeholder="Description"
                    required />

                <button disabled={isLoading}>
                    {isLoading ? <Loading /> : "Salvar Saída"}
                </button>
            </Forms>
        </Container>
    )
}

export default NewExitPage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ad03fc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    h2 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;

        color: #FFFFFF;
    }
`;

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
`;
