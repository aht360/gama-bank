import React, { useState, useCallback } from 'react';
import { Screen1 } from './styles'
import happy from '../../assets/happy.png';
import arrow from '../../assets/arrow-right.png';
import Logo from '../../components/Logo';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { FaArrowRight } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { cpfMask } from '../../mask';


const Register = () => {
    const [ cpf, setCpf ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const history = useHistory();

    

    const handleSubmit = useCallback( async (e) => {
        e.preventDefault();
        if(password === confirmPassword){
            try{
                await api.post('/usuarios', {
                    cpf,
                    login: username,
                    nome: name,
                    senha: password
                });
                
                toast.success('Conta criada!');

                history.push('/login')
            } catch (e){
                alert('falha ao cadastrar usuario')
            }
        } else{
            alert('as senhas precisam ser iguais')
        }
    }, [confirmPassword, cpf, history, name, password, username]);

    return(
        <Screen1>
            <Toaster 
                position="top-right"
            />
            <Logo />
            <img src={happy} alt="happy woman" className="photo-background"/>
            <div>
                <div className="already-register-container">
                    <p>Gama Bank é um projeto de nossos alunos.</p>
                    <p>Já tem conta?</p>
                    <Link className="btn-login" to="/login" >
                        <p>Acessar</p>
                        

                        <img src={arrow} alt="arrow-right"/>
                    </Link>
                </div>

                <form className="register-container" onSubmit={handleSubmit}>
                    <p>Peça sua conta e cartão de crédito do Gama Bank</p>
                    <input
                        type="text" 
                        placeholder="Digite seu CPF"
                        value={cpf}
                        onChange={e => setCpf(cpfMask(e.target.value))}
                        required
                    />

                    <input 
                        type="text" 
                        placeholder="Escolha um nome de usuário"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        required
                    />

                    <input 
                        type="text" 
                        placeholder="Nome completo"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        required
                    />

                    <input 
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <input 
                        type="password" 
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className={ cpf !== "" && username !== "" && password !== "" && name !== "" && confirmPassword !== "" ? "enabled-button":"disabled-button"}  >
                        <p>Cadastrar</p>
                        <FaArrowRight />
                    </button>
                </form>

            </div>
        </Screen1>
    );
}

export default Register;