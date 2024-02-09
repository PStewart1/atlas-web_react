import { createContext } from 'react';

export const user = {
    email: '',
    password: '',
    isLoggedIn: false
};

export const logOut = () => {};

export const AppContext = createContext({
    user,
    logOut
});
