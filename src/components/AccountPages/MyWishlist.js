import React, { useContext } from "react";
import { CartAndWishlistProvider } from "../../contexts/CartAndWishlistContext";
import { InfinitySpin } from "react-loader-spinner";
import ProductBox from "../Product/ProductBox";

export default function MyWishlist() {
    const {wishlistItems, wishlistItemsLoading} = useContext(CartAndWishlistProvider)

    return (
        <div className="dashboard-wishlist">
            <div className="title">
                <h2>Wishlist</h2>
                <span className="title-leaf title-leaf-gray">
                    <img src={require("./../../assets/svg/leaf.png")} alt="" className="icon-width bg-gray" />
                </span>
            </div>
            <div className="row g-sm-4 g-3">
                {wishlistItemsLoading ? 
                    <div className="min-vh-100 px-4 py-2 d-flex align-items-center justify-content-center">
                        <InfinitySpin
                            type="ThreeDots"
                            color="#2A3466"
                            height={220}
                            width={220}
                            visible={wishlistItemsLoading}
                        />
                    </div>
                : ((wishlistItems && wishlistItems.length) ? 
                    wishlistItems.map((item, key) => 
                        <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6" key={`wishlist-${key}`}>
                            <ProductBox product={item} isWishlist={true}  />
                        </div>
                    )
                :
                    <h2 className="text-center my-5">Aucune produit trouvée</h2>
                )}
            </div>
        </div>
    );
}