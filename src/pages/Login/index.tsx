import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../components/Logo';
import warning from '../../assets/warning.png';
import { LoginScreen, LoginErrorContainer } from './styles';
import arrow from '../../assets/arrow-right-white.png';
import arrowLeft from '../../assets/arrow-left.png';
import { useAuth } from '../../hooks/auth';
import toast, { Toaster } from 'react-hot-toast';


const Login: React.FC= () => {

    const [ loginError, setLoginError ] = useState(false);
    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");
    const { signIn } = useAuth();
    const history = useHistory();

    const handleSubmit = useCallback( async (e) => {
        e.preventDefault();
        try{
    
            await signIn({
                email: user,
                password
            });
            history.push('/dashboard')
        } catch (e){
            toast.error('Credenciais inválidas!');
            setLoginError(true);
            setUser("");
            setPassword("");
        }
    }, [user, password, history, signIn]);


    return (
        <LoginScreen>
            <Toaster 
                position="top-right"
            />
            <Logo />
            {
                loginError ?
                
                <LoginErrorContainer>
                    <img src={warning} alt="warning"/>
                    <p className="error-msg">Oops, algo deu errado! Confirme seus dados e tente novamente!</p>
                    <button onClick={() => setLoginError(false)} >
                        <p>Voltar</p>
                        <img src={arrowLeft} alt="arrow"/>
                    </button>
                </LoginErrorContainer>
                :
                <form onSubmit={handleSubmit}>
                    <h1>Faça seu login</h1>
                    <input 
                        type="text"
                        placeholder="Digite seu usuário"
                        onChange={e => setUser(e.target.value)}
                        required
                    />
                    <input 
                        type="password"
                        placeholder="Digite sua senha"
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">
                        <p>Continuar</p>
                        <img src={arrow} alt="arrow"/>
                    </button>
                    <div>
                        <Link className="link-class" to="/recoveryPass">
                            Esqueci minha senha 
                        </Link>
                        <Link className="link-class" to="/">
                            Ainda não sou cliente 
                        </Link>
                    </div>
                </form>
            }



        </LoginScreen>
    );
}

export default Login;