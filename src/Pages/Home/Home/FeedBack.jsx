
import Marquee from "react-fast-marquee";
const FeedBack = () => {
    return (
        <div>
            <div className="w-1/2 md:mx-auto my-12" data-aos="zoom-out-left">
                <h3 className="font-bold text-orange-700 md:text-3xl underline text-center">Student FeedBack</h3>
                
            </div>
            <Marquee speed={100}>
                <div className="flex gap-10 text-orange-700" data-aos="flip-up">
                    <div className="card w-96 h-80 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 ">
                            <img src="https://i.ibb.co/PrJY8XX/1.jpg" alt="Shoes" className="rounded-full w-24 h-24 border-4 border-orange-700" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mark Henrey</h2>
                            <p>I Love this Class.I want to visit this market everyday and there online thransport system is so well and you can easly buy there product as a good company they make my children Happy.</p>

                        </div>
                    </div>
                    <div className="card w-96 h-80 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 ">
                            <img src="https://i.ibb.co/0YKvSz1/chef4.jpg" alt="Shoes" className="rounded-full w-24 h-24 border-4 border-orange-700" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Glen Maxwel</h2>
                            <p>Just take it and I Love this toys.I want to visit this market everyday and there online thransport system is so well and you can easly buy there product as a good company they make my children Happy.Keep going</p>

                        </div>
                    </div>
                    <div className="card w-96 h-80 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 ">
                            <img src="https://i.ibb.co/mNDKM1W/4.jpg" alt="Shoes" className="rounded-full w-24 h-24 border-4 border-orange-700" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Tim Devid</h2>
                            <p>I want to visit this market everyday and there online thransport system is so well and you can easly buy there product as a good company they make my children Happy.</p>

                        </div>
                    </div>
                    <div className="card w-96 h-80 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 ">
                            <img src="https://i.ibb.co/5sXr2hc/3.jpg" alt="Shoes" className="rounded-full w-24 h-24 border-4 border-orange-700" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mark Stonies</h2>
                            <p> When I first see thid ,I Love this class.I want to visit this market everyday and there online thransport system is so well and you can easly buy there product as a good company they make my children Happy.Take Love</p>

                        </div>
                    </div>
                    <div className="card w-96 h-80 bg-base-100 shadow-xl ">
                        <figure className="px-10 pt-10 ">
                            <img src="https://i.ibb.co/DtgLxxz/chef5.jpg" alt="Shoes" className="rounded-full w-24 h-24 border-4 border-orange-700" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mitchel Stack</h2>
                            <p> Love this toys.I want to visit this market everyday and there online thransport system is so well and you can easly buy there product as a good company they make my children Happy.Go ahead.</p>

                        </div>
                    </div>



                </div>
            </Marquee>
        </div>

    );
};

export default FeedBack;