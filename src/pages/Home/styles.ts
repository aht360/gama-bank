import styled from 'styled-components';
import { shade } from 'polished';

export const Screen1 = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #8C52E5;
    color: #fff;
    
    position: relative;
    
    .photo-background{
        position: absolute;
        bottom: 0;
        left: 49%;
        transform: translateX(-50%);
        width: 643px;
        height: 540px;
    }

    div{
        z-index: 9999;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 40px;

        .already-register-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p{
                width: 281px;
                font-family: Roboto;
                font-size: 29px;
                font-style: normal;
                font-weight: 400;
                line-height: 34px;
                letter-spacing: 0em;
                text-align: left;
                margin-bottom: 25px;
            }

            .btn-login{
                width: 290px;
                height: 42px;
                background: #FFFFFF;
                border-radius: 20px;
                border: none;
                padding: 0 21px;

                display: flex;
                justify-content: space-between;
                text-decoration: none;
                transition: all linear .3s;
                p{
                    color: #8C52E5;
                    font-weight: 500;
                    font-size: 17px;
                    width: fit-content;
                    height: 16px;
                    line-height: 40px;
                }
                img{
                    height: 14px;
                    width: 17px;
                    margin-top: 14px;
                }
                &:hover{
                    background-color: ${shade(0.2, '#FFFFFF')};
                }
            }
        }

        .register-container{
            z-index: 9999;
            width: 349px;
            height: 461.23px;
            background: #FBFBFB;
            border-radius: 8px;
            color: #000;
            display:flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 24px 36px;

            p{
                width: 276.74px;
                height: 64.57px;
                font-family: Roboto;
                font-style: normal;
                font-weight: 500;
                font-size: 19px;
                line-height: 22px;
                color: #1D1D1D;
                margin-bottom: 15px;
            }

            input{
                border: none;
                border-bottom: 1px solid #878686;
                width: 270px;
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
                margin-bottom: 22px;
            }
            .disabled-button{
                width: 276.74px;
                height: 47.66px;
                background: #D8D8D8;
                border-radius: 20px;
                border: none;
                padding: 0 21px;

                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #9B9B9B;
                transition: all linear .2s;

                p{
                    color: #9B9B9B;
                    font-weight: 500;
                    font-size: 14px;
                    width: fit-content;
                    height: 16px;
                    line-height: 28px;
                }
                img{
                    height: 14px;
                    width: 17px;
                    margin-top: 17px;
                }
                
            }
            .enabled-button{
                width: 276.74px;
                height: 47.66px;
                background: #68DE5A;
                border-radius: 20px;
                border: none;
                padding: 0 21px;
                transition: all linear .2s;

                display: flex;
                justify-content: space-between;

                align-items: center;
                color: #fff;

                p{
                    color: #fff;
                    font-weight: 500;
                    font-size: 14px;
                    width: fit-content;
                    height: 16px;
                    line-height: 28px;
                }
                img{
                    height: 14px;
                    width: 17px;
                    margin-top: 17px;
                }
                
            }
        }
    }
`;


export const Screen2 = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #EAEAEA;
    display: flex;
    .left-container{
        width: 100%;
        height: 100%;
        background-color: black;
        position: relative;
        color: #68DE5A;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 60px 0 30px 0;
        img{
            position: absolute;
            left: 0;
            top: 54%;
            transform: translateY(-50%);
        }
        h1{
            font-family: Roboto;
            font-size: 34px;
            font-style: normal;
            font-weight: 500;
            line-height: 40px;
            letter-spacing: 0em;
            text-align: left;
        }
        p{
            width: 309px;
            height: 102px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 21px;
            line-height: 25px;
            text-align: center;
            z-index: 9999;
        }
    }
    .right-container{
        width: 100%;
        height: 100%;
        background-color: #F8F8F8;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top:60px;
        img{
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
        }
        h1{
            font-family: Roboto;
            font-size: 34px;
            font-style: normal;
            font-weight: 500;
            line-height: 40px;
            letter-spacing: 0em;
            text-align: left;
            margin-bottom: 60px;
            color: #1D1D1D;

        }
        p{
            width: 350px;
            height: 102px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 21px;
            line-height: 25px;
            text-align: center;
        }
    }
`;

export const Screen3 = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #8C52E5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        color: #fff;
        width: 459px;
        h1{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 42px;
            line-height: 49px;
            margin-bottom: 36px;
        }
        p{
            color: #fff;
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 23px;
            line-height: 27px;
        }
    }
    .amount-value{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 186px;
        line-height: 218px;
        color: #68DE5A;
    }
`;

export const Screen4 = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: #68DE5A;
    img{
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%;
        height: 100%;
        
    }

    div{
        position: absolute;
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
        h1{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 42px;
            line-height: 49px;
            color: #fff;
            margin-bottom: 36px;
        }
        p{
            width: 459px;
            height: 50px;
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 23px;
            line-height: 27px;
            color: #fff;
        }
    }
`;

export const Screen5 = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #EAEAEA;
    div{
        width: 459px;
        h1{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 42px;
            line-height: 49px;
            width: 340px;
            margin-bottom: 30px;
        }
        p{
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 10px;
        }
    }
`;