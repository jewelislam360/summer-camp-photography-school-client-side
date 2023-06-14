import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const MyEnrollClass = (email) => {
    const auth = useAuth();
    // console.log(user);
    console.log(email);
    const { data: myEnrollClass = [] } = useQuery({
        queryKey: ['myEnrollClass'],
        queryFn: async () => {
            const res = await fetch(`https://b7a12-summer-camp-server-side-jewelislam360.vercel.app/myenrollclass/${auth.user.email}`);
            return res.json(email);
        }

    })

    return (
        <div>
            <SectionTitle
                heading="My Enroll class"

            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Img</th>
                            <th>Class Name</th>
                            <th>Email</th>
                            <th>transactionId</th>
                            <th>date & Time</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            myEnrollClass?.map((classes, i) => <tr key={classes._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classes?.classImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{classes?.className}</span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{classes?.email}</span>
                                </td>

                                <td>
                                    <span className="badge badge-ghost badge-sm">{classes?.transactionId}</span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{classes?.date}</span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{classes?.price}</span>
                                </td>



                            </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyEnrollClass;