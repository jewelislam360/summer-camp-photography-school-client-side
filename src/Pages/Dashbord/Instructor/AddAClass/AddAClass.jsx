import { useForm } from 'react-hook-form';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';



const img_hosting_token = import.meta.env.VITE_img_upload_token;

const AddAClass = () => {
    const [axiosSecure]=useAxiosSecure();


    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const {user}=useAuth();
    console.log(user);
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
        .then(res=>res.json())
        .then(imgResponse=>{
            


            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {className, instructorName, instructorEmail, availableSeats, price } = data;
                const newClass = {className, image: imgURL, instructorName, instructorEmail, availableSeats: parseFloat(availableSeats), price: parseFloat(price), status:"pending"};
                console.log(newClass)

                axiosSecure.post('/addclass', newClass)
                .then(data =>{
                    console.log('after posting new class', data.data);
                    
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully Add a class',
                            showConfirmButton: false,
                            timer: 1500
                          });

                    }
                })
            }
            console.log(imgResponse);
            
        })
        

        console.log(data)
    };
    console.log(errors);

    return (
        <div className='w-full'>
            <div>
            <SectionTitle
            heading={"Add a Class"}
            ></SectionTitle>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='md:flex gap-5 mb-10'>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Class name*</span>
                        </label>
                        <input type="text" placeholder='Class name' {...register("className", { required: true })} className="input input-bordered" />

                    </div>

                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Img Upload*</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />

                    </div>
                </div >
                <div className='md:flex gap-5'>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} {...register("instructorName")} className="input input-bordered" />

                    </div>

                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Instructor email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} {...register("instructorEmail", { required: true })} className="input input-bordered" />

                    </div>
                </div>

                <div className='md:flex gap-5 my-10 '>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input type="number" placeholder="Available seats" {...register("availableSeats", { required: true })} className="input input-bordered" />

                    </div>

                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered" />

                    </div>
                </div>

                <input className='btn btn-neutral w-full' type="submit"  />
            </form>

        </div>
    );
};

export default AddAClass;