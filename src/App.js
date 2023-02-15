import Jogo from "./components/Jogo";
import palavras from "./palavras";

export default function App() {

  return (
    <>
      <Jogo palavras={palavras}/>
    </>
  );
}