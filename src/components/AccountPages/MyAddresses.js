import React, { useContext, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Helmet } from "react-helmet";
import AddressBox from "../AddressBox";
import { AuthProvider } from "../../contexts/AuthContext";
import ErrorSnackbar from "../ErrorSnackbar";
import SuccessSnackbar from "../SuccessSnackbar";

export default function MyAddresses({ selectCurrentAddress, SelectModelForm  }) {
    const { 
        listAddresses, addressesLoading, addressesFetching, removeAddressMutation,
        successAuthContext, emptySuccessAuthContext,
        errorAuthContext, emptyErrorAuthContext 
    }  = useContext(AuthProvider)
    
    const [errorOpen, setErrorOpen] = React.useState(false);

    const closeError = () => {
        setErrorOpen(false);
    };

    const removeSelectedAddress = async (key) => {
        await removeAddressMutation(key)
    }

    const changeCurrentAddress = (address) => {
        selectCurrentAddress(address)
    }

    useEffect(() => {
        if(successAuthContext && successAuthContext['removeAddress']){
            let timer = setTimeout(() => {
                emptySuccessAuthContext()
            }, 4000)
            return () => clearTimeout(timer)  
        }
    }, [successAuthContext])

    useEffect(() => {
        if(errorOpen){
            let timer = setTimeout(() => {
                setErrorOpen(false)
                emptyErrorAuthContext()
            }, 4000)
            return () => clearTimeout(timer)  
        }
    }, [errorOpen])

    useEffect(() => {
        if(errorAuthContext && errorAuthContext['removeAddress']){
            setErrorOpen(true)
        }
    }, [errorAuthContext])

    return (
        <div className="dashboard-address">
            <Helmet>
                <title>Mes adresses | Ecowatt</title>
            </Helmet>
            <div className="title title-flex">
                <div>
                    <h2>Mes adresses</h2>
                    <span className="title-leaf">
                        <img src={require("./../../assets/svg/leaf.png")} alt="" className="icon-width bg-gray" />
                    </span>
                </div>
                <button 
                    type="button"
                    onClick={() => SelectModelForm('addAddress')}
                    className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                >
                    <i data-feather="plus" className="me-2"></i> 
                    Ajouter une nouvelle adresse
                </button>
            </div>


            {(errorAuthContext && errorAuthContext['removeAddress']) && (
                <ErrorSnackbar message={errorAuthContext['removeAddress']} closeFunction={closeError} />
            )}

            {(successAuthContext && successAuthContext['removeAddress']) && (
                <SuccessSnackbar message={successAuthContext['removeAddress']} />
            )}

            {(addressesLoading || addressesFetching) ?
                <div className="min-vh-100 px-4 py-2 d-flex align-items-center justify-content-center">
                    <InfinitySpin
                        type="ThreeDots"
                        color="#2A3466"
                        height={220}
                        width={220}
                        visible={addressesLoading || addressesFetching}
                    />
                </div>
                :
                (
                    (!listAddresses || !listAddresses.length) ?
                        <h2 className="text-center my-5">Aucune adresse trouvée</h2>
                    :
                        <div className="row g-sm-4 g-3">
                            {listAddresses.map((item, key) => <AddressBox key={key} changeCurrentAddress={changeCurrentAddress} remove={removeSelectedAddress} address={item} />)}
                        </div>
                )
            }
        </div>
    );
}