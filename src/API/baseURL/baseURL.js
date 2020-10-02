import axios from 'axios';

const instance = axios.create(
    {
        baseURL: "http://91d7ddfbae13.ngrok.io"
    }
);

export default instance;