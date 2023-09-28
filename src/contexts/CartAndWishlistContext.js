import React, { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
    //   addToCart,
    addToWishlist,
    //   getCartItems,
    getWishlistItems,
    //   removeFromCart,
    removeFromWishlist,
    //   getGuestCartItems,
    //   addToGuestCart,
    getWishlistItemsGuest,
    //   editCart,
    //   removeFromGuestCart,
    //   editGuestCart,
} from './../queries/queries';
import { AuthProvider } from './AuthContext';
export const CartAndWishlistProvider = React.createContext();
export default function CartAndWishlistContext({ children }) {
    const queryClient = useQueryClient();
    const [wishListData, setWishListData] = React.useState([]);
    const [wishListDataKeys, setWishListDataKeys] = React.useState([]);
    const [coupon, setCoupon] = React.useState('');
    const { isLoggedIn } = React.useContext(AuthProvider);
    /**
     * Cart Main Fetch
    const {
      data: cartData,
      isLoading: cartItemsLoading,
      isError: isGetCartError,
      error: getCartError,
      isIdle: cartIdle,
      isFetching: cartItemsFetching,
    } = useQuery(['cartItems', userId, deliveryCountry, coupon], getCartItems, {
      refetchOnWindowFocus: false,
      enabled: !authenticationLoading && userId,
      retry: true,
      keepPreviousData: true,
    });
    const {
      data: guestCartData,
      isLoading: guestCartItemsLoading,
      isError: isGuestGetCartError,
      error: getGuestCartError,
      isFetching: guestCartItemsFetching,
      isIdle: guestCartItemsIdle,
    } = useQuery(['guestCartItems', deliveryCountry, coupon], getGuestCartItems, {
      refetchOnWindowFocus: false,
      enabled:
        !authenticationLoading &&
        !userId &&
        // !deliveryCountriesIdle &&
        !deliveryCountriesLoading,
      retry: true,
      keepPreviousData: true,
    });
    const [addToCartMutation] = useMutation(addToCart, {
      onSuccess: data => {
        queryCache.setQueryData(
          ['cartItems', userId, deliveryCountry, coupon],
          () => data
        );
      },
      throwOnError: true,
    });
    const [addToGuestCartMutation] = useMutation(addToGuestCart, {
      onSuccess: data => {
        queryCache.setQueryData(
          ['guestCartItems', deliveryCountry, coupon],
          () => data
        );
      },
      throwOnError: true,
    });
    const [removeFromCartMutation] = useMutation(removeFromCart, {
      onSuccess: data => {
        queryCache.setQueryData(
          ['cartItems', userId, deliveryCountry, coupon],
          () => data
        );
      },
      throwOnError: true,
    });
    const [removeFromGuestCartMutation] = useMutation(removeFromGuestCart, {
      onSuccess: data => {
        queryCache.setQueryData(
          ['guestCartItems', deliveryCountry, coupon],
          () => data
        );
      },
    });
    const [editCartMutation] = useMutation(editCart, {
      onSuccess: data => {
        queryCache.setQueryData(
          ['cartItems', userId, deliveryCountry, coupon],
          () => data
        );
      },
      throwOnError: true,
    });
    const [editGuestCartMutation] = useMutation(editGuestCart, {
      onSuccess: data => {
        queryCache.setQueryData(
          ['guestCartItems', deliveryCountry, coupon],
          () => data
        );
      },
      throwOnError: true,
    });
     */

    /**
     * Wishlist Authenticated
     */
    const { isLoading: wishlistItemsLoading } = useQuery(['wishlistItems'], getWishlistItems, {
        refetchOnWindowFocus: false,
        enabled: isLoggedIn,
        retry: false,
        onSuccess: (data) => {
            setWishListData(data);
        }
    });
    const { mutate: addToWishListMutation, isLoading: addWishlistLoading} = useMutation(addToWishlist, {
        onSuccess: (data) => {
            // console.log('data => ', data)
            setWishListData(data);
            // queryClient.invalidateQueries('wishlistItems')
        },
        throwOnError: true,
    });
    const { mutate: removeFromWishListMutation, isLoading: removeWishlistLoading} = useMutation(removeFromWishlist, {
        onSuccess: (data) => {
            // console.log('data => ', data)
            setWishListData(data);
            // queryClient.invalidateQueries('wishlistItems')
        },
        throwOnError: true,
    });

    /**
     * Wishlist Guest
     */
    const { isLoading: getWishlistItemsGuestLoading } = useQuery(['wishlistItemsGuest'], getWishlistItemsGuest, {
      refetchOnWindowFocus: false,
      enabled: !isLoggedIn,
      retry: true,
      onSuccess: (data) => {
        setWishListData(data);
      },
      throwOnError: true,
    });
    const storeGuestWishlistItem = (item) => {
      let items = JSON.parse(localStorage.getItem('ecowattWishlist'));
      items = items === null ? [] : items;
      let isExists = true;

      items.forEach(val =>{
        if(val === item){
          isExists = false
        }
      });

      console.log(isExists);
      if(isExists) localStorage.setItem('ecowattWishlist',JSON.stringify([...items, item]));
      
      console.log('items => ', items)
      console.log('item => ', item)

      queryClient.invalidateQueries('wishlistItemsGuest')
    }
    const removeGuestWishlistItem = (item) =>{
      let i = 0;
      let itemToSave = []
      let storedValues = JSON.parse(localStorage.getItem('ecowattWishlist'));

      storedValues.forEach(val =>{
        if(val !== item){
          itemToSave[i] = val;
          i++;
        }
      });
      localStorage.setItem('ecowattWishlist', JSON.stringify(itemToSave));
      
      console.log('item => ', item)
      console.log('storedValues => ', storedValues)
      console.log('itemToSave => ', itemToSave)

      queryClient.invalidateQueries('wishlistItemsGuest')
    }

    useEffect(() => {
      if(wishListData.length){
        let result = wishListData.map(a => a.id);
        console.log(result)
        setWishListDataKeys(result ?? [])
      }else{
        setWishListDataKeys([])
      }
    },[wishListData])

    /**
     * Coupon
    const [checkCouponMutation, { isLoading: isCheckingCoupon }] = useMutation(
      checkCoupon,
  
      {
        onSuccess: data => {
          setCoupon(data.code);
        },
        throwOnError: true,
      }
    );
    */
    return (
        <CartAndWishlistProvider.Provider
            value={{
                // cartItems: cartData?.cartItems,
                // cartTotal: cartData?.cartTotal,
                // cartMessage: cartData?.message,
                // cartSubtotal: cartData?.cartSubtotal,
                // shippingCost: cartData?.shippingCost,
                // couponCost: cartData?.couponCost,
                // guestCartItems: guestCartData?.cartItems,
                // guestCartTotal: guestCartData?.cartTotal,
                // guestCartSubtotal: guestCartData?.cartSubtotal,
                // guestShippingCost: guestCartData?.shippingCost,
                // guestCouponCost: guestCartData?.coupon_cost,
                // cartIdle,
                // cartItemsLoading,
                // guestCartItemsLoading,
                // isGuestGetCartError,
                // getGuestCartError,
                // guestCartItemsIdle,
                // isGetCartError,

                // getCartError,
                // addToCartMutation,
                // removeFromCartMutation,
                // addToGuestCartMutation,
                // removeFromGuestCartMutation,
                // editGuestCartMutation,
                // editCartMutation,
                // cartItemsFetching,
                // guestCartItemsFetching,
                // sideCartItems: userId ? cartData?.cartItems : guestCartData?.cartItems,
                // sideCartSubTotal: userId
                //   ? cartData?.cartSubtotal
                //   : guestCartData?.cartSubtotal,
                // sideCartCouponCost: userId
                //   ? cartData?.couponCost
                //   : guestCartData?.coupon_cost,

                wishlistItems: wishListData,
                wishListDataKeys,
                wishlistItemsLength: wishListData?.length ?? 0,
                addToWishListMutation,
                removeFromWishListMutation,
                wishlistItemsLoading,
                addWishlistLoading,
                removeWishlistLoading,

                getWishlistItemsGuestLoading,
                storeGuestWishlistItem,
                removeGuestWishlistItem,

                // checkCouponMutation,
                // isCheckingCoupon,
                // coupon,
                // setCoupon,
            }}
        >
            {children}
        </CartAndWishlistProvider.Provider>
    );
}
