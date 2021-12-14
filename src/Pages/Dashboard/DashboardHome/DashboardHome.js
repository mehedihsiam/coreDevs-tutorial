import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth()
    return (
        <div>
            {
                user || <p>You Have to login first</p>
            }
        </div>
    );
};

export default DashboardHome;