import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Welcome = () => {
    const {user} = useContext(AuthContext)
    // console.log(user.name);
    return (
        <div>
            <h2 className=' text-3xl font-bold'>Welcome to Your <span className=' text-orange-700'>DashBoard</span> {user?.name}</h2>
            <p className='text-xl text-gray-400'>Explore your your Dashboard Now</p>
        </div>
    );
};

export default Welcome;