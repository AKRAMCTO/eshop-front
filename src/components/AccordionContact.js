import React, { useState } from 'react';

export default function AccordionContact( { children, title, collapsed = false }) {
    const [isActive, setIsActive] = useState(collapsed)

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className={`accordion-button  ${(isActive) ? '' : 'collapsed'}`} type="button" onClick={() => setIsActive(!isActive)}>
                   {title}<i className="fa-solid fa-angle-down"></i>
                </button>
            </h2>
            <div className={`accordion-collapse collapse ${(isActive) ? 'show' : ''}`}>
                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    )
}
