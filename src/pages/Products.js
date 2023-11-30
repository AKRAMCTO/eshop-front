import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";

import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Products/Container";
import { getProducts, getFilterCategories, getFilterBrands, getFilterMeasures, getFilterProperties } from "../queries/queries";

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
    const [sort, setSort] = useState('latest')
    
    const [isLoadingProducts, setIsLoadingProducts] = useState(false)
    const [isLoadingCategories, setIsLoadingCategories] = useState(false)
    const [isLoadingBrands, setIsLoadingBrands] = useState(false)
    const [isLoadingMeasures, setIsLoadingMeasures] = useState(false)
    const [isLoadingProperties, setIsLoadingProperties] = useState(false)

    const [page, setPage] = useState(1)
    const [number, setNumber] = useState(15)
    const [maxPages, setMaxPages] = useState(1)

    useEffect(() => {
        // console.log('queryParameters => ', queryParameters.getAll())
        if(('products'+location?.search) !== curentUrl()){
            if(queryParameters.get("categories")) {
                setCategories(queryParameters.get("categories").split(","))
            }
            if(queryParameters.get("brands")) {
                setBrands(queryParameters.get("brands").split(","))
            }
            if(queryParameters.get("properties")) {
                setProperties(queryParameters.get("properties").split(","))
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
    }, [location])

    useEffect(() => {
        fetchProducts()
    }, [ categories, brands, properties ])

    useEffect(() => {
        if(products.length > 0) {
            fetchProducts()
        }
    }, [ page, sort, number])

    // useEffect(() => {
    //     let fullUrlProperties = `&`
    //     // const keys = properties;
    //     console.log('properties =>>>>>>> ', JSON.stringify(properties))

    //     properties.map((items, key) => 
    //         console.log('items =>>>>>>> ', items) 
    //         )
    //     //     // if(items.langth){
    //     //     //     fullUrlProperties += `${key}=`
    //     //     //     items.map((row ,key1) => {
    //     //     //         console.log('row =>>>>>>> ', row)
    //     //     //         fullUrlProperties += `${key}-${row},`
    //     //     //     })
    //     //     // }
    //     // })
    //     console.log('end properties =>>>> ', fullUrlProperties)
    // }, [ properties ])


    const curentUrl = () => {
        let urlCategories = categories.length ? `categories=${categories.toString()}` : ''
        let urlBrands = brands.length ? `&brands=${brands.toString()}` : ''
        let urlProperties = `&properties=${properties.toString()}`
        // let urlProperties = ``
        let urlSort = `&sort=${sort}`
        let urlPage = `&page=${page}`
        let urlNumber = `&number=${number}`

        return 'products?'+urlCategories+urlBrands+urlProperties+urlSort+urlPage+urlNumber
    }
    const generateUrl = () => {
        let fullurl = curentUrl()
        history.push(fullurl);
        // let fullurl = 'products?'+urlCategories+urlBrands+urlProperties+urlSort+urlPage+urlNumber
        // if(fullurl === 'products?'+location?.search){
        //     console.log('the same')
        // }else{
        //     console.log('not the  same')
        // }
    }

    const fetchProducts = async () => {
        setIsLoadingProducts(true)
        // let addedProperties = getProps()
        // console.log(addedProperties)
        const res = await getProducts({
            'categories': categories,
            'brands': brands,
            'properties': properties,
            'sort': sort,
            'page': page,
            'number': number
        });

        if (res.status === true) {
            handleData(res?.data, res?.categories, res?.brands, res?.properties)
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
            // case 'measures' :
            //     filterResult = measures.filter(item => item !== selected);
            //     setPage(1)
            //     setMeasures(filterResult)
            // break;
            // case 'properties' :
            //     filterResult = properties.filter(item => item !== selected);
            //     setPage(1)
            //     setProperties(filterResult)
            break;
        }
    }

    const handleData = (data, lcategories, lbrands, lproperties) => {
        setProducts(data?.data)
        setListCategories(lcategories)
        setListBrands(lbrands)
        setListProperties(lproperties)
        setMaxPages(data?.last_page)
        setIsLoadingProducts(false)
        // console.log(properties)
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
        if(properties[label] && properties[label].length){
            const list = structuredClone(properties)
            const filterResult = list[label].filter(item => item === selected);
            if(filterResult.length){
                const filterResult = list[label].filter(item => item !== selected);
                list[label] = filterResult
                setProperties(list)
                setPage(1)
            }else{
                list[label].push(selected)
                setProperties(list)
                setPage(1)
            }
        }else{
            const list = structuredClone(properties)
            list[label] = [selected]
            setProperties(list)
            setPage(1)
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
                    handleAttributes={handleAttributes}
                />
            </section>
        </Layout>
    );
}