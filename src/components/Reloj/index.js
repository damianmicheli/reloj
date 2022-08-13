import styles from './reloj.module.css'
import Numero from '../Numero'
import AgujaHora from '../AgujaHora'
import AgujaMinuto from '../AgujaMinuto'

const Reloj = ({hora}) => {

    const arrayHora = hora.split(":");
    const hh = arrayHora[0];
    const mm = arrayHora[1];
    const ss = arrayHora[2] ? arrayHora[2].substring(0,2) : "00";

    let numeros = [];

    for (let i = 1; i <= 12; i++) {
        numeros.push(<Numero key={i} num={i} />);
    }

    return (
        <div className = {styles.relojContainer}>
            <div className={styles.reloj}>
                {numeros}
                <AgujaHora hora = {hh} minuto = {mm}/>
                <AgujaMinuto minuto = {mm} segundo = {ss}/>
            </div>  
        </div>
    );
}

export default Reloj;