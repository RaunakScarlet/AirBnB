import { Link } from "react-router-dom";

const Register = () => {
    console.log("Register");
    return (
        <div className="mt-4 flex items-center min-h-screen justify-center">
            <div className="-mt-64">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className=" max-w-md mx-auto">
                    <input type="text" placeholder="raunak" id="" />
                    <input type="email" placeholder="email" id="" />
                    <input type="password" placeholder="password" id="" />
                    <button className="primary">Register</button>
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
