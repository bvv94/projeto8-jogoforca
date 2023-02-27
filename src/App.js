import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";
import { useState } from "react";
import styled from "styled-components";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z"]

export default function App() {

  // const [habilitado, setHabilitado] = useState(true)
  const [erros, setErros] = useState(0)
  const [palavra, setPalavra] = useState([]) // palavra sorteada
  const [clicadas, setClicadas] = useState(alfabeto)
  let [palavraSorte, setpalavraSorte] = useState([]); //palavra traços
  let espacos = [];
  const [cor, setCor] = useState("preto")

  return (
    <Tela>
      <Jogo cor={cor} espacos={espacos} palavra={palavra} erros={erros} iniciar={iniciar} />
      <Letras clique={Clique} clicadas={clicadas} />
    </Tela>
  );


  function iniciar() {
    alert("Iniciar jogo")
    setClicadas([])
    // sortear palavra

    const p = (palavras[Math.floor(Math.random() * palavras.length)])
    const palavraSorte = p.split("")

    setPalavra(palavraSorte)

    palavraSorte.forEach(() => espacos.push(" _"))
    setpalavraSorte(espacos)
    console.log(espacos)

  }

  function Clique(letra) {

    console.log(letra)
    console.log(palavraSorte)
    console.log(palavraSorte.length)

    setClicadas([...clicadas, letra]);

    const palavranova = [...palavraSorte]
    if (palavra.includes(letra)) {

      console.log("entrou letra igual")

      palavra.forEach((letraescolha, i) => {
        if (palavra[i] === letra) {
          palavranova[i] = letraescolha
        }
      })
      setpalavraSorte(palavranova);
    }
    else {
      Errou()
    }




    console.log(clicadas)
  }

  function Errou() {
    const erronovo = erros + 1;
    setErros(erronovo)

    if (erronovo === 6) {
      setCor("vermelho")
      finalizar()
    }
  }

  function finalizar() {

  }

}

const Tela = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`