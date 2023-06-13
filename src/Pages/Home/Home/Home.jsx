import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import PopularClass from "../PopularClasses/PopularClass";



const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Photography | Home</title>
        </Helmet>
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
            <PopularClass></PopularClass>
            <AboutUs></AboutUs>
            
        </div>
    );
};

export default Home;