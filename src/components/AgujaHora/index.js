import Manecilla from "../../assets/hora.png";
import styles from "./aguja-hora.module.css";

const AgujaHora = ({ hora }) => {
  const posInicial = hora * 30;
  const giro = `rotate(${posInicial}deg)`;

  return (
    <img
      src={Manecilla}
      className={styles.agujaHora}
      style={{ transform: giro }}
      alt="Aguja Hora"
    />
  );
};

export default AgujaHora;