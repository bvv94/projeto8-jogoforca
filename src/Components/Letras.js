export default function Letras({ alfabeto }) {

    return (
        <div className="teclado">
            {alfabeto.map(a => <button key={a} type="button" className="tecla" atributo data-test="letter">{a}</button>)}
        </div>
    )
}