import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const PopularInstructor = (instructor) => {


    const { data: allInstructor = [],  } = useQuery({
        queryKey: ['allInstructor'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/${instructor}`);
            console.log(res);
            return res.json(instructor);
        }
    })
    return (
        <div>
            <SectionTitle
            heading="Popular Instructors"
            subHeading="Photography schools are some of the most acclaimed and renowned institutions in the world."
            
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    allInstructor.slice(0,7).map(instructor => <p key={instructor._id}>

                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-12 py-5">
                                <img className="rounded-xl h-60" src={instructor.image} alt="Shoes" />
                                </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name: {instructor.name}</h2>
                                <p>Email: {instructor.email}</p>
                            </div>
                        </div>
                    </p>)
                }
            </div>
            
        </div>
    );
};

export default PopularInstructor;