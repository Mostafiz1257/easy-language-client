import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className=" flex text-center items-center justify-center bg-gray-100	 h-screen	">
            <div className="border-red-500">
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="h-[200px] w-[400px] rounded-md" src="https://i.ibb.co/hVjtq2W/error.jpg" alt="" />
                <p data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className="text-xl text-red-400 mt-5">{error?.message}</p>
                <p data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className="text-5xl font-bold mb-5 text-orange-700">{status || 404}</p>
                <Link><button className="btn btn-style">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;