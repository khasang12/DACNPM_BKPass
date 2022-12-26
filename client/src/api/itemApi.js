import axios from 'axios';

export const getItemDetail = async (token, itemId, callback) => {
    try {
        const url = `${process.env.REACT_APP_SERVER_URL}/item/${itemId}`
        const res = await axios.get(url, {
            headers: {
                Authorization: token
            }
        })
        if (res.status === 200) {
            callback(res.data.item)
        }
        else {
            console.log(res.data.msg)
        }
    } catch (error) {
        console.log(error)
    }
}

export const markItem = async (token, itemId, callback) => {
    try {
        const url = `${process.env.REACT_APP_SERVER_URL}/item/${itemId}/mark`;
        const res = await axios.post(url, {}, {
            headers:  {
                Authorization: token
            }
        })
        if (res.status === 200) {
            callback()
        }
        else {
            console.log(res.data.msg)
        }
    } catch (error) {
        console.log(error)
    }
}

export const unmarkItem = async (token, itemId, callback) => {
    try {
        const url = `${process.env.REACT_APP_SERVER_URL}/item/${itemId}/mark`;
        const res = await axios.delete(url, {
            headers: {
                Authorization: token
            }
        })
        if (res.status === 200) {
            callback()
        }
        else {
            console.log(res.data.msg)
        }
    } catch (error) {
        console.log(error)
    }
}

export const updateStatus = async (token, itemId, newStatus, callback) => {
    try {
        const url = `${process.env.REACT_APP_SERVER_URL}/item/${itemId}`;
        const res = await axios.put(url, {
            "isSelling": newStatus
        }, {
            headers: {
                Authorization: token
            }
        })
        if (res.status === 200) {
            callback()
        }
        else {
            console.log(res.data.msg)
        }
    } catch (error) {
        console.log(error)
    }
}

export const uploadItem = async (token, item, callback) => {
    try {
        const url = `${process.env.REACT_APP_SERVER_URL}/item`;
        const res = await axios.post(url, {
            "item": item
        }, {
            headers: {
                Authorization: token
            }
        })
        if (res.status === 200) {
            callback()
        }
        else {
            console.log(res.data.msg)
        }
    } catch (error) {
        console.log(error)
    }
}