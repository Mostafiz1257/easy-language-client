import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    const handleGoogle = () => {
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className=' w-full  my-3'>
                <div className=' w-9 mx-auto'>
                    <button onClick={handleGoogle}>
                        <img className=' w-9' src="https://i.ibb.co/RpGS0c9/google.webp" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;