import { useQuery } from "@tanstack/react-query";
import { FaCcAmazonPay, FaTrashAlt } from "react-icons/fa";

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const UserSelectClass = () => {
    const {user, loading}= useAuth();
    // console.log(user);
    const { data: secectClass = [], refetch } = useQuery({
        queryKey: ['secectClass'],
        queryFn: async () => {
            const res = await fetch(`https://b7a12-summer-camp-server-side-jewelislam360.vercel.app/selectedclass/${user?.email}`);
            return res.json();
        }
        
    })


    const handelDelete=(id)=>(
       
      fetch(`https://b7a12-summer-camp-server-side-jewelislam360.vercel.app/selectedclass/${id}`,{
          method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          if(data.deletedCount){
              refetch()
              Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Delete is successfully',
                  showConfirmButton: false,
                  timer: 1500
              });

          }

      })

  )
   
     
    
    return (
        <div className="w-full">
            <SectionTitle
            heading="My Select classes"
            
            ></SectionTitle>


<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class Img</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        
        <th>Price</th>
        <th>Seats</th>
        <th>payment</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {

        secectClass?.map((classes, i)=> <tr key={classes._id}>
            <th>
                {i+1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={classes?.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>

              </div>
            </td>
            <td>
              <span  className="badge badge-ghost badge-sm">{classes?.className}</span>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{classes?.instructorName}</span>
            </td>
            
            <td>
              <span className="badge badge-ghost badge-sm">{classes?.price}</span>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{classes?.availableSeats}</span>
            </td>
            
            <td><Link to={`/dashboard/payment/${classes._id}`}><button className="btn btn-ghost bg-warning"><FaCcAmazonPay></FaCcAmazonPay></button></Link></td>
            <td><button onClick={()=>handelDelete(classes._id)}  className="btn btn-ghost bg-red-600"><FaTrashAlt></FaTrashAlt></button></td>
            
            </tr> 
            )
      }
      
    </tbody>
    
    
  </table>
</div>

            
        </div>
    );
};

export default UserSelectClass;