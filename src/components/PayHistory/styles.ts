import styled from 'styled-components';

export const PayHistoryItem = styled.div`
    width: 100%;
    height: 100px;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    border-bottom: 1px solid #e5e5e5;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            /* identical to box height */
    
            display: flex;
            align-items: center;
            text-align: center;
    
            color: #9B9B9B;
        }
    }

`;

export const ValueSpent = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
    margin-top: 5px;
`;

export const ValueInfo = styled.div`
    display: flex;
    align-items: center;
    div{
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        b{
            font-size: 18px;
        }
        p{
            margin-top: 10px;
        }
    }
`;