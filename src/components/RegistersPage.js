import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistersPage() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function toForward(route) {
        setIsLoading(true);
        setTimeout(() => navigate(route), 2000);
    }

    return (
        <Container>
            <Top>
                <h2>Olá, Fulano</h2>
                <ion-icon
                    name="exit-outline"
                    onClick={() => toForward("/")}>

                </ion-icon>
            </Top>
            <Registers>
                <span>
                    Não há registros de entrada ou saída
                </span>
            </Registers>
            <EntranceControl>
                <button
                    disabled={isLoading}
                    onClick={() => toForward("/new-entry")}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <h3>Nova entrada</h3>
                </button>
                <button
                    disabled={isLoading}
                    onClick={() => toForward("/new-exit")}>
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
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        width: 180px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #868686;
        word-break: wrap;
    }
`;

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