import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [user, setUser] = useState(null);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleLogin = e => {
        try {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password');

            signIn(email, password)
                .then(result => {
                    navigate(location?.state ? location.state : '/');
                })
                .catch(error => {
                    toast(error)
                })
        }
        catch(error){
            toast.error("Faild to login");
        }
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                console.log(user);
            })
            .catch(error => {
                toast.error(error)
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                console.log(user);
            })
            .catch(error => {
                toast.error(error)
            })
    }
    console.log(user);

    return (
        <div>
            <Helmet>
                <title>Techno-Real-Estate | Login</title>
            </Helmet>
            <div className="w-[500px] m-auto pb-24">
                <h1 className="text-3xl my-10 text-center">Please Login</h1>
                <form onSubmit={handleLogin} className="md:w-full mx-auto">
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="flex justify-center gap-8 pt-8">
                    <button onClick={handleGoogleSignIn} className="btn text-2xl">
                        <FaGoogle></FaGoogle>
                    </button>
                    <button onClick={handleGithubSignIn} className="btn text-2xl">
                        <FaGithub></FaGithub>
                    </button>
                </div>
                <p className="text-center mt-4">Do not have any account? <Link className="font-bold text-blue-500" to="/register">Register</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;