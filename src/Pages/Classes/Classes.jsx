import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Classes = (status) => {
    const navigate = useNavigate();
    const location = useLocation();

    const {user}=useAuth();
    const [isAdmin]=useAdmin();
    const [isInstructor]= useInstructor();

    const { data: approveClass = [], } = useQuery({
        queryKey: ['approveClass'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allclass/${status}`);
            console.log(res);
            return res.json(status);
        }
    })

    const handelSelect=(item)=>{
        if(user && user?.email){
            const selectItem = {
                classId: item._id,
                 img: item.image,
                  className: item.className,
                   instructorName: item.instructorName,
                    availableSeats: item.availableSeats,
                     price: item.price,
                      email: user.email,
                      enrolledStudent: item.enrolledStudent
            }
            fetch('http://localhost:5000/selectedclass',{
                method: "POST",
                headers: 
                    {
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(selectItem) 
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })


            
        }
        else{
            navigate('/login',{state:{from: location}})

        }
        
       


    }
    return (
        <div>
            <SectionTitle
                heading="All Classes"

            ></SectionTitle>
            <div className="grid md:grid-cols-3">
            {
                approveClass.map(item => <p key={item._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={item?.image} alt="Shoes" className="rounded-xl w-full " />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{item?.className}</h2>
                            <p className="font-semibold"><span className="font-bold">Instructor Name:</span> {item?.instructorName}</p>
                            <p className="font-semibold"><span className="font-bold">Available Seats: </span> {item?.availableSeats}</p>
                            <p className="font-semibold"> <span className="font-bold">Price: </span> ${item?.price}</p>
                            <p className="font-semibold"> <span className="font-bold">Enrolled: </span> ${item?.enrolledStudent}</p>
                            <div className="card-actions">
                                <button onClick={()=>handelSelect(item)}  className={isAdmin || isInstructor ? "btn btn-primary btn-disabled": "btn btn-primary"}>Select</button>
                                
                            </div>
                        </div>
                    </div>
                </p>)
            }
            </div>

        </div>
    );
};

export default Classes;