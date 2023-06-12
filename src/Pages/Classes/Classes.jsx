import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Classes = (status) => {
    const { data: approveClass = [], isLoading: loading } = useQuery({
        queryKey: ['approveClass'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allclass/${status}`);
            console.log(res);
            return res.json(status);
        }
    })
    return (
        <div>
            <SectionTitle
                heading="All Classes"

            ></SectionTitle>
            {approveClass.length}
            <div className="grid md:grid-cols-3">
            {
                approveClass.map(item => <p key={item._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={item.image} alt="Shoes" className="rounded-xl w-full " />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{item.className}</h2>
                            <p className="font-semibold"><span className="font-bold">Instructor Name:</span> {item.instructorName}</p>
                            <p className="font-semibold"><span className="font-bold">Available Seats: </span> {item.availableSeats}</p>
                            <p className="font-semibold"> <span className="font-bold">Price:: </span> ${item.price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Select</button>
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