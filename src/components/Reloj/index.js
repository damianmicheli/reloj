import './index.css'
import Numero from '../Numero'
import AgujaHora from '../AgujaHora'
import AgujaMinuto from '../AgujaMinuto'

const Reloj = ({hora}) => {

    const arrayHora = hora.split(":");
    const hh = arrayHora[0];
    const mm = arrayHora[1];

    let numeros = [];

    for (let i = 1; i <= 12; i++) {
        numeros.push(<Numero key={i} num={i} />);
    }

    return (
        <div class="reloj">
            {numeros}
            <AgujaHora hora = {hh}/>
            <AgujaMinuto minuto = {mm}/>
        </div>  
    );
}

export default Reloj;