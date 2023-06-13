import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
    const data = useLoaderData();
    const {price}=data;
    console.log(price);
    return (
        <div className="w-full">
            <SectionTitle
                heading="Payment"
            ></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} data={data} ></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;