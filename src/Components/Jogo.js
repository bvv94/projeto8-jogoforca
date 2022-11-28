import Escolher from "../palavras";

export default function Jogo() {

    let cont = 0;

    return (
        <>
            <div className="corpo">
                <div data-test="game-image" className="imagem"><img src={`assets/forca${cont}.png`} /></div>
                <div className="coluna">
                    <button data-test="choose-word" onClick={Escolher} className="escolher">Escolher Palavra</button>
                </div>
            </div>
        </>
    )
}
