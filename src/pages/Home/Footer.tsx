import React from 'react';
import footer from '../../assets/footer.png';
import { Screen5 } from './styles';

const Footer = () => {
    return(
        <Screen5>
            <div>
                <h1>
                    Simplifique a sua
                    vida. Peça seu
                    convite.
                </h1>
                <p>
                    GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00 <br/>
                </p>
                <p>
                    Rua Fictícia, 999 - 00000-000 - São Paulo, SP<br/>
                </p>
                <p>
                    Este é um projeto de avaliação | GamaAcademy | Accenture | 2021<br/>
                </p>
            </div>
            <img src={footer} alt="footer img"/>
        </Screen5>
    );
}

export default Footer;