import Escolher from "../palavras";
import PalavraSorteada from "./PalavraSorteada";

export default function Jogo() {

    let cont = 0;

    return (
        <>
            <div className="corpo">
                <div className="imagem"><img src={`assets/forca${cont}.png`} /></div>
                <div className="coluna">
                    <button onClick={Escolher} className="escolher">Escolher Palavra</button>
                    <PalavraSorteada palavra={Escolher()}/>
                </div>
            </div>
        </>
    )
}
