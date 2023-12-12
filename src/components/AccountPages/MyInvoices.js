import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../contexts/AuthContext";
import { Helmet } from "react-helmet";
import { InfinitySpin, TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Pagination from "../Products/Pagination";
import { Package, Truck } from "react-feather";
import { useQuery } from "react-query";
import { getInvoices, downloadFileInvoice } from "../../queries/queries";

const perPage = 8
const PageSize = 1

export default function MyInvoices() {
    const {userData}  = useContext(AuthProvider)
    const [selectedOrder, setSelectedOrder] = useState(null)
    const [page, setPage] = useState(1)
    const [maxPages, setMaxPages] = useState(1)
    const [copyOrders, setCopyOrders] = useState([])
    const [orders, setOrders] = useState([])
    const [error, setError] = useState('')

    const [loading, setLoading] = useState(true)
    const [isFileLoading, setIsFileLoading] = useState(false)
    const [isFile, setIsFile] = useState(null)

    const { data, isLoading, isFetching } = useQuery('invoices', getInvoices,
        { 
            retry: true, 
            enabled: ((userData && (userData?.type === 'individual' || userData?.type === 'professional' || userData?.type === 'seller')) ? true : false),
            refetchOnWindowFocus: false 
        }
    );
    
    // filter
    const [code, setCode] = useState('')
    const [date, setDate] = useState(null)
    
    useEffect(() => {
        structureOrders()
    }, [data])

    useEffect(() => {
        if(!isLoading && !isFetching){
            setCopyOrders(data)
        }
    }, [data])

    useEffect(() => {
        structureOrders()
    }, [code, date])

    const structureOrders = () => {
        let result = filterOrder()
        if(result && result.length){
            let total = result.length
            let totalPages = Math.ceil(total / perPage)
            setMaxPages(totalPages)

            if(totalPages === 1){
                setOrders(result)
            }else{
                const offset = perPage * (page - 1)
                console.log(offset, (perPage * page))
                setOrders(result.slice(offset, perPage * page))
            }
        }else{
            setOrders([])
            setPage(1)
            setMaxPages(1)
        }
        window.scrollTo(0, 0);
    }
    const handlePage = (selected) => {
        if(selected !== page) {
            setLoading(true)
            setPage(selected)
            if(maxPages === 1){
                setOrders(copyOrders)
            }else{
                const offset = perPage * (selected - 1)
                setOrders(copyOrders.slice(offset, perPage * selected))
            }
            window.scrollTo(0, 0);
        }
    }
    const filterOrder = () => {
        let copylistOrders = []

        if(data && data.length){
            copylistOrders = [...data]

            if(code && code.length){
                copylistOrders = copylistOrders.filter((item) => item?.ref.toLowerCase().includes(code.toLowerCase()));
                console.log('1 copylistOrders => ', copylistOrders)
            }
            if(date){
                let dateFormated = new Date(date);
                dateFormated = dateFormated.toLocaleDateString();

                
                copylistOrders = copylistOrders.filter((item) => OrderDate(item?.date_creation) === dateFormated);
                console.log('dateFormated => ', dateFormated)
                console.log('copylistOrders => ', copylistOrders)
            }

            setCopyOrders(copylistOrders)
        }

        return copylistOrders;
    }
    useEffect(() => {
        if(!isLoading && !isFetching) setLoading(false)
    }, [orders])

    const downloadFile = async (file) => {
        setIsFile(file)
        setIsFileLoading(true)
        try {
            const res = await downloadFileInvoice(file);
            if (res.status) {
                window.open(res?.data, "_blank")
                setIsFile(null)
                setIsFileLoading(false)
            } else {
                setError('Le fichier est introuvable')
                setIsFile(null)
                setIsFileLoading(false)
            }
        } catch (error) {
            setError('Le fichier est introuvable')
            setIsFile(null)
            setIsFileLoading(false)
        }
    }
    const OrderDate = (date_creation) => {
        let date = new Date(date_creation * 1000)
        return date.toLocaleDateString("en-US")
    }

    return (
        <div className="dashboard-order">
            <Helmet>
                <title>Mes factures | Ecowatt</title>
            </Helmet>

            <div className="title">
                <h2>Historique de mes factures</h2>
                <span className="title-leaf title-leaf-gray">
                    <img src={require("./../../assets/svg/leaf.png")} alt="" className="icon-width bg-gray" />
                </span>
            </div>

            {(loading) ?
                <div className="min-vh-100 px-4 py-2 d-flex align-items-center justify-content-center">
                    <InfinitySpin
                        type="ThreeDots"
                        color="#2A3466"
                        height={220}
                        width={220}
                        visible={loading}
                    />
                </div>
                :
                (
                    (!data || !data.length) ?
                        <h2 className="text-center my-5">Aucune factures trouvée</h2>
                :
                    <>
                        <div className="filter">
                            <div className="form-group">
                                <label>Code</label>
                                <input type="text" onChange={(event) => setCode(event.target.value)} className="form-control" value={code} />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="date" onChange={(event) => setDate(event.target.value)} className="form-control" value={date} />
                            </div>
                        </div>
                        {(!orders || !orders.length) ?
                            <h2 className="text-center my-5">Vous n'avez pas encore passer aucune facture.</h2>
                            :
                            <div className="order-contain">
                                {(error && !isFileLoading) ? <h4>{error}</h4> : <div />}
                                {orders.map((item, key) => 
                                    <div className="order-box dashboard-bg-box" key={`commande-${key}`}>
                                        <div className="order-container">
                                            <div className="order-detail">
                                                <h4>
                                                    Ref 
                                                    <span>{ item?.ref }</span>
                                                </h4>
                                            </div>
                                            <div className="order-detail">
                                                {/* <h4>La date <span>{ item?.created_at }</span></h4> */}
                                                <h4>La date <span>{ OrderDate(item?.date_creation) }</span></h4>
                                            </div>
                                            <div className="order-detail">
                                                <h4>Total <span>{`${Math.round(item?.total_ttc * 10)/10} dhs`}</span></h4>
                                            </div>
                                            <div className="order-detail">
                                                <button 
                                                    type="button" 
                                                    className="btn download-btn" 
                                                    onClick={() => downloadFile(item?.last_main_doc)}
                                                    disabled={isFileLoading}
                                                >
                                                    Télécharger
                                                    {(isFileLoading && isFile === item?.last_main_doc) ? 
                                                        <TailSpin
                                                            color="#fff"
                                                            height={16}
                                                            width={16}
                                                        />
                                                    :
                                                        ''
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {(maxPages > 1) && 
                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={page}
                                        totalCount={maxPages}
                                        pageSize={PageSize}
                                        onPageChange={page => handlePage(page)}
                                    />
                                }
                            </div>
                        }
                    </>
                )
            }
        </div>
    );
}