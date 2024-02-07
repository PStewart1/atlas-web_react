import { createContext } from 'react';

const user = {
    email: '',
    password: '',
    isLoggedIn: false
};

const logOut = () => {};

export const AppContext = createContext({
    user,
    logOut
});
