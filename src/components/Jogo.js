import styled from "styled-components";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png"

export default function Jogo(props) {

    const { cor, espacos, iniciar, erros, habilitado, palavra, palavraTela } = props
    const img = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

    return (
        <>
            <Layout>
                <Forca src={img[erros]} alt="Forca" data-test="game-image"/>
                <Coluna>
                    <Escolher data-test="choose-word" onClick={() => iniciar()}>Escolher Palavra</Escolher>
                    <Palavra data-test="word" cor={cor}>{palavraTela}</Palavra>
                </Coluna>
            </Layout>

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
const Coluna = styled.div`
    display: flex;
    flex-direction: column;
`
const Layout = styled.div`
            width: 980px;
            height: 466px;
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            margin-top: 100px;           
            `
const Palavra = styled.div`
            display: flex;
            justify-content: space-around ;
            font-family: 'Noto Sans';
            font-weight: 700;
            font-size: 50px;
            letter-spacing: 5px;
            margin-top: 300px;
            color: ${(props) => {
        if (props.cor === "vermelho") {
            return "#FF0000"
        }
        else if (props.cor === "verde") {
            return "#27AE60"
        }
        else {
            return "black"
        }
    }}`
