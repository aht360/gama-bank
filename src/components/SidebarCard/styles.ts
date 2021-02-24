import styled from 'styled-components';

export const SidebarCardContainer = styled.div`
    width: 95px;
    height: 90px;
    background-color: #8C52E5;
    border-radius: 5px;
    padding: 13px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 25px;
    cursor: pointer;
    img{
        width: 25px;
        height: 25px;
    }
    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;
    }
    &:hover{

    }
`;