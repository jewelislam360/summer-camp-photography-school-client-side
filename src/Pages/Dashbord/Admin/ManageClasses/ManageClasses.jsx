import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageClasses = () => {
 



    const {data: allclass = [],  refetch} = useQuery({
        queryKey: ['allclass'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/allclass');
            console.log(res);
            return res.json();
        }   
    })
    
    const handelDelete=(id)=>(
        fetch(`http://localhost:5000/allclass/${id}`,{
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

    const handelStatusApprove=(id)=>{
        fetch(`http://localhost:5000/allclass/${id}`,{
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
                title: 'Class approve',
                showConfirmButton: false,
                timer: 1500
            });
            }
        })
    }
    const handelStatusPending=(id)=>{
        fetch(`http://localhost:5000/allclass/status/${id}`,{
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
                title: 'Class Pending',
                showConfirmButton: false,
                timer: 1500
            });
            }
        })
    }


    
    return (
        <div className="w-full">
            <SectionTitle
            heading="Manage all classes"
            
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
        <th>Email</th>
        <th>Price</th>
        <th>Seats</th>
        <th>Status</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        allclass?.map((classes, i)=> <tr key={classes._id}>
            <th>
                {i+1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={classes.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>

              </div>
            </td>
            <td>
              <span  className="badge badge-ghost badge-sm">{classes.className}</span>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{classes.instructorName}</span>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{classes.instructorEmail}</span>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{classes.price}</span>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{classes.availableSeats}</span>
            </td>
            <td>
              
              <button onClick={()=>handelStatusPending(classes._id)} className={classes.status === "pending"? "btn btn-success btn-xs" :"btn btn-ghost btn-xs"}>pending</button><br />
              <button onClick={()=>handelStatusApprove(classes._id)} className={classes.status === "approve"? "btn btn-success btn-xs" :"btn btn-ghost btn-xs"}>Approved</button><br />
              <button className={classes.status === "deny"? "btn btn-success btn-xs" :"btn btn-ghost btn-xs"}>denied</button>
              
            </td>
            <td><button onClick={()=>handelDelete(classes._id)} className="btn btn-ghost bg-red-600"><FaTrashAlt></FaTrashAlt></button></td>
            
          </tr> )
      }
      
    </tbody>
    
    
  </table>
</div>

            
        </div>
    );
};

export default ManageClasses;