import React, { useEffect, useState } from 'react';
import { File } from 'react-feather';
import SlideProducts from '../SlideProducts';

export default function Tabs({ data }) {
    const [tab, setTab] = useState('')

    useEffect(() => {
        if(data?.description){
            setTab("description")
        }else if(data?.full_technical_file){
            setTab("techniqual")
        }else if(data?.product_properties){
            setTab("product_properties")
        }else if(data?.accessories){
            setTab("accessories")
        }
        // else if(data?.description){
        //     setTab("description")
        // }
    }, [])

    const handleTabs = (selected) => {
        if(tab !== selected){
            setTab(selected)
        }
    }
    
    return (
        <div className="product-section-box m-0">
            <ul className="nav nav-tabs custom-nav">
                {(data?.description) ?
                    <li className="nav-item">
                        <button onClick={() => handleTabs('description')} className={`nav-link ${(tab === 'description') ? "active" : ""}`} type="button">Description</button>
                    </li>
                    : null
                }
                {(data?.full_technical_file) ?
                    <li className="nav-item">
                        <button onClick={() => handleTabs('techniqual')} className={`nav-link ${(tab === 'techniqual') ? "active" : ""}`} type="button">Fiche technique</button>
                    </li>
                    : null
                }
                {(data?.product_properties && data?.product_properties.length) ?
                    <li className="nav-item">
                        <button onClick={() => handleTabs('product_properties')} className={`nav-link ${(tab === 'product_properties') ? "active" : ""}`} type="button">Les caractéristiques</button>
                    </li>
                    : null
                }
                {(data?.accessories && data?.accessories.length) ?
                    <li className="nav-item">
                        <button onClick={() => handleTabs('accessories')} className={`nav-link ${(tab === 'accessories') ? "active" : ""}`} type="button">Accessoires</button>
                    </li>
                    : null
                }
            </ul>

            <div className="tab-content custom-tab">
                {(data?.description) ? 
                    <div className={`tab-pane fade ${(tab === 'description') ? "show active" : ""}`}>
                        <div className="product-description" dangerouslySetInnerHTML={{ __html: data?.description }} />
                    </div>
                    : 
                    null
                }
                {(data?.full_technical_file) ? 
                    <div className={`tab-pane fade ${(tab === 'techniqual') ? "show active" : ""}`}>
                        {(data?.full_technical_file) && <a href={data?.full_technical_file} className='file-button' rel="noreferrer" target="_blank"><File /> Voir la fiche technique</a>}
                    </div>
                    : 
                    null
                }
                {(data?.product_properties && data?.product_properties.length) ? 
                    <div className={`tab-pane fade ${(tab === 'product_properties') ? "show active" : ""}`}>
                        <div className='row'>
                            {data?.product_properties.map((item, key) =>
                                <div key={`product_properties_${item?.id}`} className='col-md-4 col-12'>
                                    <strong>Unité de mesure</strong> : {item?.measure?.label}<br />
                                    <strong>Caractéristique</strong> : {item?.property?.label}<br />
                                    <strong>Valeur</strong> : {item?.value}
                                </div>    
                            )}
                        </div>    
                    </div>
                    : 
                    null
                }
                {(data?.accessories && data?.accessories.length) ? 
                    <div className={`tab-pane fade ${(tab === 'accessories') ? "show active" : ""}`}>
                        <div className='row'>
                            <div className="col-12">
                                <SlideProducts products={data?.accessories} />
                            </div>
                        </div>    
                    </div>
                    : 
                    null
                }
            </div>
        </div>
    )
}