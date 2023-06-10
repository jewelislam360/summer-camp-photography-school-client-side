import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from "sweetalert2";


const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })


    const handelMakeAdmin=(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${user.name} is an admin`,
                showConfirmButton: false,
                timer: 1500
            });
            }
        })
    }
    const handelMakeInstructor=(user)=>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${user.name} is an instructor`,
                showConfirmButton: false,
                timer: 1500
            });
            }
        })
    }
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
                            <th>Admin</th>
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
                            <td>{user.role === 'admin'? 'admin': <button onClick={()=>handelMakeAdmin(user)} className="btn btn-ghost bg-warning"><FaUsers></FaUsers></button>}</td>
                            <td>{user.role2 === 'instructor'? 'instructor': <button  onClick={()=>handelMakeInstructor(user)}className="btn btn-ghost bg-warning"><FaUsers></FaUsers></button>}</td>
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