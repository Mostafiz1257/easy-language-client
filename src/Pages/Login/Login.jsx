import React, { useContext } from 'react';
import SocialLogin from '../components/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const navigate=useNavigate();
    const onSubmit = data => {
        signIn(data.email,data.password)
        .then(result=>{
            const loggedUser = result.user;
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200 pt-8">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"  {...register('email', { required: true })} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"  {...register('password', { required: true })} className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn border-orange-800 text-[#795548] btn-outline hover:bg-[#795548]">Login</button>
                        </div>
                        <p>I have no accounts? <Link className=' text-orange-800 underline' to='/register'>Register</Link> here.</p>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;