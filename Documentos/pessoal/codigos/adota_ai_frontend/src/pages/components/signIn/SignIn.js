import styled from "styled-components";
import logo from '../../../assets/images/adota-ai.png';
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../../services/authApi";
import { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();
    
    function signInUser(e) {
        e.preventDefault();
        setDisabled(true);
        const promise = signIn({ email: email, senha: password });
        promise
            .then(data => {
                localStorage.setItem('token', data.data);
                console.log(data);
                navigate("/pets");
            })
            .catch(err => {
                console.log(err);
                alert("Erro ao fazer o login.")
            })

        setDisabled(false);
    }

    return (
        <>
        <Container>
            <img src={logo} className="App-logo" alt="logo" />
            <form onSubmit={signInUser}>
                <div>
                    <label>Email</label>
                    <InputForm 
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={disabled}
                    />
                </div> 
                <div>
                    <label>Senha</label>
                    <InputForm 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        disabled={disabled}
                    />
                </div> 
                <ButtonForm type="submit" disabled={disabled} onClick={e => signInUser(e)}>
                    Entrar
                </ButtonForm>
            </form>
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
`;

const ButtonForm = styled.button`
    width: 200px;
    height: 35px;
    border-radius: 15px;
    border: 1px solid black;
    background-color: #FFF;
    color: gray;
    font-size: 14px;
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