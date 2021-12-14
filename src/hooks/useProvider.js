import { useEffect, useState } from "react";

const useProvider = () => {
    const [user, setUser] = useState([])
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
        user
    };
};

export default useProvider;