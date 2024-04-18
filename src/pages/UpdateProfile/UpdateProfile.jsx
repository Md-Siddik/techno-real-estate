import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const UpdateProfileInfo = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { user, updateUser } = useContext(AuthContext);

    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUser(name, photo)
        .then(() => {
            console.log(user)
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <Helmet>
                <title>Techno-Real-Estate | UpdateProfile</title>
            </Helmet>
            <div className="w-[500px] m-auto pb-24">
                <h1 className="text-3xl my-10 text-center">Update Profile</h1>
                <form onSubmit={handleUpdate} className="w-full mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" defaultValue={user?.photoURL} placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className='flex items-center gap-4 relative'>
                            <input type={showPassword ? "text" : "password"} required name="password" placeholder="password" className="input input-bordered w-full" />
                            <span className='absolute right-6' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfileInfo;