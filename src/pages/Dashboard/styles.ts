import styled from 'styled-components';

export const DashboardScreen = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #8C52E5;
    display: flex;
`;

export const Sidebar = styled.div`
    width: 8%;
    height: 100%;
    background-color: #68DE5A;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 15px;
    .logo-gama{
        width: 80px;
        height: 80px;
        cursor: pointer;
        margin-bottom: 25px;
    }

    .logout-card{
        width: 95px;
        height: 90px;
        background-color: #8C52E5;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;

        padding: 13px 8px;
        .logout-icon{
            color: #fff;
        }
        p{
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            color: #FFFFFF; 
        }
    }
`;

export const PayHistoryContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: #FBFBFB;
    border-radius: 8px;
    overflow-Y: scroll;
    display: flex;
    flex-direction: column;
    padding: 25px;

    .main-line-payhistory{
        display: flex;
        align-items: center;
        p{
            margin-left: 15px;
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

export const DashboardContent = styled.div`
    width: 92%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .dashboard-main{
        width: 900px;
        .dashboard-line{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            h1{
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                color: #FFFFFF;
            }
            .box-icon{
                width: 50px;
                height: 50px;
                background-color: #68DE5A;
                border-radius: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            .icon-hidden{
                color: #8C52E5;
            }
        }
    }
`;