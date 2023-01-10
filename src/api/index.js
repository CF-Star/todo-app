import axios from "axios";

const instance = axios.create({
    baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api',
    timeout: 5000,
    headers: { Authorization: 'basic 2bdfd380-9110-4f29-8fef-f1884548684d' }
  });

  export default instance;
