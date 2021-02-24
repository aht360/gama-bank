import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../hooks/auth';
import { DashboardScreen, Sidebar, DashboardContent, PayHistoryContainer } from './styles';
import logo from '../../assets/gama-logo.png';
import SidebarCard from '../../components/SidebarCard';
import { FiEyeOff, FiEye, FiLogOut } from 'react-icons/fi'
import AccountCard from '../../components/AccountCard';
import dollar from '../../assets/dollar.png';
import PayHistory from '../../components/PayHistory';
import jwt_decode from "jwt-decode";
import Headers from "../../services/headers";
import api from '../../services/api';

interface IUser {
    idUsuario: number;
    sub: string;
}

interface IDashboard {
    contaBanco: any;
    contaCredito: any;
}


const Dashboard = () => {
    const { signOut } = useAuth();
    const TokenStorage = localStorage.getItem("@GamaBank:token");
    const [ dashboard, setDashboard ] = useState<IDashboard>({ contaBanco: {}, contaCredito: {}});
    const [ visible, setVisible ] = useState(true);

    const TokenDecodedValue = useCallback(() => {
        if (TokenStorage) {
            const TokenArr = TokenStorage.split(" ");
            const TokenDecode = TokenArr[1];
            const decoded = jwt_decode<IUser>(TokenDecode);
            return decoded.sub;
        } else {
          alert("err");
        }
    }, [TokenStorage]);
    
    const user = TokenDecodedValue();
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get(`dashboard?fim=2021-01-31&inicio=2021-01-01&login=${user}`, Headers);
                setDashboard(response.data);
    
            } catch {
                console.log('erro na api')
            }
        }
        fetchData();
    }, [user]);



    return(
        <DashboardScreen>
            <Sidebar>
                <img className="logo-gama" src={logo} alt="gama logo"/>
                <SidebarCard text="Depósitos" />
                <SidebarCard text="Planos" />
                <SidebarCard text="Pagamentos" />
                <SidebarCard text="Transações" />
                <div className="logout-card" onClick={ () => { signOut() }}>
                    <FiLogOut className="logout-icon" size={23} />
                    <p>Sair</p>
                </div>
            </Sidebar>
            <DashboardContent>
                <div className="dashboard-main">
                    <div className="dashboard-line">
                        <h1>
                            Olá <b>{user}</b>, seja bem vindo!
                        </h1>
                        {
                            visible ?
                                <div className="box-icon" onClick={ () => { setVisible(false); } } >
                                    <FiEye className="icon-hidden" size={23}  />
                                </div>
                                :
                                <div className="box-icon" onClick={ () => { setVisible(true); } }>
                                    <FiEyeOff className="icon-hidden" size={23}  />
                                </div>

                        }
                    </div>

                    <div className="dashboard-line">
                        <AccountCard type={true} account={dashboard.contaBanco} visible={visible} />
                        <AccountCard type={false} account={dashboard.contaCredito} visible={visible} />
                    </div>

                    <PayHistoryContainer>
                        <div className="main-line-payhistory">
                            <img src={dollar} alt="dollar-symbol"/>
                            <p>Últimos lançamentos</p>
                        </div>
                        <PayHistory />
                        <PayHistory />
                        <PayHistory />
                        <PayHistory />
                    </PayHistoryContainer>
                    

                </div>
            </DashboardContent>
        </DashboardScreen>
    );
}

export default Dashboard;