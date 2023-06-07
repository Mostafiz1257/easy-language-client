import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../components/SocialLogin/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { updateUserProfile, createUser } = useContext(AuthContext)
    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
                updateUserProfile(data.name, data.PhotoURL)
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 pt-16 ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name"  {...register('name', { required: true })} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="PhotoURL" placeholder="PhotoURL"  {...register('PhotoURL', { required: true })} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"  {...register('email', { required: true,  })} className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"  {...register('password', { required: true ,minLength: 6})} className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password"  {...register('confirm_Password', { required: true })} className="input input-bordered" required />
                        </div>
                      
                        <div className="form-control mt-6">
                            <button className="btn border-orange-800 text-[#795548] btn-outline hover:bg-[#795548]">Register</button>
                        </div>
                        <p>Already have an accounts? <Link className=' text-orange-800 underline' to='/login'>Login</Link> here.</p>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Register;