import React from 'react';
import SocialLogin from '../components/SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" required className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn border-orange-800 text-[#795548] btn-outline hover:bg-[#795548]">Login</button>
                    </div>
                <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default Login;