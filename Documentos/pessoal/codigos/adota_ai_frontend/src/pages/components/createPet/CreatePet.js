import Header from "../../../components/Header";
import fundo from "../../../assets/images/fundo_adota_ai.png";
import styled from "styled-components";
import logo from "../../../assets/images/adota-ai.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postPet } from "../../../services/petsApi";


export default function CreatePet() {

  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
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

  async function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    if (!formValidation(valuesForm)) {
      alert("Preencha os campos corretamente");
      setDisabled(false);
      return;
    }
    const token = localStorage.getItem('token');
    try {
      const { data } =  await postPet(token, valuesForm);
      console.log(data);
      alert("Pet criado com sucesso!");
      navigate("/pets");
    } catch (error) {
      console.log(error.message);
      alert("Erro ao cadastrar seu Pet")
    }
    setDisabled(false);
  }

  function formValidation(pet) {
    const regexContact = /(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/
    const regexBirth = /(\d{2})[-.\/](\d{2})[-.\/](\d{4})/ 
    const regexImage = /(((https?|ftp):\/\/)?([\w\-\.])+(\.)([\w]){2,4}([\w\/+=%&_\.~?\-]*))*$/
    if (!regexContact.test(pet.contato)) {
      alert("Preencha o nascimento no formato (00)90000-0000");
      return false;
    } 
    if (!regexBirth.test(pet.nascimento)) {
      alert("Preencha o nascimento no formato 15/12/2023");
      return false;
    } 
    if (!regexImage.test(pet.imagem)) {
      alert("Preencha a imagem com um link válido");
      return false;
    } 
    return true;
  }

  useEffect(() => {
    if(!localStorage.getItem("token")) {
        navigate("/signup");
    }
  }, []);

    return (
      <>
        <Header />
        <ContainerForm>
          <form onSubmit={handleSubmit}>
            <div className="pet-image"> 
              <img src={logo} alt="Logo" />
            </div>
            <input 
              type="text"
              placeholder="Nome"
              name="nome"
              onChange={e => handleChange(e)}
              disabled={disabled}
              required
            />
            <input 
              type="text"
              placeholder="Raça"
              name="raca"
              onChange={e => handleChange(e)}
              disabled={disabled}
              required
            />
            <input 
              type="text"
              placeholder="Descrição"
              name="descricao"
              onChange={e => handleChange(e)}
              disabled={disabled}
              required
            />            
            <input 
              type="text"
              placeholder="Imagem"
              name="imagem"
              onChange={e => handleChange(e)}
              disabled={disabled}
              required
            />
            <input 
              type="text"
              placeholder="Contato"
              name="contato"
              onChange={e => handleChange(e)}
              disabled={disabled}
              required
            />
            <input 
              type="text"
              placeholder="Nascimento"
              name="nascimento"
              onChange={e => handleChange(e)}
              disabled={disabled}
              required
            /> 
            <button 
              type="submit"
              disabled={disabled}
            >Cadastrar Pet</button>
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