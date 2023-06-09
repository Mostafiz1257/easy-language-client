import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllStudent = () => {
    const { data: allStudent = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                Swal.fire(`He is Now  Admin` )
            }
        })
    }
    const handleMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                Swal.fire(`He is now Instructor.` )
            }
        })
    }

   

    return (
        <>
            <div className=' lg:w-3/4 mx-auto'>
                {
                    allStudent.length < 1 && <div>
                        <h2 className=' text-3xl font-bold text-orange-700 text-center pb-12'>Your Class List is Empty. Please Add Some Class. </h2>
                    </div>
                }

                {
                    allStudent.length > 0 && <div>
                        <div className="overflow-x-auto ">
                            <table className="table ">
                                <thead className=' bg-orange-300'>
                                    <tr>
                                        <th>#</th>
                                        <th>photo</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Role</th>

                                    </tr>
                                </thead>
                                <tbody className=' bg-orange-100 font-bold'>
                                    {
                                        allStudent.map((cls, index) => <tr key={cls._id}>
                                            <th>{index + 1}</th>
                                            {/* TODO: ADD IMAGE */}
                                            <td ></td>
                                            <td>{cls.name}</td>
                                            <td>{cls.email} </td>
                                            <td>
                                                <button onClick={() => handleMakeInstructor(cls)} className=' btn btn-danger btn-sm bg-red-200 hover:bg-red-400'>
                                                    {
                                                        cls.role === 'instructor' ? 'instructor' : <FaUser></FaUser>
                                                    }
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => handleMakeAdmin
                                                    (cls)} className=' btn btn-danger btn-sm bg-green-200 hover:bg-green-400'>
                                                    {
                                                        cls.role === 'admin' ? 'admin' : <FaUser></FaUser>
                                                    }
                                                </button>
                                            </td>

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

export default AllStudent;