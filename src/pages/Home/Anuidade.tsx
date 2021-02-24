import React from 'react';
import { Screen3 } from './styles';

const Anuidade = () => {
    return (
        <Screen3>
            <div>
                <h1>Zero anuidade</h1>
                <p>
                    Burocracia custa caro. 
                    Somos eficientes para você não ter que pagar tarifas.
                </p>
            </div>
            <p className="amount-value">
                0,00
            </p>
        </Screen3>
    );
}

export default Anuidade;