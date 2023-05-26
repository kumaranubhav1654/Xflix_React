import axios from "axios";

const instance = axios.create({
    baseURL:"https://1f57e2aa-8cb7-499a-a96e-6d2daed7c962.mock.pstmn.io"
});

export default instance;
