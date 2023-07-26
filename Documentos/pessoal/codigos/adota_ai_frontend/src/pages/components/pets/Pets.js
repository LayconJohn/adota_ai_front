import styled from "styled-components";
import Header from "../../../components/Header";
import { getPets } from "../../../services/petsApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fundo from "../../../assets/images/fundo_adota_ai.png";
import { MdOutlinePets } from 'react-icons/md';

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
                        <div className="pet-container">
                            <img src={pet.imagem} alt={pet.nome}/>
                            <div className="pet-info">
                                <span className="pet-name">
                                    {pet.nome}
                                </span>
                                <div className="pet-race">
                                    <div clssName="pet-icon">
                                        <MdOutlinePets />
                                    </div>
                                    <span>{pet.raca}</span>
                                </div>
                            </div>
                            <div className="pet-age">
                                {pet.nascimento}
                            </div>
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
    padding: 0 10px 40px 10px;
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
    gap: 3rem;
    flex-wrap: wrap;
    background-image: url(${fundo});
`;

const PetCard = styled.div`
    width: 310px;
    height: 330px;
    background-color: #C6AADA;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5px;
    border-radius: 15px;
    border: 1px solid steelblue;
    box-shadow: 5px 10px lavender;
    cursor: pointer;
    scale: 0.9;
    position: relative;
    color: #82517f;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction:alternate;
    animation-name: transformAnimation;
    @keyframes transformAnimation {
        to { transform: scale(1.07); }
    } 

    &:hover{
        scale: 1;
        color: #82517f;
        font-weight: bold;
    }

    &:active{
        transform: translateY(3px);
    }

    .pet-container{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }

    img {
        width: 100%;
        height: 70%;
        border-radius: 10px;
    }

    .pet-info{
        display: flex;
        width: 70%;
        justify-content: space-between;
        padding: 1rem;
    
        .pet-name{
            color: #643562;
            font-weight: bold;
            font size: 16px;

        }

        .pet-race{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.3rem;
            font-stretch: expanded;
            
            .pet-icon{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 2rem;
                animation-duration: 3s;
                animation-iteration-count: infinite;
                animation-direction:alternate;
                animation-name: transformAnimation;

            }
        }
    }

    .pet-age{
        width: 70%;
        display: flex;
        padding: 0 1rem;
        justify-content: flex-start;
        font-stretch: condensed;
    }

`;    