import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState{
    token: string;
    user: object;
};

interface SignInCredentials{
    email: string;
    password: string;
}

interface AuthContextData {
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;   
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

    const [ data, setData ] = useState<AuthState>(() => {

        const token = localStorage.getItem('@GoBarber:token');
        const user = localStorage.getItem('@GoBarber:user');

        if(token && user){
            return { token, user: JSON.parse(user) };
        }
        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('/login', {
            usuario: email,
            senha: password
        });

        const { token } = response.data;
        const user = response.data.usuario;
        console.log(user)

        localStorage.setItem('@GamaBank:token', token);
        localStorage.setItem('@GamaBank:user', JSON.stringify(user));

        setData({ token, user });
    }, []);

    const signOut = useCallback(() => {

        localStorage.removeItem('@GamaBank:token');
        localStorage.removeItem('@GamaBank:user');
        setData({} as AuthState);

    }, []);

    return(
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}



function useAuth(): AuthContextData{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export { AuthProvider, useAuth };