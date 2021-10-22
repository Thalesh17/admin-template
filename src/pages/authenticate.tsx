import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconExclamation } from "../components/icons/icons";
import useAuth from "../data/hook/useAuth";

export default function authenticate() {
    const {login, register, loginGoogle} = useAuth();
    
    const [mode, setMode] = useState<"login" | "register">('login');
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");

    const renderError = (msg, timeSeconds = 5) => {
        setError(msg);
        setTimeout(() => {
            setError(null)
        }, timeSeconds * 1000)
    }

    const onSubmit = async () => {
        try {
            if(mode === 'login') {
                await login(email, password);
            }else {
                await register(email, password);
            }
        }catch(e) {
            renderError(e.message)
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:m-1/2 lg:w-2/3">
                <img 
                    className="h-screen w-full object-cover" 
                    src="https://source.unsplash.com/random" 
                    alt="Imagem da tela de autenticação" 
                />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`text-3xl font-bold mb-5`}>
                    { mode === 'login' ? 'Entre com sua conta' : 'Cadastre-se na plataforma'}
                </h1>
                {error ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        {IconExclamation(7)}
                        <span className="ml-3">{error}</span>
                    </div>
                ) : false}
                <AuthInput 
                    label="Email"
                    type="email"
                    valueChange={setEmail}
                    value={email}
                    required
                />
                <AuthInput 
                    label="Senha"
                    type="password"
                    valueChange={setPassword}
                    value={password}
                    required
                />

                <button onClick={onSubmit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400 
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400 
                    text-white rounded-lg px-4 py-3
                `}>
                    Entrar com Google
                </button>
                
                {mode === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a
                            onClick={() => setMode('register')} 
                            className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer ml-2
                            `}
                        >
                            Crie uma conta gratuitamente
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a
                            onClick={() => setMode('login')} 
                            className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer ml-2
                            `}
                        >
                            Entre com suas credenciais
                        </a>
                    </p>
                )
                }
            </div>
        </div>
    )
}
