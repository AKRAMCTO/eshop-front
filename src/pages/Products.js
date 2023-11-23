import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Products/Container";
import { getProducts, getFilterCategories, getFilterBrands, getFilterMeasures, getFilterProperties } from "../queries/queries";

export default function Products() {
    const location = useLocation()
    const queryParameters = new URLSearchParams(location.state)
    const [showMenu, setShowMenu] = useState(false)

    const [products, setProducts] = useState([])
    const [listCategories, setListCategories] = useState([])
    const [listBrands, setListBrands] = useState([])
    const [listMeasures, setListMeasures] = useState([])
    const [listProperties, setListProperties] = useState([])

    const [grid, setGrid] = useState(3)
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [measures, setMeasures] = useState([])
    const [properties, setProperties] = useState([])
    const [sort, setSort] = useState('latest')
    
    const [isLoadingProducts, setIsLoadingProducts] = useState(false)
    const [isLoadingCategories, setIsLoadingCategories] = useState(false)
    const [isLoadingBrands, setIsLoadingBrands] = useState(false)
    const [isLoadingMeasures, setIsLoadingMeasures] = useState(false)
    const [isLoadingProperties, setIsLoadingProperties] = useState(false)

    // const [isLoading, setIsLoading] = useState({
    //     status: true, 
    //     type: 'products'
    // })
    const [page, setpage] = useState(1)
    const [number, setNumber] = useState(15)
    const [maxPages, setMaxPages] = useState(1)

    useEffect(() => {
        // console.log("parent => ", queryParameters.get('parent'))
        // console.log("sub => ", queryParameters.get('sub'))
        // console.log("sub_sub => ", queryParameters.get('sub_sub'))

        // console.log('useffect 1')
        // console.log("category => ", queryParameters.get('category'))
        // console.log("brand => ", queryParameters.get('brand'))
        // if(categories !== queryParameters.get("category")){ 
            setCategories(queryParameters.get("category") ? [queryParameters.get("category")] : [])
        // }
        // if(brands !== queryParameters.get("brand")){ 
            setBrands(queryParameters.get("brand") ? [queryParameters.get("brand")] : [])
        // }
    }, [location])

    useEffect(() => {
        fetchCategories()
        fetchBrands()
        fetchMeasures()
        fetchProperties()
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [ categories, brands, measures, properties ])

    useEffect(() => {
        if(products.length > 0) {
            fetchProducts()
        }
    }, [ page, sort, number ])

    const fetchProducts = async () => {
        setIsLoadingProducts(true)
        
        // setIsLoading({
        //     status: true, 
        //     type: 'products'
        // })
        
        const res = await getProducts({
            'categories': categories,
            'brands': brands,
            'measures': measures,
            'properties': properties,
            'sort': sort,
            'page': page,
            'number': number
        });

        if (res.status === true) {
            // console.log(res?.data?.data)
            handleData(res?.data)
        } else {
            // console.log('empty')
            setProducts([])
            setMaxPages(1)
            // setIsLoading(false)
            setIsLoadingProducts(false)
        }
    }
    const fetchCategories = async () => {
        setIsLoadingCategories(true)
        // setIsLoading({
        //     status: true, 
        //     type: 'categories'
        // })
        const res = await getFilterCategories();
        if (res.status === true) {
            setListCategories(res?.data)
            setIsLoadingCategories(false)
            // setIsLoading(false)
        } else {
            setListCategories([])
            setIsLoadingCategories(false)
            // setIsLoading(false)
        }
    }
    const fetchBrands = async () => {
        setIsLoadingBrands(true)
        // setIsLoading({
        //     status: true, 
        //     type: 'brands'
        // })
        const res = await getFilterBrands();
        if (res.status === true) {
            setListBrands(res?.data)
            setIsLoadingBrands(false)
            // setIsLoading(false)
        } else {
            setListBrands([])
            setIsLoadingBrands(false)
            // setIsLoading(false)
        }
    }
    const fetchMeasures = async () => {
        setIsLoadingMeasures(true)
        // setIsLoading({
        //     status: true, 
        //     type: 'measures'
        // })
        const res = await getFilterMeasures();
        if (res.status === true) {
            setListMeasures(res?.data)
            setIsLoadingMeasures(false)
            // setIsLoading(false)
        } else {
            setListMeasures([])
            setIsLoadingMeasures(false)
            // setIsLoading(false)
        }
    }
    const fetchProperties = async () => {
        setIsLoadingProperties(true)
        // setIsLoading({
        //     status: true, 
        //     type: 'properties'
        // })
        const res = await getFilterProperties();
        if (res.status === true) {
            setListProperties(res?.data)
            setIsLoadingProperties(false)
            // setIsLoading(false)
        } else {
            setListProperties([])
            setIsLoadingProperties(false)
            // setIsLoading(false)
        }
    }

    const removeItem = (selected, type) => {
        let filterResult = []
        switch(type){
            case 'categories' :
                filterResult = categories.filter(item => item !== selected);
                setpage(1)
                setCategories(filterResult)
            break;
            case 'brands' :
                filterResult = brands.filter(item => item !== selected);
                setpage(1)
                setBrands(filterResult)
            break;
            case 'measures' :
                filterResult = measures.filter(item => item !== selected);
                setpage(1)
                setMeasures(filterResult)
            break;
            case 'properties' :
                filterResult = properties.filter(item => item !== selected);
                setpage(1)
                setProperties(filterResult)
            break;
        }
    }

    const handleData = (data) => {
        setProducts(data?.data)
        setMaxPages(data?.last_page)
        setIsLoadingProducts(false)
        window.scrollTo(0, 0)
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
    const handleNumber = (selected) => {
        if(selected !== number) {
            setNumber(selected)
        }
    }
    const handlePage = (selected) => {
        if(selected !== page) {
            setpage(selected)
        }
    }
    const handleCategoriesFilter = (selected) => {
        if(categories.length > 0){
            const list = [...categories]
            const filterResult = list.filter(item => item === selected);
            if(filterResult.length){
                const filterResult = list.filter(item => item !== selected);
                setpage(1)
                setCategories(filterResult)
            }else{
                list.push(selected)
                setpage(1)
                setCategories(list)
            }
        }else{
            setpage(1)
            setCategories([selected])
        }
    }
    const handleBrandsFilter = (selected) => {
        // console.log("brands => ", brands)
        if(brands.length > 0){
            const list = [...brands]
            const filterResult = list.filter(item => item === selected);
            if(filterResult.length){
                const filterResult = list.filter(item => item !== selected);
                setpage(1)
                setBrands(filterResult)
            }else{
                list.push(selected)
                setpage(1)
                setBrands(list)
            }
        }else{
            setpage(1)
            setBrands([selected])
        }
    }
    const handleMeasuresFilter = (selected) => {
        // console.log("Measures => ", measures)
        if(measures.length > 0){
            const list = [...measures]
            const filterResult = list.filter(item => item === selected);
            if(filterResult.length){
                const filterResult = list.filter(item => item !== selected);
                setpage(1)
                setMeasures(filterResult)
            }else{
                list.push(selected)
                setpage(1)
                setMeasures(list)
            }
        }else{
            setpage(1)
            setMeasures([selected])
        }
    }
    const handlePropertiesFilter = (selected) => {
        // console.log("Properties => ", properties)
        if(properties.length > 0){
            const list = [...properties]
            const filterResult = list.filter(item => item === selected);
            if(filterResult.length){
                const filterResult = list.filter(item => item !== selected);
                setpage(1)
                setProperties(filterResult)
            }else{
                list.push(selected)
                setpage(1)
                setProperties(list)
            }
        }else{
            setpage(1)
            setProperties([selected])
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
                    // isLoading={isLoading}
                    isLoadingProducts={isLoadingProducts}
                    isLoadingCategories={isLoadingCategories}
                    isLoadingBrands={isLoadingBrands}
                    isLoadingMeasures={isLoadingMeasures}
                    isLoadingProperties={isLoadingProperties}

                    removeItem={removeItem}
                    // handleData={handleData}
                    categories={categories}
                    brands={brands}
                    measures={measures}
                    properties={properties}
                    sort={sort}
                    page={page}
                    number={number}
                    listCategories={listCategories}
                    listBrands={listBrands}
                    listMeasures={listMeasures}
                    listProperties={listProperties}
                    handleCategoriesFilter={handleCategoriesFilter}
                    handleBrandsFilter={handleBrandsFilter}
                    handleMeasuresFilter={handleMeasuresFilter}
                    handlePropertiesFilter={handlePropertiesFilter}
                    handleShowMenu={handleShowMenu}
                    showMenu={showMenu}
                    handleSort={handleSort}
                    handleNumber={handleNumber}
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