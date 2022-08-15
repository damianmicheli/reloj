import React, { Component } from "react";
import styles from "./reloj.module.css";
import Numero from "../Numero";
import AgujaHora from "../AgujaHora";
import AgujaMinuto from "../AgujaMinuto";
import AgujaSegundo from "../AgujaSegundo";

export default class Reloj extends Component {

  constructor() {

    super();
    
    this.state = {
      hora: "00:00:00"
    };

    this.actualizar = this.actualizar.bind(this);

  }
 
  componentDidMount(){

    this.actualizar();

  }

  actualizar() {

    const horaActual = new Date().toLocaleTimeString("en-GB");


    setTimeout(() => {
      this.setState({ hora: horaActual });
      this.actualizar();
    }, 1000);

  };

  render() {

    const [hh, mm, ss] = this.state.hora.split(":");

    let numeros = [];

    for (let i = 1; i <= 12; i++) {
      numeros.push(<Numero key={i} num={i} />);
    }

    return (
      <>
      <div className={styles.tip}><p>(Hacé click en cualquier lado para escuchar el sonido. Recargá la página para silenciar)</p></div>
      <div className={styles.relojContainer} >
        <div className={styles.reloj}>
          {numeros}
          <AgujaHora hora={hh} />
          <AgujaMinuto minuto={mm} />
          <AgujaSegundo segundo={ss} sound={this.playSound}/>
        </div>
      </div>
              
      </>

    );
  }
}