import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
    checkAuth,
    editUserProfileInfo,
    changeUserPassword,
    userLogin,
    userRegister
} from './../queries/queries';
export const AuthProvider = React.createContext();

export default function AuthContextProvider({ children }) {
    const queryClient = useQueryClient();
    const [errorAuthContext, setErrorAuthContext] = useState(null)

    /**
     * User Info
     */
    const {
        data,
        isLoading: authenticationLoading,
        isFetching: authenticationFetching
    } = useQuery('authentication', checkAuth, {
        retry: 0,
        refetchOnWindowFocus: false,
    });

    const updateProfile = () => {
        queryClient.invalidateQueries('authentication');
    }
    const emptyErrorAuthContext = () => setErrorAuthContext(null)

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
     * User Logout
     */
    const { mutate: logoutMutation } = useMutation(() => {
        queryClient.setQueryData('authentication', () => {
            return { userData: { userId: null } };
        });
        localStorage.removeItem('ecowattAuthToken');
    });

    return (
        <AuthProvider.Provider
            value={{
                errorAuthContext,
                authenticationFetching,
                authenticationLoading,
                userData: data?.userData ?? null,
                userId: data?.userData?.id ?? null,
                registerMutation,
                loginMutation,
                logoutMutation,
                updateProfile,
                emptyErrorAuthContext
            }}
        >
            {children}
        </AuthProvider.Provider>
    );
}
