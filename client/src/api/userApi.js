import axios from 'axios';

export const getUserDetail = async (userId, callback) => {
    try {
        const url =  `${process.env.REACT_APP_SERVER_URL}/user/${userId}`;
        const res = await axios.get(url, {});
        if (res.status == 200){
            callback(res.data.user);
        }
        else {
            console.log(res.data.msg)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getUserFeedback = async (userId, callback) => {
    try {
        const url =  `${process.env.REACT_APP_SERVER_URL}/user/${userId}/feedback`;
        const res = await axios.get(url, {});
        if (res.status == 200){
            callback(res.data.feedbacks);
        }
        else {
            console.log(res.data.msg)
        }
    } catch (error) {
        console.log(error)
    }
}

export const postFeedback = async (token, userId, rate, comment, callback) => {
    try {
        const url =  `${process.env.REACT_APP_SERVER_URL}/user/${userId}/feedback`;
        const res = await axios.post(url, {
            "feedback" : comment,
            "numStarsRate" : rate
        }, {
            headers: {
                Authorization: token
            }
        })
        if (res.status == 200) {
            callback();
        }
        else {
            console.log(res.data.msg)
        }
    } catch (error) {
        console.log(error)
    }
}