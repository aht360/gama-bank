import React from 'react';
import { Screen2 } from './styles';
import bgLeft from '../../assets/app-bg-left.png';
import bgRight from '../../assets/app-bg-right.png';

const Info = () => {
    return(
        <Screen2>
            <div className="left-container">
                <h1>Conta digital do Gama Academy</h1>
                <img src={bgLeft} alt="conta digital Gama Academy"/>
                <p>
                    Rende mais que a poupança,
                    sem taxa de manutenção
                    nem tarifas escondidas.
                </p>
            </div>
            <div className="right-container">
                <h1>Cartão de Crédito</h1>
                <p>
                    Rende mais que a poupança,
                    sem taxa de manutenção
                    nem tarifas escondidas.
                </p>
                <img src={bgRight} alt="cartão de crédito"/>
            </div>
        </Screen2>
    );
}

export default Info;