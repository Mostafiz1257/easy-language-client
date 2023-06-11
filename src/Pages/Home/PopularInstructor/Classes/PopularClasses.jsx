import React, { useEffect, useState } from 'react';
import Classes from './Classes';


const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://easy-language-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                // const popularClasses = data.filter(item => item.category === 'popular')
                setClasses(data)
            })
    }, [])
    return (
        <>
            <div  className='my-12'>
                <p className=' text-3xl font-bold text-center text-orange-800 underline underline-offset-4'>Popular Classes</p>
            </div>
            <div className=' grid lg:grid-cols-3 gap-5'>
                {
                    classes.slice(0, 6).map((item, index) => <Classes key={index} item={item}></Classes>)
                }
            </div>
        </>
    );
};

export default PopularClasses;