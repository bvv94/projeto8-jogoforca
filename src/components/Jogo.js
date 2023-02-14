import styled from "styled-components";
import alfabeto from "./Letras";

export default function Jogo() {

    const img = ["/home/brenda/Driven T10/projeto8-jogoforca/public/assets/assets/forca0.png"]

    return (
        <>
            <Layout>
                <Forca src="./assets/forca0.png" alt="Forca" />
                <Escolher>Escolher Palavra</Escolher>
            </Layout>
            <Teclado>
                {alfabeto.map((a) => <Tecla>{a}</Tecla>)}
            </Teclado>
        </>
    );
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
const Layout = styled.div`
            display: flex;
            justify-content: space-around ;
            margin-top: 20px;
            margin-left: 5px;
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
            background-color: #9FAAB5;
            color: #798A9F;
            border: 1px solid #7AA7C7;
            border-radius: 3px;
            margin-right: 11px;
            margin-bottom: 11px;
            font-family: 'roboto';
            font-size: 16px;
            font-weight: 700;
            `