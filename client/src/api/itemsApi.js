import axios from 'axios';

export const searchItemsByName = async (token, name, sortBy, callback) => {
    try {
        const sortType = sortBy? sortBy:'time';
        const url = process.env.REACT_SERVER_URL + `/items?name=${name}&sortby=${sortType}`;
        const res = await axios.get(url, {
            headers: {
                "Authorization": token
            }
        });
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

export const searchItemsByCategory = async (token, category, sortBy, callback) => {
    try {
        const sortType = sortBy? sortBy:'time';
        const url = process.env.REACT_SERVER_URL + `/items?category=${category}&sortby=${sortType}`;
        const res = await axios.get(url, {
            headers: {
                "Authorization": token
            }
        });
        if (res.status === 200) {
            callback(res.data);
        }
        else {
            console.log(res.data);
        }
    } catch (error) {
        console.log(error)
    }
}

