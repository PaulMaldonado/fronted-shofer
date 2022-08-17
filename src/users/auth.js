import axios from 'axios';

const API = 'http://localhost/shofer-api/api_shofer/users/';

export default {
    register(name, username, email, password) {
        const userRegister = { name, username, email, password };

        return axios.post(API + 'sign-up-chofer.php', userRegister)
    },

    login(username, password) {
        const user = { username, password };

        return axios.post(API + 'login.php', user);
    }
};