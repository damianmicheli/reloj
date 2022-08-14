import Manecilla from '../../assets/hora.png'
import styles from'./aguja-hora.module.css'


const AgujaHora = ({hora}) => {

    const posInicial = hora * 30;
    const giro = `rotate(${ posInicial }deg)`;

    // const css = `
    // @keyframes ${styles.spin} {
    //     from {
    //       transform: rotate(${ posInicial }deg);
    //     }
    //     to {
    //       transform: rotate(${ posInicial + 360 }deg);
    //     }
    // }` 
    
    return (

      <img src={Manecilla} className={styles.agujaHora} style={{transform:giro}} alt="Aguja Hora"/>

    );
};

export default AgujaHora;