import styled from "styled-components";
import Header from "../../../components/Header";
import { getPets } from "../../../services/petsApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fundo from "../../../assets/images/fundo_adota_ai.png";

export default function Pets() {
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        async function fetchData(token) {
            //console.log(token);
            if (!token) {
                navigate("/");
            } 
            return await getPets(token);
        }
        const promise = fetchData(token);
        promise
            .then(res => {
                console.log(res.data)
                setPets(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Header />
            <Container>
                {pets.map( (pet, i) => {
                    return <PetCard key={i} >
                        <img src={pet.imagem}/>
                        <div>
                            {pet.nome}
                        </div>
                    </PetCard>
                })}
            </Container>
        
        </>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    //align-items: center;
    flex-wrap: wrap;
    background-image: url(${fundo});
`;

const PetCard = styled.div`
    width: 210px;
    height: 240px;
    background-color: #C6AADA;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    border-radius: 15px;
    cursor: pointer;
    scale: 0.9;

    &:hover{
        scale: 1;
    }

    &:active{
        transform: translateY(3px);
    }

    img {
        width: 190px;
        height: 170px;
        border-radius: 10px;
        margin-bottom: 5px;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;    