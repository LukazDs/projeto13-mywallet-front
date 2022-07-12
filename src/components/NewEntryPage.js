import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../loaders/Loading";
import UserContext from "../contexts/UserContext";
import axios from "axios";

function NewEntryPage() {

    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");


    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { token } = useContext(UserContext);

    let tokenValid = !token ? localStorage.getItem("token") : token;

    useEffect(() => {

        if(!tokenValid) {
            navigate("/");
            return;
        }
        
    }, [])


    function login(event) {
        event.preventDefault()

        setIsLoading(true)

        const URL = "https://mywalletcount.herokuapp.com/insert-value?type=add";
        const body = { description, value };

        const config = { headers: { "Authorization": `Bearer ${tokenValid}` } };
        const promise = axios.post(URL, body, config);

        promise.then(res => { setIsLoading(false); navigate("/registers") })
            .catch(err => { setIsLoading(false); alert(err.response.data) });
    }

    return (
        <Container>
            <h2>Nova entrada</h2>
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
                    placeholder="Descrição"
                    required />

                <button disabled={isLoading}>
                    {isLoading ? <Loading /> : "Salvar Entrada"}
                </button>
            </Forms>
        </Container>
    )
}

export default NewEntryPage;

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
