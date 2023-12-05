import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";



const Login = () => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    
    const loginUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/login", {
                email,
                password,
            });
            alert("Login Successful");
            setRedirect(true);
        } catch (error) {
            alert("Login Unsuccessful");
        }
    };

    if (redirect) {
       return  <Navigate to={'/'}/>
    }
        return (
            <div className="mt-4 flex items-center min-h-screen justify-center">
                <div className="-mt-64">
                    <h1 className="text-4xl text-center mb-4">Login</h1>
                    <form className=" max-w-md mx-auto" onSubmit={loginUser}>
                        <input
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="primary">Login</button>
                        <div className="flex justify-center">
                            <h1 className="inline text-gray-500 text-center">
                                Don't have an account?
                            </h1>
                            <Link
                                to={"/register"}
                                className="underline text-black pl-2"
                            >
                                Register now
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
}

export default Login
