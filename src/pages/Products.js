import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import { getProducts, getFilterCategories, getFilterBrands } from "../queries/queries";
import Container from "../components/Products/Container";
import Sidebar from "../components/Products/Sidebar";
import Filter from "../components/Products/Filter";
import { InfinitySpin } from "react-loader-spinner";
import ProductBox from "../components/Product/ProductBox";

export default function Products() {
    const location = useLocation()
    const queryParameters = new URLSearchParams(location.search)

    const [showMenu, setShowMenu] = useState(false)

    const [products, setProducts] = useState([])
    const [listCategories, setListCategories] = useState([])
    const [listBrands, setListBrands] = useState([])

    const [grid, setGrid] = useState(3)
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [sort, setSort] = useState('latest')
    
    const [isLoading, setIsLoading] = useState(false)
    const [page, setpage] = useState(1)
    const [maxPages, setMaxPages] = useState(1)

    useEffect(() => {
        console.log('useffect 1')
        setCategories(queryParameters.get("category") ? [queryParameters.get("category")] : [])
        setBrands(queryParameters.get("brand") ? [queryParameters.get("brand")] : [])
    }, [])

    useEffect(() => {
        fetchCategories()
        fetchBrands()
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [ categories, brands])

    useEffect(() => {
        if(products.length > 0) {
            fetchProducts()
        }
    }, [ page, sort ])

    const fetchProducts = async () => {
        setIsLoading({
            status: true, 
            type: 'products'
        })
        const res = await getProducts({
            'categories': categories,
            'brands': brands,
            'sort': sort,
            'page': page
        });

        if (res.status === true) {
            console.log(res?.data?.data)
            handleData(res?.data)
            setIsLoading(false)
        } else {
            console.log('empty')
            setProducts([])
            setMaxPages(1)
            setIsLoading(false)
        }
    }
    const fetchCategories = async () => {
        setIsLoading({
            status: true, 
            type: 'categories'
        })
        const res = await getFilterCategories();
        if (res.status === true) {
            setListCategories(res?.data)
            setIsLoading(false)
        } else {
            setListCategories([])
            setIsLoading(false)
        }
    }
    const fetchBrands = async () => {
        setIsLoading({
            status: true, 
            type: 'brands'
        })
        const res = await getFilterBrands();
        if (res.status === true) {
            setListBrands(res?.data)
            setIsLoading(false)
        } else {
            setListBrands([])
            setIsLoading(false)
        }
    }

    const handleData = (data) => {
        setProducts(data?.data)
        setMaxPages(data?.last_page)
    }
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    const handleGrid = (selected) => {
        if(selected !== grid) {
            setGrid(selected)
        }
    }
    const handleSort = (selected) => {
        if(selected !== sort) {
            setSort(selected)
        }
    }
    const handlePage = (selected) => {
        if(selected !== page) {
            setpage(selected)
        }
    }
    const handleCategoriesFilter = (selected) => {
        console.log("selected => ", selected)
        if(categories.length > 0){
            const list = [...categories]
            const filterResult = list.filter(item => item === selected);
            if(filterResult.length){
                const filterResult = list.filter(item => item !== selected);
                setCategories(filterResult)
            }else{
                list.push(selected)
                setCategories(list)
            }
        }else{
            setCategories([selected])
        }
    }
    const handleBrandsFilter = (selected) => {
        console.log("brands => ", brands)
        if(brands.length > 0){
            const list = [...brands]
            const filterResult = list.filter(item => item === selected);
            if(filterResult.length){
                const filterResult = list.filter(item => item !== selected);
                setBrands(filterResult)
            }else{
                list.push(selected)
                setBrands(list)
            }
        }else{
            setBrands([selected])
        }
    }

    return (
        <Layout>
            <Helmet>
                <title>{`Les produits | Ecowatt`}</title>
            </Helmet>
            <Breadcrumb title={`Les produits`} />

            <section className="section-b-space shop-section">
                <Container 
                    isLoading={isLoading}
                    handleData={handleData}
                    categories={categories}
                    brands={brands}
                    sort={sort}
                    page={page}
                    listCategories={listCategories}
                    listBrands={listBrands}
                    handleCategoriesFilter={handleCategoriesFilter}
                    handleBrandsFilter={handleBrandsFilter}
                    handleShowMenu={handleShowMenu}
                    showMenu={showMenu}
                    handleSort={handleSort}
                    handleGrid={handleGrid}
                    grid={grid}
                    products={products}
                    maxPages={maxPages}
                    handlePage={handlePage}
                />
            </section>
        </Layout>
    );
}