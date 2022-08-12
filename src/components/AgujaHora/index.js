import Manecilla from '../../assets/hora.png'
import './index.css'


const AgujaHora = ({hora}) => {
    let giro = `rotate(0deg)`;

    if (hora !== 12) {
        giro = `rotate(${hora * 30}deg)`;
    }
    
    return (
        <img src={Manecilla} className="aguja-hora" style={{transform: giro}} alt="Aguja Hora"/>
    );
};

export default AgujaHora;