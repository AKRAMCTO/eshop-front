import axios from "axios";

// const REACT_APP_MAIN_URL = `http://127.0.0.1:8000/api`
const REACT_APP_MAIN_URL = `https://dev.ecowatt.ma/api`

export const getSiteSettings = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/settings`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};

export const getMenus = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/menus`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};

export const getSlide = async (keySlide) => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/slide/${keySlide}`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};

export const getBanner = async (keyBanner) => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/banner/${keyBanner}`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};

export const getPage = async (keyPage) => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/page/${keyPage}`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};

export const saveNewsletter = async (data) => {
    console.log('data => ', data)
    try {
        const res = await axios.post(
          `${REACT_APP_MAIN_URL}/newsletter`,
          data
        );
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};

export const saveReminder = async (data) => {
    try {
        const res = await axios.post(
          `${REACT_APP_MAIN_URL}/reminder`,
          data
        );
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};