import Manecilla from "../../assets/minuto.png";
import styles from "./aguja-minuto.module.css";

const AgujaMinuto = ({ minuto }) => {
  const posInicial = minuto * 6;
  const giro = `rotate(${posInicial}deg)`;

  return (
    <img
      src={Manecilla}
      className={styles.agujaMinuto}
      style={{ transform: giro }}
      alt="Aguja Minuto"
    />
  );
};

export default AgujaMinuto;