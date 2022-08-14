import styles from "./numero.module.css";

const Numero = ({ num }) => {
  const giro = `rotate(${num * 30 + 5}deg)`;
  const antiGiro = `rotate(-${num * 30 + 5}deg)`;

  return (
    <div className={styles.posNumero} style={{ transform: giro }}>
      <p className={styles.numero} style={{ transform: antiGiro }}>
        {num}
      </p>
    </div>
  );
};

export default Numero;