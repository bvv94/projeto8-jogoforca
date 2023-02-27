import styled from "styled-components";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"]


export default function Letras(props) {

    const {clique, clicadas} = props;

    return (
        <Teclado>
            {alfabeto.map((a) => <Tecla data-test="letter" key={a} disabled={clicadas.includes(a)} onClick={() => clique(a)}>{a}</Tecla>)}
        </Teclado>
    )
}

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