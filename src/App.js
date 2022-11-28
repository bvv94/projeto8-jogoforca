import Chute from "./Components/Chute";
import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import palavras from "./palavras";

export default function App() {

    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  return (
    <div >
      {/* {forca.map((f)=> <div><img src={f.img}/></div>)}
      {forca.map((f)=> <Jogo imagem={f.img} key={f.img}/>)} */}

      <Jogo/>
      {/* <Palavra/> */}
      <div className="alinhar">
        <Letras alfabeto={alfabeto} key={alfabeto}/>
        <Chute />
      </div>
    </div>
  );
}
