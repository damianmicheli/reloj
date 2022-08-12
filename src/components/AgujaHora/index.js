import Manecilla from '../../assets/hora.png'
import './index.css'


const AgujaHora = ({hora, minuto}) => {

    const posInicial = hora * 30 + minuto * 0.5;

    const css = `
    @keyframes aguja-hora-spin {
        from {
          transform: rotate(${ posInicial }deg);
        }
        to {
          transform: rotate(${ posInicial + 360 }deg);
        }
    }` 
    
    return (
        <>
            <style> {css} </style>
            <img src={Manecilla} className="aguja-hora" alt="Aguja Hora"/>
        </>
    );
};

export default AgujaHora;