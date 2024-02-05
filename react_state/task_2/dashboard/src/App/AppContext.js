
const user = {
    email: '',
    password: '',
    isLoggedIn: false
};

function logOut() {
    user.isLoggedIn = false;
}

export const AppContext = React.createContext(user);