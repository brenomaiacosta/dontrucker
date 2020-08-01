import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from  '@react-native-community/async-storage';

import * as auth from "../service/auth";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [userAuth, setUserAuth] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@DonTrucker: usuario');

            if (storagedUser) {
                setUserAuth(JSON.parse(storagedUser));
            }
            setLoading(false);
        }
        if (userAuth == null) {
            loadStorageData();
        }
    }, [userAuth]);

    async function signIn(user, password) {
        setModal(true);
        const response = await auth.signIn(user, password);

        if (response.user != null) {
            alert('Deu certo');
            setUserAuth(response.user);

            await AsyncStorage.setItem('@DonTrucker: usuario', JSON.stringify(response.user));
        }
        else {
           Alert.alert('Atenção!', 'Sem internet ou servidor não responde!');
        }
        setModal(false);
    }

    async function signOut() {
        await AsyncStorage.clear();
        setUserAuth(null);
    }

    async function authenticateUser() {
        let success = false;
        const response = await auth.signIn(userAuth.usuario, userAuth.password);

        if (response.user != null) {
            success = true;
            setUserAuth(response.user);

            const u = await AsyncStorage.getItem('@DonTrucker: usuario');
            
            if (u != null) {
                await AsyncStorage.setItem('@DonTrucker: usuario', JSON.stringify(response.user));
            }
        }

        return success;
    }

    return (
        <AuthContext.Provider value={{ signed: !!userAuth, token: '', userAuth, setUserAuth, signIn, signOut, loading, modal, authenticateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(){
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider.');
    }

    return context;
}

export { AuthProvider, useAuth };