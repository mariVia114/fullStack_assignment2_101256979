import axios from 'axios';

export default axios.create({
    baseURL: 'https://comp3123-api.herokuapp.com/api/user'
});