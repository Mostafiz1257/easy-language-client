import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import useMyClass from '../../../hooks/useMyClass';

const Payment = () => {
    const [myClass] = useMyClass();
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

    const total = myClass.reduce((sum, cls) => sum + cls.course_price, 0)
    // let total =0;
    // myClass.forEach((cls) => {
    //     total += cls.course_price;
    //   });
    const price = parseInt(total.toFixed(2))
    return (
        <div className=' w-1/2 mx-auto'>
            <h2 className=' text-3xl font-bold underline text-orange-700 mb-16'>Payment Now...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;