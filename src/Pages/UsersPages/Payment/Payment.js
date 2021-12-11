import { Button } from '@mui/material';
import React, { useState } from 'react';
import Paypal from './Paypal/Paypal';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Payment = () => {
    const [checkout, setCheckout] = useState(false)
    return (
        <div>
            {
                checkout ?
                    <Paypal />
                    :
                    <Button onClick={() => setCheckout(true)}>Checkout</Button>
            }
            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
        </div>
    );
};

export default Payment;