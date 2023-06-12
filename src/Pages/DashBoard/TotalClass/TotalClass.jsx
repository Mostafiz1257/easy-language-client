import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TotalClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://easy-language-server.vercel.app/classes')
            .then(res => res.json())
            .then(data =>{
                const pendingClass = data.filter(newClass=>newClass.status==='pending')
                setClasses(pendingClass)
            })
    }, [])
    return (
        <>
            <div>
                <h2 className=' text-3xl font-bold text-orange-700 text-center underline'>All Class List</h2>
            </div>
<div>
{
                    classes.length > 0 && <div>
                        <div className="overflow-x-auto ">
                            <table className="table ">
                                <thead className=' bg-orange-300'>
                                    <tr>
                                        <th>#</th>
                                        <th>Language Name</th>
                                        <th>Teacher Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                        <th>Status</th>

                                    </tr>
                                </thead>
                                <tbody className=' bg-orange-100 '>
                                    {
                                        classes.map((cls, index) => <tr key={cls._id}>
                                            <th>{index + 1}</th>
                                            <td className=' font-bold'>{cls.language}</td>
                                            <td>{cls.instructor_Name}</td>
                                            <td>{cls.course_price} $</td>
                                            <td><button onClick={() => handleDelete(cls)} className=' btn btn-danger btn-sm bg-red-200 hover:bg-red-400'>denied</button></td>
                                            <td>
                                              
                                                    <button className='hover:bg-green-400 btn border-0 btn-primary btn-sm bg-green-200 text-black'>Approve </button>
                                               
                                            </td>
                                            <td>{cls.status}</td>

                                        </tr>)
                                    }

                                </tbody>

                            </table>
                        </div>
                    </div>
                }
</div>
        </>
    );
};

export default TotalClass;