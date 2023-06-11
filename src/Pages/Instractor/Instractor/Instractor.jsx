import React from 'react';

const Instractor = ({ teacher }) => {
    const { name, email, photo, category } = teacher
    return (
        <>

            <div className="card w-96 bg-base-100 shadow-xl group">
                <figure><img  className='object-cover w-64 rounded-lg h-64 group-hover:scale-110 transition duration-300 cursor-pointer' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{category}</div>
                    </h2>
                    <p> <span className=' font-bold'>Email:</span> {email}</p>
                </div>
            </div>


        </>
    );
};

export default Instractor;