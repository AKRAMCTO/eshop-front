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
export const userRegisterSeller = async data => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    };
    const res = await axios.post(`${REACT_APP_MAIN_URL}/register-seller`, data, config);
    if (res.data.status === true) {
        return res.data;
    }
};
export const checkAuth = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
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
        // console.log('editUserProfileInfo Error => ', error?.response?.data?.message)
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
        // console.log('changeUserPassword Error => ', error?.response?.data?.message)
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
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/featured-brands`);
        // console.log(res.data.data)
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
export const getProducts = async (params) => {
    try {
        const res = await axios.post(`${REACT_APP_MAIN_URL}/products`, params);
        if (res.data.status === true) {
            return res.data;
        }
    } catch (error) {
        // throw new Error(error);
        return error?.response?.data;
    }
};
export const getSearchProducts = async (params) => {
    try {
        const res = await axios.post(`${REACT_APP_MAIN_URL}/products-search`, params);
        if (res.data.status === true) {
            return res.data;
        }
    } catch (error) {
        // throw new Error(error);
        return error?.response?.data;
    }
};
export const getFilterCategories = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/filter-categories`);
        if (res.data.status === true) {
            return res.data;
        }
    } catch (error) {
        // throw new Error(error);
        return error?.response?.data;
    }
};
export const getFilterBrands = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/filter-brands`);
        if (res.data.status === true) {
            return res.data;
        }
    } catch (error) {
        // throw new Error(error);
        return error?.response?.data;
    }
};
export const getFilterMeasures = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/filter-measures`);
        if (res.data.status === true) {
            return res.data;
        }
    } catch (error) {
        // throw new Error(error);
        return error?.response?.data;
    }
}
export const getFilterProperties = async () => {
    try {
        const res = await axios.get(`${REACT_APP_MAIN_URL}/filter-properties`);
        if (res.data.status === true) {
            return res.data;
        }
    } catch (error) {
        // throw new Error(error);
        return error?.response?.data;
    }
}


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


// ADDRESSE
export const getAddresses = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    try {
        const config = { headers: { Authorization: `Bearer ${token}` } };

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
        const config = { headers: { Authorization: `Bearer ${token}` } };

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
        // console.log('addAddress Error => ', error?.response?.data?.message)
        return error?.response?.data?.message
    }
};
export const editAddress = async (data, keyAddress) => {
    try {
        const token = localStorage.getItem('ecowattAuthToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };

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
        // console.log('editAddress Error => ', error?.response?.data?.message)
        return error?.response?.data?.message
    }
};
export const removeAddress = async (keyAddress) => {
    try {
        const token = localStorage.getItem('ecowattAuthToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };

        const res = await axios.get(`${REACT_APP_MAIN_URL}/remove-address/${keyAddress}`, config);
        if (res.data.status === true) {
            return { data: res.data.data, message: 'success' };
        }
    } catch (error) {
        // console.log('removeAddress Error => ', error?.response?.data?.message)
        return error?.response?.data?.message
    }
};


// MY ORDERS
export const getOrders = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    try {
        const config = { headers: { Authorization: `Bearer ${token}` } };

        const res = await axios.get(`${REACT_APP_MAIN_URL}/orders`, config);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        return error?.response?.data?.message
    }
};
export const getInvoices = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    try {
        const config = { headers: { Authorization: `Bearer ${token}` } };

        const res = await axios.get(`${REACT_APP_MAIN_URL}/invoices`, config);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        return error?.response?.data?.message
    }
};
export const getBls = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    try {
        const config = { headers: { Authorization: `Bearer ${token}` } };

        const res = await axios.get(`${REACT_APP_MAIN_URL}/bls`, config);
        if (res.data.status === true) {
            return res.data.data;
        }
    } catch (error) {
        return error?.response?.data?.message
    }
};
export const getOrder = async (data) => {
    try {
        const res = await axios.post(`${REACT_APP_MAIN_URL}/order`, data);
        if (res.data.status === true) {
            return { data: res.data.data, message: 'success' };
        }
    } catch (error) {
        return error?.response?.data?.message
    }
};


