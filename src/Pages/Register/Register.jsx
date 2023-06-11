import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../components/SocialLogin/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { updateUserProfile, createUser } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors },
        watch, } = useForm();
    const navigate = useNavigate()
    const [passwordError, setPasswordError] = useState('');

    const onSubmit = data => {
        console.log(data);
        // ---------------------
        const { password, confirm_Password } = data;
        if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password)) {
            setPasswordError(
                'Password must contain at least one capital letter and one special character'
            );
            return;
        }
        if (password !== confirm_Password) {
            setPasswordError("Passwords don't match");
            return;
        }
        // -------------------
        createUser(data.email, data.password)
            .then(() => {

                updateUserProfile(data.name, data.PhotoURL)
                const saveUser = { name: data.name, email: data.email, photo: data.PhotoURL }
                console.log(saveUser);
                fetch('https://easy-language-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset();
                            Swal.fire('Successfully login In')
                            navigate('/')
                        }
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const watchPassword = watch('password');


    return (
        <>

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
                                {/* --------- */}
                                {errors.PhotoURL && (
                                    <p className="text-red-500">PhotoURL is required</p>
                                )}
                                {/* ------------ */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"  {...register('email', { required: true, })} className="input input-bordered" required />
                                {/* ------ */}
                                {errors.email && (
                                    <p className="text-red-500">Email is required</p>
                                )}
                                {/* -------- */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"  {...register('password', { required: true, minLength: 6 })} className="input input-bordered" required />
                                {/* ----- */}
                                {errors.password && (
                                    <p className="text-red-500">Password is required</p>
                                )}
                                {/* ........ */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="password"  {...register('confirm_Password', { required: true })} className="input input-bordered" required />
                                {/* ------ */}
                                {errors.confirm_Password && (
                                    <p className="text-red-500">Passwords do not match</p>
                                )}
                                {/* --------- */}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn border-orange-800 text-[#795548] btn-outline hover:bg-[#795548]">Register</button>
                            </div>
                            <p className=' text-red-500'>{passwordError}</p>
                            <p>Already have an accounts? <Link className=' text-orange-800 underline' to='/login'>Login</Link> here.</p>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>

            </div>

        </>
    );
};

export default Register;