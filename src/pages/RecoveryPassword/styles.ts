import styled from 'styled-components';
import { shade } from 'polished';
export const LoginScreen = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #8C52E5;
    color: #fff;
    position: relative;
    form{
        width: 455px;
        height: 422px;
        background: #FBFBFB;
        border-radius: 8px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        
        h1{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: #1D1D1D;
            margin: 45px 0 0 0;
        }

        .subtitle-text{
            font-family: Roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            
            letter-spacing: 0em;
            text-align: center;
            color: gray;
            margin: 25px 0;
            width: 300px;
        }

        input{
            border: none;
            border-bottom: 1px solid #878686;
            width: 352px;
            height: 30px;
            display: flex;
            align-items: center;
            background: #FBFBFB;
            &::placeholder {
                opacity: 1;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 14px;
                color: #878686;
            }
            margin-bottom: 37px;
        }

        button{
            width: 360.79px;
            height: 42.78px;
            background: #68DE5A;
            border-radius: 20px;
            border: none;
            padding: 0 21px;

            display: flex;
            justify-content: space-between;
            transition: linear 0.3s all;
            p{
                color: #fff;
                font-weight: 500;
                font-size: 14px;
                width: fit-content;
                height: 16px;
                line-height: 42px;
            }
            img{
                height: 14px;
                width: 17px;
                margin-top: 15px;
                color: #fff;
            }

            &:hover{
                background-color: ${shade(0.2, '#68DE5A')}
            }
            
        }
        div{
            display: flex;
            flex-direction: column;
            .link-class{

                margin-top: 15px;
                color: #8C52E5;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 13px;
                line-height: 15px;
            }
            
        }
    }
`;