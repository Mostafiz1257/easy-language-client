import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAdmin from '../../../../hooks/useAdmin';
import useInstructor from '../../../../hooks/useInstructor';


const Classes = ({ item }) => {
    const { language, image, instructor_Name, available_seats, course_price } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    const handleAddClass = (item) => {
        if (user && user.email) {
            const saveClass = { student_Name: user.displayName, email: user.email, language_name: language, instructor_Name, course_price }
            fetch('https://easy-language-server.vercel.app/myClass', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveClass)
            })
                .then(result => result.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data);
                        Swal.fire({
                            icon: 'success',
                            title: 'wow',
                            text: 'Successfully added',
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login for add Your Class',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })

        }
    }
    // https://i.ibb.co/Hpk8Xd4/japan.jpg
    return (
        <div className="card  w-96 mx-auto object-cover glass group">
            <figure><img className='w-64 group-hover:scale-110 transition duration-200 ' src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-orange-700 ">{language} Language</h2>
                <h2 className="card-title">Instructor:  {instructor_Name}</h2>
                <h2 className="card-title">Available Seats:  {available_seats}</h2>
                <p className=' text-orange-700'>Price: {course_price}$</p>
                <div className="card-actions justify-end">
                    <button disabled={isAdmin || isInstructor} onClick={() => handleAddClass(item)} className="btn btn-style">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Classes;