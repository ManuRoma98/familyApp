import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import 'primereact/resources/themes/lara-dark-amber/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        setError(null);
        const success = await login(username, password);
        if (success) {
            navigate("/dashboard");
        } else {
            setError("Credenziali errate!");
        }
    };

    return (

        <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
            <div className="flex flex-column align-items-center justify-content-center">
                <img src="C:\Users\Pr3S7igI0\Downloads\logo-white" alt="logo" className="mb-5 w-6rem flex-shrink-0"/>
                <div>
                    <div className="w-full surface-card py-8 px-5 sm:px-8">
                        <div className="text-center mb-5">
                            <img src="/demo/images/login/avatar.png" alt="Image" height="50" className="mb-3"/>
                            <div className="text-900 text-3xl font-medium mb-3">
                                Welcome!
                            </div>
                            <span className="text-600 font-medium">Sign in to continue</span>
                        </div>
                    
                        <div className="block bg-primary font-bold text-center border-round mb-3">
                            {error && <p className="error">{error}</p>}
                        </div>
                        
                        <div className="font-bold block bg-primary text-center border-round p-1 mb-3 p-float-label">
                            <i className="pi pi-user" />
                            <InputText id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="username">Username</label>
                        </div>

                        <div className="block bg-primary text-center border-round p-1 mb-3 p-float-label">
                            <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label className="font-bold block text-center mb-3" htmlFor="password">Password</label>
                        </div>

                        <div className="block bg-primary font-bold text-center border-round mb-3">
                            <Button onClick={handleLogin}>Login</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
