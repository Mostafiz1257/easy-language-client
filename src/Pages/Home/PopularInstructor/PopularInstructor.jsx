import React, { useEffect, useState } from 'react';
import Instractor from '../../Instractor/Instractor/Instractor';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {

                const popular = data.filter(item => item.role === 'instructor')
                setInstructors(popular)
            })
    }, [])
    return (
        <>
        <div className='my-12'>
            <p className=' text-3xl font-bold text-center text-orange-800 underline underline-offset-4'>Popular Instructors</p>
        </div>
            <div className=' grid lg:grid-cols-3 gap-5'>
                {
                    instructors.slice(0,6).map((teacher, index) => <Instractor key={index} teacher={teacher}></Instractor>)
                }

            </div>
        </>
    );
};

export default PopularInstructor;