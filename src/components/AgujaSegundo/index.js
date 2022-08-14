import Manecilla from '../../assets/segundo.png'
import styles from'./aguja-segundo.module.css'


const AgujaSegundo = ({segundo}) => {

    const posInicial = segundo * 6;
    const giro = `rotate(${ posInicial }deg)`;
   
    return (

      <img src={Manecilla} className={styles.agujaSegundo} style={{transform:giro}} alt="Aguja Segundo"/>

    );
};

export default AgujaSegundo;