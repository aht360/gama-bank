import React from 'react';
import { AccountCardContainer, TextAccountCard, ValueAmount, ValueExpend, FaturaAtual } from './styles';
import dollar from '../../assets/dollar.png';
import creditCard from '../../assets/credit-card.png';

interface AccountCardProps{
    type: boolean;
    account : IAccount;
    visible: boolean;
}

interface IAccount{
    saldo: number;
}

const AccountCard: React.FC<AccountCardProps> = ({ type, account, visible }) => {

    return (
        <>
        { account.saldo !== undefined &&
        <AccountCardContainer>
            {
                type ? 
                <>
                    <div>
                        <img src={dollar} alt="dollar symbol"/>
                        <p className="title-account-card">
                            Conta
                        </p>
                    
                    </div>
                    <TextAccountCard>
                        Saldo disponível
                    </TextAccountCard>
                    <ValueAmount>
                        {
                            visible ?
                            account.saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) 
                            :
                            '-----'
                        }
                    </ValueAmount>
                    <div>
                        <TextAccountCard>
                            Transações
                        </TextAccountCard>
                        <ValueExpend>
                            R$: 2.120,21
                        </ValueExpend>
                    </div>
                </>
                :
                <>
                    <div>
                        <img src={creditCard} alt="dollar symbol"/>
                        <p className="title-account-card">
                            Cartão de Crédito
                        </p>
                    
                    </div>
                    <TextAccountCard>
                        Fatura atual
                    </TextAccountCard>
                    <FaturaAtual>
                        {account.saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})  }
                    </FaturaAtual>
                    <div>
                        <TextAccountCard>
                            Limite disponível
                        </TextAccountCard>
                        <ValueExpend>
                            R$: 9.120,88
                        </ValueExpend>
                    </div>
                </>
            }
            
            
        </AccountCardContainer>
        }
        </>
    );
}

export default AccountCard;