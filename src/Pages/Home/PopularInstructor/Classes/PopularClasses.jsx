import React, { useEffect, useState } from 'react';
import Classes from './Classes';

const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                const popularClasses = data.filter(item => item.category === 'popular')
                setClasses(popularClasses)
            })
    }, [])
    return (
        <>
            <div className='my-12'>
                <p className=' text-3xl font-bold text-center text-orange-800 underline underline-offset-4'>Popular Classes</p>
            </div>
            <div>
   {
      classes.map((cal,index) => <Classes key={index} cal={cal}></Classes>)
   }
            </div>
        </>
    );
};

export default PopularClasses;