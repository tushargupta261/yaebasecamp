import axios from "axios";

export const getUserList = async () => {
    const response = await axios.get('http://localhost:8000/user')
    console.log(response, 'response');
}