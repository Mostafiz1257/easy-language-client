import React, { useEffect, useState } from 'react';
import Instractor from '../Instractor/Instractor/Instractor';

const AllInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        // fetch('http://localhost:5000/instructors')
        //     .then(res => res.json())
        //     .then(data => {
        //         setInstructors(data)

        //     })
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {

                const popular = data.filter(item => item.role === 'instructor')
                setInstructors(popular)
            })
    }, [])
    return (
        <>
            <div className=' pt-12'>
                <h2 className=' title '>All Instructors</h2>
            </div>
            <div className=' grid lg:grid-cols-3 gap-5'>
                {
                    instructors.map((teacher, index) => <Instractor key={index} teacher={teacher}></Instractor>)
                }
            </div>
        </>
    );
};

export default AllInstructors;