import React, { useEffect, useState } from 'react';

const TotalClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <>
            <div>
                <h2 className=' text-3xl font-bold text-orange-700 text-center underline'>All Class List</h2>
            </div>
            
        </>
    );
};

export default TotalClass;