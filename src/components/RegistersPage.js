import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import axios from "axios";

function RegistersPage() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [registers, setRegisters] = useState([]);
    const { token, name, setName } = useContext(UserContext);

    const tokenValid = !token ? localStorage.getItem("token") : token;

    useEffect(() => {
        setIsLoading(false);
        const URL = "https://mywalletcount.herokuapp.com/userdata";
        const config = { headers: { "Authorization": `Bearer ${tokenValid}` } };
        const promise = axios.get(URL, config);

        promise
            .then(res => {
                setRegisters(res.data.userData);
                setIsLoading(false);
                setName(res.data.name);
                navigate("/registers");
            })
            .catch(err => {
                alert(err.response.statusText);
                navigate("/")
            });
    }, [])

    function resultValue() {
        let cont = 0
        for (let i = 0; i < registers.length; i++) {
            if (registers[i].type === "add") {
                cont += Number(registers[i].value);
            } else {
                cont -= Number(registers[i].value);
            }
        }
        return cont;
    }


    return (
        <Container>
            <Top>
                <h2>Olá, {name}</h2>
                <ion-icon 
                    name="exit-outline"
                    onClick={() => navigate("/")}>
                    
                </ion-icon>
            </Top>
            <Registers>
                {registers.length === 0
                    ? <span>Não há registros de entrada ou saída</span>
                    : <>
                        <Item>
                            {registers.map((v, i) =>
                                <Element key={i} licensed={v.type}>
                                    <span className="time">{v.time}</span>
                                    <span className="description">{v.description}</span>
                                    <span className="value">{v.value},00</span>
                                </Element>)}

                        </Item>
                        <Result isPositive={resultValue()}>
                            <span className="text">SALDO</span>
                            <span className="value-result">{resultValue()},00</span>
                        </Result>
                    </>
                }

            </Registers>
            <EntranceControl>
                <button
                    disabled={isLoading}
                    onClick={() => navigate("/new-entry")}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <h3>Nova entrada</h3>
                </button>
                <button
                    disabled={isLoading}
                    onClick={() => navigate("/new-exit")} >
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <h3>Nova saída</h3>
                </button>
            </EntranceControl>
        </Container>
    )
}

export default RegistersPage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ad03fc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const Top = styled.div`
    width: 326px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }

    ion-icon {
        font-size: 26px;
        color: #FFFFFF;
        cursor: pointer;
    }
`;

const Registers = styled.div`
    width: 326px;
    height: 446px;
    font-size: 26px;
    border-radius: 5px;
    background-color: #FFFFFF;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        width: 180px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #868686;
    }
`;

const Result = styled.div`
    width: 326px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .value-result {
        text-align: right;
        margin: 10px;
        color: ${props => props.isPositive >= 0 ? "green" : "red"};
    }

    .text {
        text-align: left;
        margin: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
`;

const Item = styled.div`
    width: 100%;
    height: 370px;
    overflow-y: scroll;
`;

const Element = styled.p`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0px;

    .time {
        width: 48px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;

        color: gray;
    }

    .description {
        width: 145px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: left;
        word-wrap: break-word;

        color: black;
    }

    .value {
        width: 62px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;

        color: ${props => props.licensed === "add" ? "green" : "red"};
    }

    .items-middle {
        width: 145px;
        background-color: yellow;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: red;
    }
`

const EntranceControl = styled.div`
    width: 326px;
    height: 114px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        border: none;

        h3 {
            width: 64px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 20px;
            word-break: wrap;

            color: #FFFFFF;
            padding: 8px;
        }

        ion-icon {
            font-size: 20px;
            color: #FFFFFF;
            padding: 8px;
        }
    }
`;