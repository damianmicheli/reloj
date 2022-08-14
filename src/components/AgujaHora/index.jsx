import Manecilla from "../../assets/hora.png";
import styles from "./aguja-hora.module.css";

const AgujaHora = ({ hora, minuto }) => {
  const posInicial = hora * 30 + minuto * 0.5;

  const css = `
    @keyframes ${styles.spin} {
        from {transform: rotate(${posInicial}deg);}
        to {transform: rotate(${posInicial + 360}deg);}
    }`;

  return (
    <>
      <style> {css} </style>
      <img src={Manecilla} className={styles.agujaHora} alt="Aguja Hora" />
    </>
  );
};

export default AgujaHora;
