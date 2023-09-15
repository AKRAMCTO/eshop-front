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
        return error?.response?.data;
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
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    };
    const res = await axios.post(`${REACT_APP_MAIN_URL}/register`, data, config);
    if (res.data.status === true) {
        return res.data;
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


// Categories
export const getAllCategories = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/all-categories`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};
export const getStructuredCategories = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/structured-categories`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};
export const getFeaturedCategories = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/featured-categories`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};

// Brands
export const getAllBrands = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/all-brands`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};
export const getFeaturedBrands = async () => {
    console.log('getFeaturedBrands')
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/featured-brands`);
        console.log(res.data.data)
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};

// Products
export const getBestOffers = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/best-offers`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};
export const getBestSellers = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/best-sellers`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};
export const getSingleProduct = async (keyPage) => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/product/${keyPage}`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        // throw new Error(error);
        return error?.response?.data;
    }
};


// Location
export const getCountries = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/countries`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};
export const getCities = async (keyCountry) => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/cities/${keyCountry}`);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        throw new Error(error);
    }
};


// Addresses
export const getAddresses = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    try {
        const config = {headers: { Authorization: `Bearer ${token}` }};

        const res = await axios.get(`${REACT_APP_MAIN_URL}/addresses`, config);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        return error?.response?.data?.message
    }
};
export const addAddress = async data => {
    try {
        const token = localStorage.getItem('ecowattAuthToken');
        const config = {headers: { Authorization: `Bearer ${token}` }};

        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/add-address`,
            {
                line_1: data.line_1,
                line_2: data.line_2,
                type: data.type,
                country: data.country,
                city: data.city,
                is_default: data.is_default
            },
            config
        );
        if (res.data.status === true) {
            return { data: res.data.data, message: 'success' };
        }
    } catch (error) {
        console.log('addAddress Error => ', error?.response?.data?.message)
        return error?.response?.data?.message
    }
};
export const editAddress = async (data, keyAddress) => {
    try {
        const token = localStorage.getItem('ecowattAuthToken');
        const config = {headers: { Authorization: `Bearer ${token}` }};

        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/update-address/${keyAddress}`,
            {
                line_1: data.line_1,
                line_2: data.line_2,
                type: data.type,
                country: data.country,
                city: data.city,
                is_default: data.is_default
            },
            config
        );
        if (res.data.status === true) {
            return { data: res.data.data, message: 'success' };
        }
    } catch (error) {
        console.log('editAddress Error => ', error?.response?.data?.message)
        return error?.response?.data?.message
    }
};
export const removeAddress = async (keyAddress) => {
    try {
        const token = localStorage.getItem('ecowattAuthToken');
        const config = {headers: { Authorization: `Bearer ${token}` }};

        const res = await axios.get(`${REACT_APP_MAIN_URL}/remove-address/${keyAddress}`, config);
        if (res.data.status === true) {
            return { data: res.data.data, message: 'success' };
        }
    } catch (error) {
        console.log('removeAddress Error => ', error?.response?.data?.message)
        return error?.response?.data?.message
    }
};