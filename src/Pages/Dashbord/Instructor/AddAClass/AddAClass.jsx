import { useForm } from 'react-hook-form';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import useAuth from '../../../../Hooks/useAuth';
const AddAClass = () => {
    const {user}=useAuth()
    console.log(user);
    


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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
                        <input type="file" {...register("img", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />

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