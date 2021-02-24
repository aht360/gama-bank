import React from 'react';
import { PayHistoryItem, ValueSpent, ValueInfo } from './styles';
import card from '../../assets/card-buy.png';
const PayHistory = () => {
    return (
        <PayHistoryItem>
            <div>
                <ValueInfo>
                    <img src={card} alt="card-icon"/>
                    <div>
                        <b>Compra no débito</b>
                        <p>GamaAcademy</p>
                    </div>
                </ValueInfo>
                <p>
                    Dia 24 de Jan.
                </p>
            </div>
            <ValueSpent>
                R$: 298,55
            </ValueSpent>
        </PayHistoryItem>
    );
}

export default PayHistory;