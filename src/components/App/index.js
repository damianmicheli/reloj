import Reloj from '../Reloj'

function App() {
  const horaActual = new Date().toLocaleTimeString('en-US');

  return (

    <Reloj hora = "1:15" />
    // <Reloj hora = {horaActual} />

  );
}

export default App;
