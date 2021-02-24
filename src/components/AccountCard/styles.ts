import styled from 'styled-components';

export const TextAccountCard = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #9B9B9B;
`;

export const ValueAmount = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    display: flex;
    align-items: center;

    color: #010101;
    margin-bottom: 30px;
`;

export const FaturaAtual = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    display: flex;
    align-items: center;

    color: #1783E7;
    margin-bottom: 30px;
`;

export const ValueExpend = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #68DE5A;
    margin-left: 10px;
`;

export const AccountCardContainer = styled.div`
    width: 407.8px;
    height: 255px;
    background-color: #FBFBFB;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 40px;
    img{
        margin-right: 21px;
    }
    div{
        display: flex;
        margin-bottom: 15px;
        .title-account-card{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            /* identical to box height */

            display: flex;
            align-items: center;
            text-align: center;

            color: #9B9B9B;
        }
    }
    
`;