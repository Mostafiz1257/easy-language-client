import React from 'react';
import Banner from '../Banner';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PopularClasses from '../PopularInstructor/Classes/PopularClasses';
import Sponsor from './Sponsor/Sponsor';
import FeedBack from './FeedBack';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <FeedBack></FeedBack>
            <Sponsor></Sponsor>
        </div>
    );
};

export default Home;