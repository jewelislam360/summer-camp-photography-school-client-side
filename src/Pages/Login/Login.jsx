
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (

        <div>
            <Helmet>
                <title>Photography | Login </title>
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("Email", { required: true })} className="input input-bordered" />
                                {errors.Email && <span className="text-warning">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered" />
                                {errors.password && <span className="text-warning">This field is required</span>}
                                
                            </div>
                            
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                                
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;