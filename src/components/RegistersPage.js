import styled from "styled-components";
//import { useState } from "react";
//import { useNavigate, Link } from "react-router-dom";

function RegistersPage() {
    return (
        <Container>
            <Top>

            </Top>
            <Registers>

            </Registers>
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
    `;

const Registers = styled.div`
    width: 326px;
    height: 446px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;