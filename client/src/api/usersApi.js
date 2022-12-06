import axios from 'axios'

export const searchUsersByName = async (name, sortBy, callback) => {
    try {
        const sortType = sortBy? sortBy:'rate';
        const url = process.env.REACT_SERVER_URL + `/users?name=${name}&sortby=${sortType}`;
        const res = await axios.get(url, {});
        if (res.status === 200) {
            callback(res.data);
        }
        else {
            console.log(res.data);
        }
    } catch (error) {
        console.log(error);
    }
} 