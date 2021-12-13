import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

const Payment = () => {
    const onSuccess = (payment) => {
        console.log("The payment was succeeded!", payment);
    }
    const onCancel = (data) => {
        console.log('The payment was cancelled!', data);
    }
    const onError = (err) => {
        console.log("Error!", err);
    }
    let env = 'sandbox';
    let currency = 'USD';
    let total = 1;

    const client = {
        sandbox: 'ASSY6pn30b_3-9l0rNCXMEqxUiE7xXD4cAJ5hGHjQ6NoEmC13yRF4FJR0NF75x4vj9dHDvujheXWBrCH',
        production: 'YOUR-PRODUCTION-APP-ID',
    }

    return (
        <div>
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        </div>
    );
};

export default Payment;