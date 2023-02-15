import { useState } from "react";
import styled from "styled-components";
import alfabeto from "./Letras";

export default function Jogo() {

    // const img = ["./assets/forca0.png","./assets/forca1.png","./assets/forca2.png","./assets/forca3.png",
    // "./assets/forca4.png","./assets/forca5.png","./assets/forca6.png"]
    // let [num, setNum] = 0;

    const [habilitado, setHabilitado] = useState(true)

    return (
        <>
            <Layout>
                <Forca src="./assets/forca0.png" alt="Forca" />
                <Coluna>
                    <Escolher onClick={() => Iniciar()}>Escolher Palavra</Escolher>
                    <Palavra>___________</Palavra>
                </Coluna>
            </Layout>
            <Teclado>
                {alfabeto.map((a) => <Tecla key={a} disabled={habilitado} >{a}</Tecla>)}
            </Teclado>
        </>
    );

    function Iniciar() {
        alert("Iniciar jogo")
        setHabilitado(!habilitado)
    }

}


const Forca = styled.img`
            width: 400px;
            height: 467px;
            `
const Escolher = styled.button`
            background-color: #27AE60;
            color: white;
            height: 60px;
            width: 200px;
            font-family: 'roboto';
            font-weight: 700;
            font-style: bold;
            font-size: 20px;
            border-radius: 8px;
            `
const Coluna = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`            
const Layout = styled.div`
            display: flex;
            justify-content: space-evenly ;
            margin-top: 20px;
            margin-left: 5px;            
            `
const Palavra = styled.div`
            display: flex;
            justify-content: space-around ;
            font-family: 'Noto Sans';
            font-weight: 700;
            font-size: 50px;
            letter-spacing: 5px;
`
const Teclado = styled.div`
            width: 664px;
            height: 91px;
            display: wrap;
            margin-top: 70px;
            margin-left: 500px;
          `

const Tecla = styled.button` 
            width: 40px;
            height: 40px;
            background-color: ${props => props.disabled ? "#9FAAB5" : "#E1ECF4"};
            color: ${props => props.disabled ? "#798A9F" : "#39739D"};
            border: 1px solid #7AA7C7;
            border-radius: 3px;
            margin-right: 11px;
            margin-bottom: 11px;
            font-family: 'roboto';
            font-size: 16px;
            font-weight: 700;
            `