import Manecilla from "../../assets/segundo.png";
import styles from "./aguja-segundo.module.css";
import useSound from 'use-sound';
import tick from '../../assets/short-tick.mp3';

const AgujaSegundo = ({ segundo }) => {
  const posInicial = segundo * 6;
  const giro = `rotate(${posInicial}deg)`;
  const [playSound] = useSound(tick);
  playSound();

  return (
    <img
      src={Manecilla}
      className={styles.agujaSegundo}
      style={{ transform: giro }}
      alt="Aguja Segundo"
    />
  );
};

export default AgujaSegundo;