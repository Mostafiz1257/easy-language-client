import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyClass = () => {
    const { user } = useContext(AuthContext)
    const [myClass, setMyClass] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/newClass/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyClass(data)
            })
    }, [])
    return (
        <>
            {
                myClass.length <= 0 &&
                <div>
                   <h3 className=' text-3xl font-bold text-orange-700 text-center'>You never create any class before .</h3>
                </div>
            }
            {
                    myClass.length > 0 && <div>
                        <div className="overflow-x-auto ">
                            <table className="table ">
                                <thead className=' bg-orange-300'>
                                    <tr>
                                        <th>#</th>
                                        <th>Language Name</th>
                                        <th>Teacher Name</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Seats</th>
                                        <th>Price</th>

                                    </tr>
                                </thead>
                                <tbody className=' bg-orange-100 '>
                                    {
                                        myClass.map((cls, index) => <tr key={cls._id}>
                                            <th>{index + 1}</th>
                                            <td className=' font-bold'>{cls.language}</td>
                                            <td>{cls.instructor_Name}</td>
                                            <td>{cls.course_price} $</td>
                                            <td className=' font-bold'>{cls.status}</td>
                                            <td>{cls.available_seats}</td>
                                            <td>{cls.course_price}$</td>

                                        </tr>)
                                    }

                                </tbody>

                            </table>
                        </div>
                    </div>
                }
        </>
    );
};

export default MyClass;