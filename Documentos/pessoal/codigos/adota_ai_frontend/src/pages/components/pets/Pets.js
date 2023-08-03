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
    const [pet, setPet] = useState({
        nome: "Seu Lindo Pet",
        raca: "Raça do seu pet",
        imagem: "https://www.shutterstock.com/image-photo/row-tops-heads-cats-dogs-600w-1034939470.jpg",
        nascimento: "10/02/2022",
        contato: "(00) 90000-0000"

    });

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
    }, [pet]);

    async function selectPet(id) {
        const token = localStorage.getItem('token');
        //console.log(token);
        setPetIsSelected(true);
        try {
            const { data } = await getPet(token, id);
            console.log(data);
            setPet({...data});
            console.log("pet", pet);
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
                    <div className="pet-image">
                        <img src={pet?.imagem} alt="Imagem do Pet"/>
                    </div>
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
                    <div className="pet-info">
                        <span className="pet-name">
                            Descrição
                        </span>
                        <div className="pet-race">
                            <span>{pet.descricao}</span>
                        </div>
                    </div>
                    <div className="pet-info">
                        <span className="pet-name">
                            Contato
                        </span>
                        <div className="pet-race">
                            <span>{pet.contato}</span>
                        </div>
                    </div>
                    <div className="pet-info">
                        <span className="pet-name">
                            Idade
                        </span>
                        <div className="pet-age">
                            <span>{pet.nascimento}</span>
                        </div>
                    </div>
                    <ButtonContact>
                        Entrar em contato
                    </ButtonContact>

                    

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
    background-color: rgba(80, 80, 80, 0.3);
    opacity: 0.9;
    position: fixed;
    top: 0;
    display: ${props => props.petSelected ? "flex" : "none  "};
    justify-content: center;
    align-items: center;

    .pet-details{
        width: 400px;
        height: 500px;
        background-color: #C6AADA;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 15px;
        border: 1px solid lavender;
        box-shadow: 5px 10px lavender;
        position: relative;
        padding-top: 150px;

        .pet-image{
            width: 100%;
            height: 290px;
            border-radius: 10px;
            position: absolute;
            top: 0;
            border: 1px solid rgba(0, 0 , 0,  0.5);
            box-shadow: 1px 2px rgba(0, 0 , 0,  0.5);

            img {
                width: 100%;
                height: 100%;
                z-index: 3;
                border-radius: 15px;
                object-fit: fill;
            }
        }

        .pet-age{
        height: 20px;
        width: 70%;
        display: flex;
        padding: 0 1rem;
        justify-content: flex-end;
        font-stretch: condensed;
    }

    }

    .pet-info{
        display: flex;
        width: 70%;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1rem 0r 1rem;
        margin-top: 1rem;
    
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
            }
        }
    }
`;

const ButtonContact = styled.div`
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-top: 1rem;
    background-color: green;
    border-radius: 0.5rem;

    &:hover{
        scale: 1.1;
        cursor: pointer;
    }
`; 