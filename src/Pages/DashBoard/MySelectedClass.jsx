import React from 'react';
import useMyClass from '../../hooks/useMyClass';
import Swal from 'sweetalert2';

const MySelectedClass = (cls) => {
    const [myClass, refetch] = useMyClass();
    const handleDelete = (cls) => {
        console.log(cls._id);
        console.log('hello');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {

                fetch(`https://easy-language-server.vercel.app/myClass/${cls._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <>
            <div className=' lg:w-3/4 mx-auto'>
                {
                    myClass.length < 1 && <div>
                        <h2 className=' text-3xl font-bold text-orange-700 text-center pb-12'>Your Class List is Empty. Please Add Some Class. </h2>
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
                                        <th>Action</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody className=' bg-orange-100 '>
                                    {
                                        myClass.map((cls, index) => <tr key={cls._id}>
                                            <th>{index + 1}</th>
                                            <td className=' font-bold'>{cls.language_name}</td>
                                            <td>{cls.instructor_Name}</td>
                                            <td>{cls.course_price} $</td>
                                            <td><button onClick={() => handleDelete(cls)} className=' btn btn-danger btn-sm bg-red-200 hover:bg-red-400'>Delete</button></td>
                                            <td><button className='hover:bg-green-400 btn border-0 btn-primary btn-sm bg-green-200 text-black'>Pay </button></td>

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

export default MySelectedClass;