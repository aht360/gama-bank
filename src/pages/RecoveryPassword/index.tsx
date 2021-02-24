import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../components/Logo';
import { LoginScreen } from './styles';
import arrow from '../../assets/arrow-right-white.png';
import api from '../../services/api';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const [ login, setLogin ] = useState("");
    const [ email, setEmail ] = useState("");
    const history = useHistory();

    const handleSubmit = useCallback( async (e) => {
        e.preventDefault();
        try{
            await api.post('/nova-senha', {
                email, 
                login
            });
            toast.success('Um email será enviado!');
            history.push('/login');
        } catch (e){
            toast.error('O usuário não existe');
        }
    }, [email, history, login]);

    return (
        <LoginScreen>
            <Toaster 
                position="top-right"
            />
            <Logo />
            <form onSubmit={handleSubmit}>
                <h1>Esqueci minha senha</h1>
                <p className="subtitle-text">
                    Digite seu login e seu email que informaremos como recuperar a sua senha.
                </p>
                <input 
                    type="text" 
                    placeholder="Confirme seu login"
                    onChange={e => setLogin(e.target.value)}
                    required
                />
                <input 
                    type="email" 
                    placeholder="Informe seu email" 
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <button type="submit">
                    <p>Continuar</p>
                    <img src={arrow} alt="arrow"/>
                </button>
                <div>
                    <Link className="link-class" to="/login">
                        Fazer login 
                    </Link>
                </div>
            </form>
        </LoginScreen>
    );
}

export default Login;