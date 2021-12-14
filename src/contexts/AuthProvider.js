import React, { createContext } from 'react';
import useProvider from '../hooks/useProvider';



export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const AllContexts = useProvider();
    return (
        <AuthContext.Provider value={AllContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;