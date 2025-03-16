import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        logout();
    };

    return (
        <div>
            <h1>Benvenuto, {user?.username}!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
