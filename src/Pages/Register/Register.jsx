
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile }=useContext(AuthContext);
    const navigate =useNavigate();
    const onSubmit = data =>{

        createUser(data.email, data.password)
        .then(result =>{
            const loggeduser =result.user;
            console.log(loggeduser);
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
                const saveUser ={name: data.name, email: data.email}
                fetch('http://localhost:5000/users',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'

                    },
                    body:JSON.stringify(saveUser)
                       
                    
                })
                .then(res=> res.json())
                .then(data=>{
                    if(data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully Sign up',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate('/')

                    }
                })
               
            })
            .catch(error=>console.log(error))
            
        })
        

        console.log(data)
    };
    return (
        <div>
            <Helmet>
                <title>Photography | Register </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="taxt" placeholder="name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name && <span className="text-warning">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="taxt" placeholder="photo URL" {...register("photoURL", { required: true })} className="input input-bordered" />
                                {errors.name && <span className="text-warning">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className="text-warning">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                
                                  })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-warning'>password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-warning'>password must be 6 character </p>}
                                {errors.password?.type === 'maxLength' && <p className='text-warning'>password must be less then 20 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-warning'>password must be One uppercase one lowercase one number & one special character </p>}
                               

                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">confirm password</span>
                                </label>
                                <input type="text" placeholder="confirm password" {...register("password", { required: true })} className="input input-bordered" />
                                {errors.text && <span className="text-warning">Password is required</span>}

                            </div> */}

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />

                            </div>
                            <p>Already have an a account? <Link className='text-warning font-bold' to="/login">Login</Link> </p>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;