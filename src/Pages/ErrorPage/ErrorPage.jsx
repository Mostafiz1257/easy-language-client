import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img className=' w-36' src="https://i.ibb.co/0FsCw2J/al.webp" alt="" />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-[#795548]'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn-style lg:mb-2'>
                        Back to homepage
                    </Link>
                    <p className=' text-gray-500'>Contract Us : +880123456789 | mostafiz.cse.1257@gmail.com</p>
                    <p className=' text-gray-500'>Address : House-12,Road-3,Sector:7,Uttara,Dhaka,Bangladesh-1230</p>
                    <p className='lg:mt-8 text-gray-500 divider'>Copy Write Issue 2023</p>
                    
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;