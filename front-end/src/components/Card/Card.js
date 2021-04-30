import  './Card.style.css'
export default function Card(props){
    return(
        <div className="cartao">
            <div className="corFormulario" style={{backgroundColor: props.cor}}/>
            <div className="infoFormulario">
                
                <a href="">{props.titulo}</a>
                <span>Dono: {props.dono}oi</span>
                <span>Postagem: 02 Maio de 2021</span>
            </div>
        </div>
    );
}