// WISHLIST
export const getWishlistItems = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get(
        `${REACT_APP_MAIN_URL}/wishlist`,
        config
    );
    if (res.data.status === true) {
        return res.data.data;
    }
};
export const addToWishlist = async (id) => {
    const token = localStorage.getItem('ecowattAuthToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.post(
        `${REACT_APP_MAIN_URL}/wishlist/store`,
        { product: id },
        config
    );

    if (res.data.status === true) {
        return res.data.data;
    }
};
export const removeFromWishlist = async (id) => {
    const token = localStorage.getItem('ecowattAuthToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.post(
        `${REACT_APP_MAIN_URL}/wishlist/remove`,
        { product: id },
        config
    );
    if (res.data.status === true) {
        return res.data.data;
    }
};
export const cleatWishlist = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get(
        `${REACT_APP_MAIN_URL}/wishlist/clear`,
        config
    );
    if (res.data.status === true) {
        return res.data.data;
    }
};
export const getWishlistItemsGuest = async () => {
    const wishlist = JSON.parse(localStorage.getItem('ecowattWishlist'))
    
    if(wishlist && wishlist.length){
        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/guest-wishlist`,
            { products: wishlist }
        );
        if (res.data.status === true) {
            return res.data.data;
        }
    }
    return []
};


// CART
export const getCartItems = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    let cart = localStorage.getItem('ecowattCart');

    if(cart) cart = JSON.parse(cart)
    else cart = []

    if(cart.length > 0){
        await getCombineCartItems()
        localStorage.setItem('ecowattCart', JSON.stringify([]));
    }

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get(`${REACT_APP_MAIN_URL}/cart`, config);

    if (res.data.status === true) {
        return res.data.data;
    }
};
export const addToCart = async (data) => {
    const token = localStorage.getItem('ecowattAuthToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.post(
        `${REACT_APP_MAIN_URL}/cart/store`,
        {product: data?.id, quantity: data?.quantity},
        config
    );

    if (res.data.status === true) {
        return res.data.data;
    }
};
export const updateToCart = async (data) => {
    const token = localStorage.getItem('ecowattAuthToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.post(
        `${REACT_APP_MAIN_URL}/cart/update`,
        {cart_id: data?.cart_id, product: data?.id, quantity: data?.quantity},
        config
    );
    if (res.data.status === true) {
        return res.data.data;
    }
};
export const removeCart = async (data) => {
    const token = localStorage.getItem('ecowattAuthToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.post(
        `${REACT_APP_MAIN_URL}/cart/remove`,
        {cart_id: data},
        config
    );
    if (res.data.status === true) {
        return res.data.data;
    }
};

/*
export const clearCart = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get(
        `${REACT_APP_MAIN_URL}/cart/clear`,
        config
    );
    if (res.data.status === true) {
        return res.data.data;
    }
};
export const cleanCart = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get(
        `${REACT_APP_MAIN_URL}/cart/clean`,
        config
    );
    if (res.data.status === true) {
        return res.data.data;
    }
    return [];
};
*/

export const getCartItemsGuest = async () => {
    const cart = localStorage.getItem('ecowattCart');

    if(cart && cart.length){
        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/guest-cart`,
            { products: cart }
        );
        if (res.data.status === true) {
            return res.data.data;
        }
    }
};
export const getCombineCartItems = async () => {
    const token = localStorage.getItem('ecowattAuthToken');
    let cart = localStorage.getItem('ecowattCart');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    if(cart) cart = JSON.parse(cart)
    else cart = []

    localStorage.setItem('ecowattCart', JSON.stringify([]));

    if(cart && cart.length){
        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/cart/combine`,
            { products: cart },
            config
        );
        if (res.data.status === true) {
            return res.data.data;
        }
        return [];
    }
    return [];
};


// CHECKOUT
export const AuthCheckout = async (data) => {
    const cart = localStorage.getItem('ecowattCart');
    const token = localStorage.getItem('ecowattAuthToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    if(cart && cart.length){
        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/checkout`,
            data,
            config
        );
        if (res.data.status === true) {
            return res.data;
        }
    }
};
export const GuestCheckout = async (data) => {
    const cart = localStorage.getItem('ecowattCart');
    const token = localStorage.getItem('ecowattAuthToken');
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    if(cart && cart.length){
       data["cart"] = cart
        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/guest-checkout`,
            data,
            config
        );
        if (res.data.status === true) {
            return res.data;
        }
    }
};

export const getCalculatedDeliveryAuth = async (city, deliveryMethod) => {
    const token = localStorage.getItem('ecowattAuthToken');

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.post(`${REACT_APP_MAIN_URL}/delivery-fees`, {city: city, delivery_method: deliveryMethod}, config);
    console.log('getCalculatedDeliveryAuth  => ', res.data)
    if (res.data.status === true) {
        return res.data.data;
    }
}
export const getCalculatedDeliveryGuest = async (city, deliveryMethod) => {
    const cart = localStorage.getItem('ecowattCart');

    if(cart && cart.length){
        const res = await axios.post(
            `${REACT_APP_MAIN_URL}/guest-delivery-fees`,
            { products: cart, city, delivery_method: deliveryMethod }
        );
        console.log('getCalculatedDeliveryGuest => ', res.data)
        if (res.data.status === true) {
            return res.data.data;
        }
    }
}
export const downloadFileInvoice = async (file) => {
    const res = await axios.post(
        `${REACT_APP_MAIN_URL}/download-invoice`,
        { file }
    );
    if (res.data.status === true) {
        return res.data;
    }
}
export const downloadFileBl = async (file) => {
    const res = await axios.post(
        `${REACT_APP_MAIN_URL}/download-bl`,
        { file }
    );
    if (res.data.status === true) {
        return res.data;
    }
}
export const downloadFileBc = async (id) => {
    const res = await axios.post(
        `${REACT_APP_MAIN_URL}/download-bc`,
        { id }
    );
    if (res.data.status === true) {
        return res.data;
    }
}