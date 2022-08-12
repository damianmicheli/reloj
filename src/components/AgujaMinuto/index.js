import Manecilla from '../../assets/minuto.png'
import './index.css'

const AgujaMinuto = ({minuto}) => {
    let giro = `rotate(0deg)`;

    if (minuto !== 0) {
        giro = `rotate(${minuto * 6}deg)`;
    }
    
    return (
        <img src={Manecilla} className="aguja-minuto" style={{transform: giro}} alt="Aguja Minuto"/>
    );
};

export default AgujaMinuto;