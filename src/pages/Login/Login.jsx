import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        signIn(email, password)
        .then(result => {
            // console.log(result.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-3xl my-10 text-center">Please Login</h1>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have any account? <Link className="font-bold text-blue-500" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;