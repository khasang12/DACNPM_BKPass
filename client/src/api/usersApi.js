import axios from 'axios'

export const searchUsersByName = async (name, page, sortBy, callback, errCallback) => {
    try {
        const sortType = sortBy? sortBy:'rate';
        const url = `${process.env.REACT_APP_SERVER_URL}/users?page=${page}&name=${name}&sortby=${sortType}`;
        const res = await axios.get(url, {});
        if (res.status === 200) {
            callback(res.data.users);
        }
        else {
            errCallback();
        }
    } catch (error) {
        console.log(error);
    }
} 