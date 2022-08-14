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
      hora: new Date().toLocaleTimeString("en-US"),
    };
  }

  actualizar = () => {
    setTimeout(() => {
      this.setState({ hora: new Date().toLocaleTimeString("en-US") });
      this.actualizar();
    }, 500);
  };

  render() {
    const arrayHora = this.state.hora.split(":");
    const hh = arrayHora[0];
    const mm = arrayHora[1];
    const ss = arrayHora[2].substring(0, 2);

    let numeros = [];

    for (let i = 1; i <= 12; i++) {
      numeros.push(<Numero key={i} num={i} />);
    }

    return (
      <div onLoad={this.actualizar} className={styles.relojContainer}>
        <div className={styles.reloj}>
          {numeros}
          <AgujaHora hora={hh} />
          <AgujaMinuto minuto={mm} />
          <AgujaSegundo segundo={ss} />
        </div>
      </div>
    );
  }
}