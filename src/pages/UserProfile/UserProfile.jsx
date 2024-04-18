import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <Helmet>
                <title>Techno-Real-Estate | UserProfile</title>
            </Helmet>
            <div className="container m-auto pb-24">
                <h1 className="text-3xl my-10 text-center">User Profile</h1>
                <div className="card w-96 bg-base-100 shadow-xl border-[1px] pt-14 m-auto">
                    <figure><img className="w-[200px] rounded-full" src={user.photoURL} alt="Profile" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{user.displayName}</h2>
                        <p>{user.email}</p>
                        <div className="card-actions justify-center py-4">
                            <Link to='/UpdateProfile'>
                                <button className="btn btn-primary text-xl font-bold">Update</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;