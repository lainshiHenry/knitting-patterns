import { useState } from "react";
import { signInWithGoogle, registerWithEmail, loginWithEmail, logout } from "../auth.tsx";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2 my-2 w-full" />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2 my-2 w-full" />

            <button onClick={() => loginWithEmail(email, password)} className="bg-blue-500 text-white p-2 my-2 w-full">Login</button>
            <button onClick={() => registerWithEmail(email, password)} className="bg-green-500 text-white p-2 my-2 w-full">Register</button>
            <button onClick={signInWithGoogle} className="bg-red-500 text-white p-2 my-2 w-full">Sign in with Google</button>
            <button onClick={logout} className="bg-gray-500 text-white p-2 my-2 w-full">Logout</button>
        </div>
    );
};

export default Login;
