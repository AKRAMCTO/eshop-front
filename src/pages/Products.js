import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Products/Container";
import { getProducts, getFilterCategories, getFilterBrands, getFilterMeasures, getFilterProperties } from "../queries/queries";
import HomeSlide from "../components/HomeSlide";

export default function Products() {
    const location = useLocation()
    const history = useHistory()
    const queryParameters = new URLSearchParams(location.search)
    
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
    const [showProperties, setShowProperties] = useState([])
    const [sort, setSort] = useState('latest')
    
    const [isLoadingProducts, setIsLoadingProducts] = useState(false)
    const [isLoadingCategories, setIsLoadingCategories] = useState(false)
    const [isLoadingBrands, setIsLoadingBrands] = useState(false)
    const [isLoadingMeasures, setIsLoadingMeasures] = useState(false)
    const [isLoadingProperties, setIsLoadingProperties] = useState(false)

    const [startLoad, setStartLoad] = useState(false)
    const [page, setPage] = useState(1)
    const [number, setNumber] = useState(15)
    const [maxPages, setMaxPages] = useState(1)

    useEffect(() => {
        if(('products'+location?.search) !== curentUrl()){
            if(queryParameters.get("categories")) {
                setCategories(queryParameters.get("categories").split(","))
            }
            if(queryParameters.get("properties")) {
                setProperties(queryParameters.get("properties").split(","))
            }
            if(queryParameters.get("brands")) {
                setBrands(queryParameters.get("brands").split(","))
            }
            if(queryParameters.get("sort")) {
                setSort(queryParameters.get("sort"))
            }
            if(queryParameters.get("page")) {
                setPage(queryParameters.get("page"))
            }
            if(queryParameters.get("number")) {
                setNumber(queryParameters.get("number"))
            }
        }
        setStartLoad(true)
    }, [location])

    useEffect(() => {
        if(startLoad) {
            fetchProducts()
        }
    }, [ categories, brands, properties, startLoad ])

    useEffect(() => {
        if(products.length > 0 && startLoad) {
            fetchProducts()
        }
    }, [ page ])
    useEffect(() => {
        if(products.length > 0 && startLoad && page === 1) {
            fetchProducts()
        }
    }, [ sort ])
    useEffect(() => {
        if(products.length > 0 && startLoad && page === 1) {
            fetchProducts()
        }
    }, [ number ])

    const curentUrl = () => {
        let urlCategories = categories.length ? `categories=${categories.toString()}` : ''
        let urlBrands = brands.length ? `&brands=${brands.toString()}` : ''
        let urlProperties = properties.length ? `&properties=${properties.toString()}` : ''
        // if(properties?.length){
        //     properties.map((row) => {
        //         if(row?.items && row?.items.length){
        //             urlProperties += `&${row?.attr}=${row?.items.toString()}`
        //         }

        //     })
        // }
        let urlSort = `&sort=${sort}`
        let urlPage = `&page=${page}`
        let urlNumber = `&number=${number}`

        return 'products?'+urlCategories+urlBrands+urlProperties+urlSort+urlPage+urlNumber
    }
    const generateUrl = () => {
        let fullurl = curentUrl()
        history.push(fullurl);
    }

    const fetchProducts = async () => {
        setIsLoadingProducts(true)
        
        const res = await getProducts({
            'categories': categories,
            'brands': brands,
            'properties': properties,
            'sort': sort,
            'page': page,
            'number': number
        });

        if (res.status === true) {
            handleData(res)
            generateUrl()
        } else {
            setProducts([])
            setMaxPages(1)
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
                setPage(1)
                setCategories(filterResult)
            break;
            case 'brands' :
                filterResult = brands.filter(item => item !== selected);
                setPage(1)
                setBrands(filterResult)
            break;
            default:

        }
    }

    const handleData = (data) => {
        setProducts(data?.data?.data)
        setListCategories(data?.categories)
        setListBrands(data?.brands)
        setListProperties(data?.properties)
        setMaxPages(data?.data?.last_page)
        setShowProperties(data?.old)
        setIsLoadingProducts(false)
        // window.scrollTo(0, 0)
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
            setPage(1)
        }
    }
    const handleNumber = (selected) => {
        if(selected !== number) {
            setNumber(selected)
            setPage(1)
        }
    }
    const handlePage = (selected) => {
        if(selected !== page) {
            setPage(selected)
        }
    }
    const handleAttributes = (value, key, action) => {
        // let current = [...properties]
        action = action.toLowerCase()
        key = key.toLowerCase()

        // let row = []
        //     key: [
        //         action => value
        //     ]
        // }

        console.log(value, key, action)
    }
    
    const handleCategoriesFilter = (selected) => {
        if(categories.length > 0){
            const list = [...categories]
            const filterResult = list.filter(item => item === selected);
            if(filterResult.length){
                const filterResult = list.filter(item => item !== selected);
                setPage(1)
                setCategories(filterResult)
            }else{
                list.push(selected)
                setPage(1)
                setCategories(list)
            }
        }else{
            setPage(1)
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
                setPage(1)
                setBrands(filterResult)
            }else{
                list.push(selected)
                setPage(1)
                setBrands(list)
            }
        }else{
            setPage(1)
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
                setPage(1)
                setMeasures(filterResult)
            }else{
                list.push(selected)
                setPage(1)
                setMeasures(list)
            }
        }else{
            setPage(1)
            setMeasures([selected])
        }
    }
    const handlePropertiesFilter = (label, selected) => {
        if(properties.includes(`${label}-${selected}`)){
            setProperties(current =>
                current.filter(row => {
                  return row !== `${label}-${selected}`;
                })
            )
        }else{
            setProperties(prev => [...prev, `${label}-${selected}`])
        }
    }

    return (
        <Layout>
            <Helmet>
                <title>{`Les produits | Ecowatt`}</title>
            </Helmet>
            <Breadcrumb title={`Les produits`} />

            <div className="container-fluid-lg mt-4">
                <HomeSlide type={`CS1`} extraClass={`col-12`} />
            </div>

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
                    showProperties={showProperties}
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
                    handleAttributes={handleAttributes}
                />
            </section>
        </Layout>
    );
}