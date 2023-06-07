import React from 'react';
import Banner from '../Banner';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import PopularClasses from '../PopularInstructor/Classes/PopularClasses';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <PopularInstructor></PopularInstructor>
           <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;