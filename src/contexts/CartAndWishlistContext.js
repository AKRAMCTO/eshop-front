import React, { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  // WISHLIST
  addToWishlist,
  getWishlistItems,
  removeFromWishlist,
  getWishlistItemsGuest,
  // CART
  getCartItems,
  addToCart,
  removeCart,
  getCartItemsGuest,
  // cleanCart,
  getCombineCartItems,
  updateToCart,
} from './../queries/queries';
import { AuthProvider } from './AuthContext';

export const CartAndWishlistProvider = React.createContext();
export default function CartAndWishlistContext({ children }) {
  const { isLoggedIn } = React.useContext(AuthProvider);
    const queryClient = useQueryClient();
    
    const [cartData, setCartData] = React.useState([]);
    const [cartCalculation, setCartCalculation] = React.useState(null);
    const [cartDataChecker, setCartDataChecker] = React.useState([]);
    const [cartDataKeys, setCartDataKeys] = React.useState([]);

    const [wishListData, setWishListData] = React.useState([]);
    const [wishListDataKeys, setWishListDataKeys] = React.useState([]);
    
    const [showPopup, setShowPopup] = React.useState(false)

    useEffect(() => {
      if(cartData.length){
        let result = cartData.map(a => a.id);
        setCartDataKeys(result ?? [])

        let result_2 = cartData.map(a => ({id: a.id, quantity: a.quantity}));
        setCartDataChecker(result_2 ?? [])
      }else{
        setCartDataKeys([])
        setCartDataChecker([])
      }
    },[cartData])

    useEffect(() => {
      if(wishListData.length){
        let result = wishListData.map(a => a.id);
        setWishListDataKeys(result ?? [])
      }else{
        setWishListDataKeys([])
      }
    },[wishListData])

    const openPopup  = () => {
      setShowPopup(true)
    };
    const closePopup  = () => {
      setShowPopup(false)
    };

    /**
     * Cart Authenticated
     */
    const { data, isLoading: cartItemsLoading, isFetching: cartItemsFetching } = useQuery(['cartItems'], getCartItems, {
      refetchOnWindowFocus: false,
      enabled: isLoggedIn,
      retry: false, // true
      keepPreviousData: true,
      onSuccess: (data) => {
        setCartData(data?.items ?? [])
        setCartCalculation({
          subtotal: data?.subtotal ?? 0,
          discount: data?.discount ?? 0,
          shipping_cost: data?.shipping_cost ?? 0,
          coupon_cost: data?.coupon_cost ?? 0,
          total: data?.total ?? 0
        })
      }
    });
    const { mutate: addToCartMutation, isLoading: addCartLoading} = useMutation(addToCart, {
      onSuccess: (data) => {
        setCartData(data?.items ?? [])
        setCartCalculation({
          subtotal: data?.subtotal ?? 0,
          discount: data?.discount ?? 0,
          shipping_cost: data?.shipping_cost ?? 0,
          coupon_cost: data?.coupon_cost ?? 0,
          total: data?.total ?? 0
        })
      },
      throwOnError: true,
    });
    const { mutate: updateToCartMutation, isLoading: updateCartLoading} = useMutation(updateToCart, {
      onSuccess: (data) => {
        setCartData(data?.items ?? [])
        setCartCalculation({
          subtotal: data?.subtotal ?? 0,
          discount: data?.discount ?? 0,
          shipping_cost: data?.shipping_cost ?? 0,
          coupon_cost: data?.coupon_cost ?? 0,
          total: data?.total ?? 0
        })
      },
      throwOnError: true,
    });
    const { mutate: removeFromCartMutation, isLoading: removeCartLoading} = useMutation(removeCart, {
      onSuccess: (data) => {
        setCartData(data?.items ?? [])
        setCartCalculation({
          subtotal: data?.subtotal ?? 0,
          discount: data?.discount ?? 0,
          shipping_cost: data?.shipping_cost ?? 0,
          coupon_cost: data?.coupon_cost ?? 0,
          total: data?.total ?? 0
        })
      },
      throwOnError: true,
    });
    /*
    const { mutate: cleanFromCartMutation, isLoading: cleanCartLoading} = useMutation(cleanCart, {
      onSuccess: (data) => {
        setCartData(data?.items ?? [])
        setCartCalculation({
          subtotal: data?.subtotal ?? 0,
          discount: data?.discount ?? 0,
          shipping_cost: data?.shipping_cost ?? 0,
          coupon_cost: data?.coupon_cost ?? 0,
          total: data?.total ?? 0
        })
      },
      throwOnError: true,
    });
    */
    const { mutate: combineFromCartMutation, isLoading: combineCartLoading} = useMutation(getCombineCartItems, {
      onSuccess: (data) => {
        setCartData(data?.items ?? [])
        setCartCalculation({
          subtotal: data?.subtotal ?? 0,
          discount: data?.discount ?? 0,
          shipping_cost: data?.shipping_cost ?? 0,
          coupon_cost: data?.coupon_cost ?? 0,
          total: data?.total ?? 0
        })
      },
      throwOnError: true,
    });

    /**
     * Cart Guest
     */
    const { isLoading: getCartItemsGuestLoading } = useQuery(['cartItemsGuest'], getCartItemsGuest, {
      refetchOnWindowFocus: false,
      enabled: !isLoggedIn,
      retry: true,
      onSuccess: (data) => {
        setCartData(data?.items ?? [])
        setCartCalculation({
          subtotal: data?.subtotal ?? 0,
          discount: data?.discount ?? 0,
          shipping_cost: data?.shipping_cost ?? 0,
          coupon_cost: data?.coupon_cost ?? 0,
          total: data?.total ?? 0
        })
      },
      throwOnError: true,
    });
    const storeGuestCartItem = (item) => {
      let items = JSON.parse(localStorage.getItem('ecowattCart'));
      items = items === null ? [] : items;
      let exists = false

      if(items.length){
        items.forEach(val =>{
          if(val.id === item.id){
            val.quantity = item.quantity
            exists = true
          }
        });
      }

      if(!items.length || !exists){
        items = [...items, item]
      }

      localStorage.setItem('ecowattCart',JSON.stringify(items));
      queryClient.invalidateQueries('cartItemsGuest')
    }
    const removeGuestCartItem = (item) =>{
      let i = 0;
      let itemToSave = []
      let storedValues = JSON.parse(localStorage.getItem('ecowattCart'));

      storedValues.forEach(val =>{
        if(val.id !== item){
          console.log(val)
          itemToSave[i] = val;
          i++;
        }
      });
      localStorage.setItem('ecowattCart', JSON.stringify(itemToSave));

      queryClient.invalidateQueries('cartItemsGuest')
    }
    const clearGuestCartItem = () =>{
      localStorage.setItem('ecowattCart', JSON.stringify([]));
      queryClient.invalidateQueries('cartItemsGuest')
    }

    

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

    const clearAfterCheckout = () => {

    }

    return (
        <CartAndWishlistProvider.Provider
            value={{
              // CART
              cartItems: cartData,
              cartCalculation,
              cartDataKeys,
              cartDataChecker,
              cartItemsLength: cartData.length ?? 0,
              addToCartMutation,
              updateToCartMutation,
              removeFromCartMutation,
              // cleanFromCartMutation,
              combineFromCartMutation,

              cartItemsLoading,
              cartItemsFetching,
              addCartLoading,
              updateCartLoading,
              removeCartLoading,
              // cleanCartLoading,
              combineCartLoading,

              getCartItemsGuestLoading,
              storeGuestCartItem,
              removeGuestCartItem,
              clearGuestCartItem,

              // WISHLIST
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

              clearAfterCheckout,

              showPopup,
              openPopup,
              closePopup
            }}
        >
            {children}
        </CartAndWishlistProvider.Provider>
    );
}
