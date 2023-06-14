import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";



const MyClass = (email) => {
    const auth = useAuth();
    console.log(email);
    const { data: myClass = [],refetch } = useQuery({
        queryKey: ['myClass'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myaddclass/${auth.user.email}`);
            return res.json(email);
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
        myClass?.map((classes, i)=> <tr key={classes._id}>
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
              <span className="badge badge-ghost badge-sm">{classes.status}</span>
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

export default MyClass;