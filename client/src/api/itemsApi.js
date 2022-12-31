import axios from 'axios';

export const searchItemsByName = async (name, page, sortBy, status, callback, errCallback) => {
    try {
        const sortType = sortBy? sortBy:'time';
        const url = `${process.env.REACT_APP_SERVER_URL}/items?name=${name}&sortby=${sortType}&status=${status}&page=${page}`;
        const res = await axios.get(url, {});
        if (res.status === 200) {
            callback(res.data.items);
        }
        else {
            errCallback()
        }
    } catch (error) {
        console.log(error);
    }
}

export const searchItemsByCategory = async (category, page, sortBy, status, callback, errCallback) => {
    try {
        const sortType = sortBy? sortBy:'time';
        const url = `${process.env.REACT_APP_SERVER_URL}/items?category=${category}&sortby=${sortType}&sortby=${sortType}&status=${status}&page=${page}`;
        const res = await axios.get(url, {});
        if (res.status === 200) {
            callback(res.data.items);
        }
        else {
            errCallback();
        }
    } catch (error) {
        console.log(error)
    }
}

export const getListItem = async (page, callback, errCallback) => {
    try {
        const url = `${process.env.REACT_APP_SERVER_URL}/items?page=${page}`;
        const res = await axios.get(url);
        if (res.status === 200) {
            callback(res.data.items);
        }
        else {
            errCallback();
        }
    } catch (error) {
        console.log(error)
    }
}

export const getListSellingItem = async (id, selling, callback, errCallback) => {
  try {
    const url = `${process.env.REACT_APP_SERVER_URL}/items?author=${id}&selling=${selling}`;
    const res = await axios.get(url);
    if (res.status === 200) {
      callback(res.data.items);
    } else {
      errCallback();
    }
  } catch (error) {
    console.log(error);
  }
};

export const getListMarkedItem = async (
  id,
  selling,
  callback,
  errCallback
) => {
  try {
    const url = `${process.env.REACT_APP_SERVER_URL}/items?markby=${id}&selling=${selling}`;
    const res = await axios.get(url);
    if (res.status === 200) {
      callback(res.data.items);
    } else {
      errCallback();
    }
  } catch (error) {
    console.log(error);
  }
};