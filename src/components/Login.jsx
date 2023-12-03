import { Link } from "react-router-dom";

const Login = () => {
    console.log("login");
  return (
      <div className="mt-4 flex items-center min-h-screen justify-center">
          <div className="-mt-64">
              <h1 className="text-4xl text-center mb-4">Login</h1>
              <form className=" max-w-md mx-auto">
                  <input type="email" placeholder="email" id="" />
                  <input type="password" placeholder="password" id="" />
                  <button className="primary">Login</button>
                  <div className="flex justify-center">
                      <h1 className="inline text-gray-500 text-center">
                          Don't have an account?
                      </h1>
                      <Link to={'/register'} className="underline text-black pl-2">Register now</Link>
                  </div>
              </form>
          </div>
      </div>
  );
}

export default Login
