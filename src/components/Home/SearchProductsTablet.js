import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataProvider } from '../../contexts/DataContext';
import { getSearchProducts } from '../../queries/queries';
import { Search, X } from 'react-feather';
import { InfinitySpin } from 'react-loader-spinner';
import useComponentVisible from '../useComponentVisible';

const Icon = "https://via.placeholder.com/50x50"

export default function SearchProductsTablet({toggleSearchTablet, status}) {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [title, setTitle] = useState('')

    const { isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

    const fetchProducts = async (word) => {
        setIsLoading(true)
        const res = await getSearchProducts({ 'title': word });
        // console.log('res => ', res)
        if (res.status === true) {
            setProducts(res?.data)
            setIsLoading(false)
        } else {
            setProducts([])
            setIsLoading(false)
        }
    }
    
    const changeTitle = (word) => {
        setTitle(word)
        if(word.length >= 2){
            setIsComponentVisible(true)
            fetchProducts(word)
        }
        if(word.length === 0){
            setProducts([])
        }
    }

    return (
        <div className={`search-full ${status ? 'active' : ''}`}>
            <div className="input-group">
                <span className="input-group-text" onClick={`/products?search=${title}`}>
                    <Search />
                </span>
                <input
                    type="text"
                    onChange={(event) => changeTitle(event.target.value)}
                    value={title}
                    tabIndex={0} 
                    className="form-control search-type"
                    placeholder="Rechercher sur Ecowatt"
                />
                <span className="input-group-text close-search" onClick={() => toggleSearchTablet(false)}>
                    <X />
                </span>
            </div>
            {(isComponentVisible && (title.length >= 2 || isLoading)) &&
                <div className='search-result'>
                    {(isLoading) ? 
                        <div className="p-3 d-flex align-items-center justify-content-center">
                            <InfinitySpin
                                type="ThreeDots"
                                color="#2A3466"
                                height={220}
                                width={220}
                                visible={isLoading}
                            />
                        </div>
                    :
                        ((products.length) ? 
                            products.map((item) => 
                                <div className='single-result' key={item?.slug}>
                                    <div className='product-image'>
                                        <Link to={`/product/${item?.slug}`}>
                                            <img src={item?.full_image} className="img-fluid lazyload" alt={item?.title} />
                                        </Link>
                                    </div>
                                    <div className='product-info'>
                                        <h4><Link to={`/product/${item?.slug}`}>{item?.title}</Link></h4>
                                    </div>
                                </div>
                            )
                            :
                            <h2 className="text-center py-5">Aucune produit trouvée</h2>
                        )
                    }
                </div>
            }
        </div>
    )
}