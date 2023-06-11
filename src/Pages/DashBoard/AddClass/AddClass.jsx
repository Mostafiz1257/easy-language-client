import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext)
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imageURL = imageResponse.data.display_url;
                    const { language, course_price, available_seats, instructor_Email, instructor_Name } = data
                    const newData = {language,course_price:parseFloat(course_price),available_seats:parseInt(available_seats),instructor_Email,instructor_Name,status:'pending',image:imageURL}
                    // console.log(newData);
                    axiosSecure.post('/classes',newData)
                    .then(data=>{
                        if(data.data.insertedId){
                            Swal.fire({
                                icon: 'success',
                                title: 'WOW...',
                                text: 'New Class Pending for Admin Add',
                                
                              })
                        }
                    })
                }
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <div className=' md:flex '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Language</span>
                            </label>
                            <input type="text" placeholder="Language Course"  {...register('language', { required: true })} className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" placeholder="Instructor Name" defaultValue={user?.displayName} {...register('instructor_Name', { required: true })} className="input input-bordered" required />

                        </div>
                    </div>
                    <div className=' md:flex '>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text" placeholder="Email" defaultValue={user?.email} {...register('instructor_Email', { required: true })} className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Course Price</span>
                            </label>
                            <input type="text" placeholder="Course Price"  {...register('course_price', { required: true })} className="input input-bordered" required />

                        </div>
                    </div>
                    <div>
                        <div className="form-control w-1/2 mb-5">
                            <label className="label">
                                <span className="label-text">Available_Seats</span>
                            </label>
                            <input type="text" placeholder="Course Price"  {...register('available_seats', { required: true })} className="input input-bordered" required />
                        </div>
                        <div>
                            <input type="file" {...register('image', { required: true })} className="file-input w-full max-w-xs" /> <br />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn border-orange-800 text-[#795548] btn-outline hover:bg-[#795548]">Add Now</button>
                    </div>

                </div>
            </form>
        </>
    );
};

export default AddClass;