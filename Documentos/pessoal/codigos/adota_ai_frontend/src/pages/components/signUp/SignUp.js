import { useState } from "react";
import styled from "styled-components";
import logo from '../../../assets/images/adota-ai.png';
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../../services/authApi";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [cpf, setCpf] = useState("");
    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

    function signUpUser(e) {
        e.preventDefault();
        setDisabled(true);
        if (password !== confirmPassword) {
            alert("Senha e confirmar senha devem ser iguais!");
            return;
        }
        
        const body = {
            email: email,
            nome: name,
            senha: password,
            confirmarSenha: confirmPassword,
            cpf: cpf
        }
        
        const promise = signUp(body);
        promise
            .then(() => {
            alert("Cadastro feito com sucesso!");
            navigate("/");
            })
            .catch(err => {
                console.log(err);
                alert("Não foi possível Cadastrar");
            })
        setDisabled(false);
    }

    return (
        <>
        <Container>
         <img src={logo} className="App-logo" alt="logo" />
         <form onSubmit={signUpUser}>
            <div>
                
                <InputForm 
                    type="text"
                    disabled={disabled}
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                
                <InputForm 
                    type="text"
                    disabled={disabled}
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <InputForm 
                    type="password"
                    disabled={disabled}
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div>
                <InputForm 
                    type="password"
                    disabled={disabled}
                    placeholder="Confirmar Senha"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </div>
            <div>
                <InputForm 
                    type="text"
                    disabled={disabled}
                    placeholder="CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                />
            </div>
            <ButtonForm type="submit">
            Entrar
            </ButtonForm>
         </form>
         <Link to="/">
            <MessageRedirect>Já possui cadastro? Faça o login</MessageRedirect>
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

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
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
    margin-bottom: 14px;
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