import React, { useEffect, useState } from 'react';

const Subscriptions = () => {
    const [subscriptions, setSubscriptions] = useState([])
    useEffect(() => {
        fetch('https://vast-stream-90795.herokuapp.com/subscriptions')
            .then(res => res.json())
            .then(data => setSubscriptions(data))
    }, [])
    console.log(subscriptions)
    return (
        <div>

        </div>
    );
};

export default Subscriptions;