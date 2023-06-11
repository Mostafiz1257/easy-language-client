import React, { useEffect, useState } from 'react';
import Classes from '../Home/PopularInstructor/Classes/Classes';

const AllClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://easy-language-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <>
            <div className=' pt-12'>
                <h2 className=' title '>Total Course Class</h2>
            </div>
            <div className=' grid lg:grid-cols-3 gap-5'>
                {
                    classes.map((item, index) => <Classes key={index} item={item}></Classes>)
                }
            </div>
        </>
    );
};

export default AllClasses;