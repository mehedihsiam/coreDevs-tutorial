import { useEffect, useState } from "react";

const useProvider = () => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const currentUser = sessionStorage.getItem('email')

    const logOut = () => {
        sessionStorage.removeItem('email')
    }

    useEffect(() => {
        fetch(`https://vast-stream-90795.herokuapp.com/users?email=${currentUser}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return {

        logOut,
        currentUser,
        user,
        isLoading,
        setIsLoading
    };
};

export default useProvider;