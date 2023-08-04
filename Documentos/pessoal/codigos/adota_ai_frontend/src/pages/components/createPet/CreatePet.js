import Header from "../../../components/Header";
import fundo from "../../../assets/images/fundo_adota_ai.png";
import styled from "styled-components";
import logo from "../../../assets/images/adota-ai.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function CreatePet() {

  const [valuesForm, setValuesForm] = useState({
    nome: "",
    raca: "",
    descricao: "",
    contato: "",
    nascimento: "",
    imagem: ""
  });

  function handleChange(e) {
    setValuesForm({...valuesForm, [e.target.name]: e.target.value});
  }


    return (
      <>
        <Header />
        <ContainerForm>
          <form>
            <div className="pet-image"> 
              <img src={logo} alt="Logo" />
            </div>
            <input 
              type="text"
              placeholder="Nome"
              name="nome"
              onChange={e => handleChange(e)}
            />
            <input 
              type="text"
              placeholder="Raça"
              name="race"
              onChange={e => handleChange(e)}
            />
            <input 
              type="text"
              placeholder="Descrição"
              name="descricao"
              onChange={e => handleChange(e)}
            />            
            <input 
              type="text"
              placeholder="Imagem"
              name="imagem"
              onChange={e => handleChange(e)}
            />
            <input 
              type="text"
              placeholder="Contato"
              name="contato"
              onChange={e => handleChange(e)}
            />
            <input 
              type="text"
              placeholder="Nascimento"
              name="nascimento"
              onChange={e => handleChange(e)}
            /> 
            <button type="submit">Cadastrar Pet</button>
            <span><Link to="/pets"> Voltar </Link> </span>                                   
          </form>
        </ContainerForm>
      </>
    );
}

const ContainerForm = styled.div`
  height:100vh;
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-image: url(${fundo});


  .pet-image {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    img {
      height: 13rem;
      border-radius: 4.5rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #00000076;
    border-radius: 2rem;
    box-shadow: 5px 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 4rem;
    padding: 3rem 5rem;
    margin-top: 6rem;

    input {
      //background-color: transparent;
      opacity:0.8;
      padding: 1rem; 
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      width: 100%;
      font-size: 1rem;
      font-weight: bold;

      &:focus{
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }

    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
      &:active{
        scale: 1.1;
      }
    }

    span {
      color: white;
      text-transform: uppercase;
      a{
        color: #4e0eff;
        text-transform: none;
        font-weight: bold;
      }
    }

  }

`;