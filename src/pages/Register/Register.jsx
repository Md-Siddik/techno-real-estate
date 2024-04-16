import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    
    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        setRegisterError('');
        
        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters of longer');
            return;
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
            setRegisterError(error.message);
        })
    }

    return (
        <div>
            <Helmet>
                <title>Techno-Real-Estate | Register</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <h1 className="text-3xl my-10 text-center">Please Register</h1>
                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="photo url" className="input input-bordered" />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                {
                    registerError && <p className='text-red-600'>{registerError}</p>
                }
                <p className="text-center mt-4">Already have an account? <Link className="font-bold text-blue-500" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;