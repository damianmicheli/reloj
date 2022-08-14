import styles from "./numero.module.css";

const Numero = ({ num }) => {
  const angulo = num * 30 + 5;

  return (
    <>
      <div className={styles.posNumero} style={{ transform: `rotate(${angulo}deg)` }}>
        <p className={styles.numero} style={{ transform: `rotate(-${angulo}deg)` }}>
          {num}
        </p>
      </div>
    </>
  );
};

export default Numero;