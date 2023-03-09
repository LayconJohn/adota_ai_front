

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/adota-ai.png";

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <Container>
      <p onClick={() => navigate("/chat")}>chat</p>
      <img src={logo} alt="logo" onClick={() => navigate("/")} />
      <div onClick={() => navigate("/pets/new")} >Add</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 80px;
  object-fit: cover;
  background-color: #C6AADA;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
  }
`;

const Menu = styled.div`
  background-color: #ffffff;
  position: fixed;
  width: 50vw;
  height: 50vw;
  left: calc(100% - 200px);
  top: 50px;
  z-index: 1;
  h2 {
    margin: 15px;
  }
`;