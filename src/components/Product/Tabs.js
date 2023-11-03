import React, { useState } from 'react';
import Slider from 'react-slick';

export default function Tabs({ data }) {
    const [tab, setTab] = useState("description")

    const handleTabs = (selected) => {
        if(tab !== selected){
            setTab(selected)
        }
    }
    
    return (
        <div className="product-section-box m-0">
            <ul className="nav nav-tabs custom-nav">
                <li className="nav-item">
                    {/* {(data?.description) && */}
                        <button onClick={() => handleTabs('description')} className={`nav-link ${(tab === 'description') ? "active" : ""}`} type="button">Description</button>
                    {/* } */}
                </li>
                <li className="nav-item">
                    {/* {(data?.description) && */}
                        <button onClick={() => handleTabs('techniqual')} className={`nav-link ${(tab === 'techniqual') ? "active" : ""}`} type="button">Fiche technique</button>
                    {/* } */}
                </li>
            </ul>

            <div className="tab-content custom-tab">
                {/* {(data?.description) &&  */}
                    <div className={`tab-pane fade ${(tab === 'description') ? "show active" : ""}`}>
                        <div className="product-description" dangerouslySetInnerHTML={{ __html: data?.description }} />
                    </div>
                {/* } */}
                {/* {(data?.full_technical_file) &&  */}
                    <div className={`tab-pane fade ${(tab === 'techniqual') ? "show active" : ""}`}>
                        {(data?.full_technical_file) && <a href={data?.full_technical_file} rel="noreferrer" target="_blank">Voir la fiche technique</a>}
                    </div>
                {/* } */}
            </div>
        </div>
    )
}