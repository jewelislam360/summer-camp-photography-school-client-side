import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Photography | Home</title>
        </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            
        </div>
    );
};

export default Home;