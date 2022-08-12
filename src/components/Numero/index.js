import './index.css'

const Numero = ({num}) => {
    
    let giro = "rotate(5deg)";
    let antiGiro = "rotate(-5deg)";
    
    if (num !== 12) {
        giro = `rotate(${num * 30 + 5}deg)`;
        antiGiro = `rotate(-${num * 30 + 5}deg)`
    }

    return (
        <>
            <div className="pos-numero" style={{transform: giro}}>
                <p className="numero" style={{transform: antiGiro}}>{num}</p>
            </div>
        </>
    );
}

export default Numero;