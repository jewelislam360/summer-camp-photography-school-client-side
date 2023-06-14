import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import about from '../../../assets/img/benner/pabout.png';

const AboutUs = () => {
    return (
        <>
        <SectionTitle
        heading="About Us"
        subHeading="Photography schools are some of the most acclaimed and renowned institutions in the world."
        
        ></SectionTitle>
        <div className="md:flex gap-8 text-center items-center ">
            <div className='w-[50%]'>
                <p>Photography schools are some of the most acclaimed and renowned institutions in the world.

                    Some are standalone colleges that teach nothing but photography – analogue and film. Others are art and design institutions that teach a broad range of visual and creative arts.

                    Then there are some that are a single element of a much larger university that teaches everything from Veterinary Science to Bee Keeping.

                    In this article, we take a look at the very best photography schools around the world in 2023.

                    While there are countless learning institutes globally (not to mention online photography classes/courses), I have chosen renowned, highly acclaimed or ones that simply offer the best and most unique program.

                    Let’s get into it and look at the best photography schools worldwide – region by region.</p>
            </div>
            <div className='w-[50%]' >
                <img className='' src={about} alt="" />
            </div>

        </div>
        
        </>
        
    );
};

export default AboutUs;