import { IoMdAddCircleOutline, IoIosChatbubbles } from "react-icons/io";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/adota-ai.png";

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <Container>
      <Icon onClick={() => navigate("/chat")}>
        <IoIosChatbubbles  />
      </Icon>
      <img src={logo} alt="logo" onClick={() => navigate("/pets")} />
      <Icon onClick={() => navigate("/pets/new")} >
        <IoMdAddCircleOutline />
      </Icon>
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
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.07);
  padding: 10px;
  color: #82517f;

  img {
    width: 80px;
    height: 80px;
  }
`;

const Icon = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    scale: 0.95;

    &:hover {
      scale: 1;
    }

    &:active {
      transform: translateY(1px);
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