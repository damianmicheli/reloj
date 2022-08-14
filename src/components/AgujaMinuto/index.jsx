import Manecilla from "../../assets/minuto.png";
import styles from "./aguja-minuto.module.css";

const AgujaMinuto = ({ minuto, segundo }) => {
  const posInicial = minuto * 6 + segundo * 0.1;

  const css = `
    @keyframes ${styles.spin} {
        from {transform: rotate(${posInicial}deg);}
        to {transform: rotate(${posInicial + 360}deg);}
    }`;

  return (
    <>
      <style> {css} </style>
      <img src={Manecilla} className={styles.agujaMinuto} alt="Aguja Minuto" />
    </>
  );
};

export default AgujaMinuto;
