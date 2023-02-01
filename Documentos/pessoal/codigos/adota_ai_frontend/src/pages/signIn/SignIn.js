import styled from "styled-components";
import logo from '../../assets/images/adota-ai.png';
import { Link } from "react-router-dom";

const formList = [
    {name: "Email", type: "email"},
    {name: "Senha", type: "password"},
]

export default function SignIn() {
    return (
        <>
        <Container>
         <img src={logo} className="App-logo" alt="logo" />
         {formList.map(form => {
            return (
                <div>
                    <label>{form.name}</label>
                    <InputForm type={form.type}/>
                </div> 
            )
         })}
         <ButtonForm>
           Entrar
         </ButtonForm>
         <Link to="/signup">
            <MessageRedirect>Não possui cadastro? Cadastre-se</MessageRedirect>
         </Link>
         
      </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #C6AADA;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const InputForm = styled.input`
    width: 400px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: #FFF;
    color: gray;
`;

const ButtonForm = styled.button`
    width: 200px;
    height: 35px;
    border-radius: 15px;
    background-color: #FFF;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    &:hover {
        transform: scale(1.2);
    }

    &:active {
        transform: translateY(3px);
    }
`;

const MessageRedirect = styled.span`
    font-size: 14px;
    color: black;
    margin-top: 25px;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }

`;