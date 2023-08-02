import styled from "styled-components";
import Header from "../../../components/Header";
import { getPets, getPet } from "../../../services/petsApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fundo from "../../../assets/images/fundo_adota_ai.png";
import { MdOutlinePets } from 'react-icons/md';

export default function Pets() {
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();
    const [petIsSelected, setPetIsSelected] = useState(false);
    const [pet, setPet] = useState(undefined);

    useEffect(() => {
        if(!localStorage.getItem("token")) {
            navigate("/");
        }
    }, []);

    useEffect(() => {
        function fetchData() {
            const token = localStorage.getItem('token');
            console.log(token);
            if (!token) {
                navigate("/");
            } 
            return getPets(token, 1);
        }
        const promise = fetchData();
        promise
            .then(res => {
                setPets(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    async function selectPet(id) {
        const token = localStorage.getItem('token');
        console.log(token);
        setPetIsSelected(true);
        try {
            const pet = await getPet(token, id);
            console.log(pet);
            setPet(pet);
        } catch (error) {
            alert("Erro ao selecionar o pet");
            console.log(error);            
        }
    }

    return (
        <>
            <Header />
            <Container>
                {pets.map( (pet, i) => {
                    return <PetCard 
                    key={i} 
                    petSelected={petIsSelected}
                    onClick={() => selectPet(pet.id)}
                    >
                        <div className="pet-container">
                            <img src={pet.imagem} alt={pet.nome}/>
                            <div className="pet-info">
                                <span className="pet-name">
                                    {pet.nome}
                                </span>
                                <div className="pet-race">
                                    <div className="pet-icon">
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
            <PetContainer 
            onClick={() => setPetIsSelected(false)}
            petSelected={petIsSelected}
            >
                <div className="pet-details">
                    <div className="pet-container">
                        <img src={"olá"} alt={"olá"}/>
                        <div className="pet-info">
                            <span className="pet-name">
                                {"olá"}
                            </span>
                            <div className="pet-race">
                                <div clssName="pet-icon">
                                    <MdOutlinePets />
                                </div>
                                <span>{"olá"}</span>
                            </div>
                        </div>
                        <div className="pet-age">
                            {"olá"}
                        </div>
                </div>
                </div>
            </PetContainer>
        
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
    display: ${props => props.petSelected ? "none" : ""};
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

const PetContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: gray;
    opacity: 0.4;
    position: fixed;
    top: 0;
    display: ${props => props.petSelected ? "flex" : "none"};
    justify-content: center;
    align-items: center;

    .pet-details{
        width: 310px;
        height: 330px;
        background-color: #C6AADA;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 15px;
        border: 1px solid steelblue;
        box-shadow: 5px 10px lavender;

        .pet-container{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;  

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
    
    }

    
        
    
        }
`;