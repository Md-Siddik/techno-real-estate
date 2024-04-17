import { Helmet } from "react-helmet";

const UserProfile = () => {
    return (
        <div>
            <Helmet>
                <title>Techno-Real-Estate | UserProfile</title>
            </Helmet>
            <div>
                <h1 className="text-3xl my-10 text-center">Please Login</h1>
                <form onSubmit="" className="md:w-3/4 lg:w-1/2 mx-auto">
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
            </div>
        </div>
    );
};

export default UserProfile;