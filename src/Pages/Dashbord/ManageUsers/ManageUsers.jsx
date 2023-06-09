import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaBeer, FaTrashAlt, FaUsers } from 'react-icons/fa';


const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    return (
        <div className="w-full">
            <Helmet>
                <title>Photography | Manage Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold"> Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Instructor</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=><tr key={user._id}>
                            <th>{index +1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin'? 'admin': <button className="btn btn-ghost bg-warning"><FaUsers></FaUsers></button>}</td>
                            <td>{user.role === 'instructor'? 'instructor': <button className="btn btn-ghost bg-warning"><FaUsers></FaUsers></button>}</td>
                            <td><button className="btn btn-ghost bg-red-600"><FaTrashAlt></FaTrashAlt></button></td>
                        </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageUsers;