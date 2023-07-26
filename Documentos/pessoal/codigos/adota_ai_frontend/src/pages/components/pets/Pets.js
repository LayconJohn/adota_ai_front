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
            return await getPets(token, 1);
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
                        <div className="pet-info">
                            <span className="pet-name">
                                {pet.nome}
                            </span>
                            <span className="pet-race">
                                {pet.raca}
                            </span>
                        </div>
                        <div className="pet-age">
                            {pet.nascimento}
                        </div>



                    </PetCard>
                })}
            </Container>
        
        </>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
    gap: 3rem;
    flex-wrap: wrap;
    background-image: url(${fundo});
`;

const PetCard = styled.div`
    width: 310px;
    height: 300px;
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
        width: 70%;
        height: 60%;
        border-radius: 10px;
        margin-bottom: 5px;
    }

    .pet-info{
        display: flex;
        width: 70%;
        justify-content: space-between;
    
        .pet-name{
            font-weight: bold;
            font size: 16px;

        }
    }

    .pet-age{
        display: flex;
        width: 70%;
        justify-content: flex-start;
    }
`;    