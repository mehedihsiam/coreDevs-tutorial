const useProvider = () => {

    const logOut = () => {
        sessionStorage.removeItem('email')
    }
    return {

        logOut
    };
};

export default useProvider;