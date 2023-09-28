import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
    checkAuth,
    userLogin,
    userRegister,
    userRegisterSeller,
    getAddresses,
    removeAddress
} from './../queries/queries';
export const AuthProvider = React.createContext();

export default function AuthContextProvider({ children }) {
    const queryClient = useQueryClient();
    const [errorAuthContext, setErrorAuthContext] = useState(null)
    const [successAuthContext, setSuccessAuthContext] = useState(null)

    /**
     * User Info
     */
    const {
        data,
        isLoading: authenticationLoading,
        isFetching: authenticationFetching
    } = useQuery('authentication', checkAuth, {
        retry: 0,
        refetchOnWindowFocus: false
    });

    const updateProfile = () => {
        queryClient.invalidateQueries('authentication');
    }
    const emptyErrorAuthContext = () => setErrorAuthContext(null)
    const emptySuccessAuthContext = () => setSuccessAuthContext(null)

    /**
     * User Login
     */
    const { mutate: loginMutation } = useMutation(async data => {
            const res = await userLogin({
                email: data.email,
                password: data.password,
            });
            if (res.status === true) {
                localStorage.setItem('ecowattAuthToken', res.token);
            }
        },{
            onSuccess: () => {
                setErrorAuthContext(null)
                queryClient.invalidateQueries('authentication');
            },
            onError: (error) => {
                setErrorAuthContext({login: error?.response?.data?.message})
            },
            throwOnError: true,
        }
    );

    /**
     * User Register
     */
    const { mutate: registerMutation } = useMutation(userRegister, {
        onSuccess: data => {
            if (data.status === true) {
                localStorage.setItem('ecowattAuthToken', data.token);
                queryClient.invalidateQueries('authentication');
            }
        },
        onError: (error) => {
            setErrorAuthContext({register: error?.response?.data?.message})
        },
        throwOnError: true,
    });

    /**
     * User Register
     */
    const { mutate: registerSellerMutation } = useMutation(userRegisterSeller, {
        onSuccess: data => {
            if (data.status === true) {
                setSuccessAuthContext({registerSeller: data?.message})
                // localStorage.setItem('ecowattAuthToken', data.token);
                // queryClient.invalidateQueries('authentication');
            }
        },
        onError: (error) => {
            setErrorAuthContext({register: error?.response?.data?.message})
        },
        throwOnError: true,
    });

    /**
     * User Logout
     */
    const { mutate: logoutMutation } = useMutation(() => {
        queryClient.setQueryData('authentication', () => {
            return { userData: { userId: null, userData: null, isLoggedIn: false } };
        });
        localStorage.removeItem('ecowattAuthToken');
    });


    /**
     * List Addresses
     */
    const {
        data: listAddresses,
        isLoading: addressesLoading,
        isFetching: addressesFetching
    } = useQuery('addresses', getAddresses, {
        retry: 1,
        enabled: (data?.userData?.id ? true : false),
        refetchOnWindowFocus: false
    });

    /**
     * Remove Address
     */
    const { mutate: removeAddressMutation } = useMutation(async key => {
        await removeAddress(key);
    },{
        onSuccess: () => {
            setSuccessAuthContext({removeAddress: 'Adresse supprimée avec succès'})
            queryClient.invalidateQueries('addresses');
        },
        onError: (error) => {
            setErrorAuthContext({removeAddress: error?.response?.data?.message})
        },
        throwOnError: true,
    }
);

    return (
        <AuthProvider.Provider
            value={{
                errorAuthContext,
                authenticationFetching,
                authenticationLoading,
                userData: data?.userData ?? null,
                userId: data?.userData?.id ?? null,
                isLoggedIn: (data?.userData && data?.userData?.id) ? true : false,
                registerSellerMutation,
                registerMutation,
                loginMutation,
                logoutMutation,
                updateProfile,
                emptyErrorAuthContext,
                
                listAddresses,
                addressesLoading,
                addressesFetching,
                removeAddressMutation,
                successAuthContext,
                emptySuccessAuthContext
            }}
        >
            {children}
        </AuthProvider.Provider>
    );
}
