import React from 'react';

const Instractor = ({ teacher }) => {
    const {name,email,photo,category} = teacher
    return (
        <>
            <div className=''>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/5sXr2hc/3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                           {name}
                            <div className="badge badge-secondary">{category}</div>
                        </h2>
                        <p> <span className=' font-bold'>Email:</span> {email}</p>
                        {/* <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div> */}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Instractor;