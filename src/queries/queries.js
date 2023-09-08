import axios from "axios";

const REACT_APP_MAIN_URL = `http://127.0.0.1:8000/api`
// const REACT_APP_MAIN_URL = `https://dev.ecowatt.ma/api`

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



// Auth
export const userLogin = async data => {
    const res = await axios.post(
        `${REACT_APP_MAIN_URL}/login`,
        data
    );
    if (res.data.status === true) {
        return res.data;
    }
};
export const userRegister = async data => {
    try {
        const config = {
            headers: { "Content-Type": "multipart/form-data" }
        };
        const res = await axios.post(`${REACT_APP_MAIN_URL}/register`, data, config);
        if (res.data.status === true) {
            return res.data;
        }
    } catch (error) {
        return error?.response?.data?.message
    }
};
export const checkAuth = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    try {
        const config = { headers: { Authorization: `Bearer ${token}` }};
        const res = await axios.get(
            `${REACT_APP_MAIN_URL}/customer-informations`,
            config
        );

        if (res.data.status === true) {
            return { userData: res.data.data };
        }
    } catch (error) {
        return error?.response?.data?.message
    }
};
export const requestPasswordReset = async data => {
    try {
        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/forgot-password`,
            data
        );
        if (res.data.status === true) {
            return { message: 'success' };
        }
    } catch (error) {
        return error?.response?.data?.message
    }
};
export const resetUserPassword = async data => {
    try {
        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/reset-password`,
            data
        );
        if (res.data.status === true) {
            return { message: 'success' };
        }
    } catch (error) {
        return error?.response?.data?.message
    }
};
export const editUserProfileInfo = async data => {
    try {
        const token = localStorage.getItem('ecowattAuthToken');
        const config = {
            headers: { 
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        };

        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/customer-update`,
            {
                avatar: data.avatar,
                fname: data.fname,
                lname: data.lname,
                email: data.email,
                type: data.type,
                mobile: data.mobile
            },
            config
        );
        if (res.data.status === true) {
            return { userData: res.data.data, message: 'success' };
        }
    } catch (error) {
        console.log('editUserProfileInfo Error => ', error?.response?.data?.message)
        return error?.response?.data?.message
    }
};
export const changeUserPassword = async data => {
    try {
        const token = localStorage.getItem('ecowattAuthToken');
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/customer-update-password`,
            {
                old_password: data.old_password,
                password: data.password,
                password_confirmation: data.password_confirmation,
            },
            config
        );
        if (res.data.status === true) {
            return { message: 'success' };
        }
    } catch (error) {
        console.log('changeUserPassword Error => ', error?.response?.data?.message)
        return error?.response?.data?.message
    }
};