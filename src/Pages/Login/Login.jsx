
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
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input defaultValue="test" {...register("email", { required: true })} />

                
                <input {...register("password", { required: true })} />
               
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>

        </div>
    );
};

export default Login;