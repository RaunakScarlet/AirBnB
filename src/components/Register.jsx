import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = (e) => {
        e.preventDefault();
        axios.post('/register', {
            name,
            email,
            password
        })
    }
    return (
        <div className="mt-4 flex items-center min-h-screen justify-center">
            <div className="-mt-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className=" max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text" placeholder="raunak" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="primary" >Register</button>
                    <div className="flex justify-center">
                        <h1 className="inline text-gray-500 text-center">
                            Already a member?
                        </h1>
                        <Link
                            to={"/login"}
                            className="underline text-black pl-2"
                        >
                            login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
