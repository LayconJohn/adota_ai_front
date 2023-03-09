import styled from "styled-components";
import Header from "../../../components/Header";
import { getPets } from "../../../services/petsApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Pets() {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        async function fetchData(token) {
            //console.log(token);
            if (!token) {
                navigate("/");
            } 
            await getPets(token);
        }
        fetchData(token);
        
    }, []);

    return (
        <>
            <Header />
            Lista de Pets        
        </>
    )
}