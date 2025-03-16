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
        
        <div className="flex align-items-center justify-content-start">
            <div className="block bg-primary font-bold text-center p-4 border-round mb-3">
                <h1>FitVAULT</h1>
            </div>
            <div className="block bg-primary font-bold text-center p-4 border-round mb-3">
                {error && <p className="error">{error}</p>}
            </div>
            <div className="block bg-primary font-bold text-center p-4 border-round mb-3">
                <InputText type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="block bg-primary font-bold text-center p-4 border-round mb-3">
                <InputText type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="block bg-primary font-bold text-center p-4 border-round mb-3">
                <Button onClick={handleLogin}>Login</Button>
            </div>
        </div>

    );
}
