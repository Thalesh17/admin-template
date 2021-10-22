import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import User from '../../models/User';
import Cookies from 'js-cookie';
import router from 'next/router';
interface AuthContextProps {
    user?: User;
    loading?: boolean;
    loginGoogle?:  () => Promise<void>;
    login?:  (email: string, password:string) => Promise<void>;
    register?:  (email: string, password:string) => Promise<void>;
    logout?:  () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({});

const userNormalized = async (userFirebase: firebase.User): Promise<User> => {
    const token = await userFirebase.getIdToken();

    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        provider: userFirebase.providerData[0].providerId,
        imageURL: userFirebase.photoURL,
        token,
    }
}

const manageCookie = (logado: boolean) => {
    if(logado) {
        Cookies.set('admin-template-auth', logado, {
            expires: 7
        });
    }else {
        Cookies.remove('admin-template-auth')
    }

}

export const AuthProvider = (props) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<User>(null)

    const configSession = async (userFirebase) => {
        if(userFirebase?.email) {
            const user = await userNormalized(userFirebase);
            setUser(user);
            manageCookie(true);
            setLoading(false);
            return user.email;
        } else {
            setUser(null);
            manageCookie(false);
            setLoading(false);
            return false;
        }
    }

    const loginGoogle = async() => {
        try {
            setLoading(true);
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
    
            await configSession(resp.user);
            router.push('/');
        }finally {
            setLoading(false);
        }
    }

    const login = async(email: string, password: string) => {
        try {
            setLoading(true);
            const resp = await firebase.auth()
                .signInWithEmailAndPassword(email, password)
    
            await configSession(resp.user);
            router.push('/');
        }finally {
            setLoading(false);
        }
    }

    const register = async(email: string, password: string) => {
        try {
            setLoading(true);
            const resp = await firebase.auth()
                .createUserWithEmailAndPassword(email, password)
    
            await configSession(resp.user);
            router.push('/');
        }finally {
            setLoading(false);
        }
    }

    const logout = async() => {
        try {
            await firebase.auth().signOut();
            await configSession(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-template-auth')) {
            const cancelObserver = firebase.auth().onIdTokenChanged(configSession)
            return () => cancelObserver()
        }else {
            setLoading(false);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            login,
            loginGoogle,
            register,
            logout,
            loading
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;
