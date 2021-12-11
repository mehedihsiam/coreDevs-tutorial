import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const userEmail = sessionStorage.getItem('email')
    return (
        <Route
            {...rest}
            render={({ location }) => userEmail ? (children)
                :
                (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    ></Redirect>
                )
            }
        />
    );
};

export default PrivateRoute;