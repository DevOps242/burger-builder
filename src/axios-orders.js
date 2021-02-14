import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-32411.firebaseio.com/',

})


export default instance;