import React, { Children, useState } from 'react';

export default function AccordionItem({children, title, defaultStatus = false}) {
    const [status, setStatus] = useState(defaultStatus)
    
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className={`accordion-button ${(status) ? "" : "collapsed"}`} type="button" onClick={() => setStatus(!status)}>
                    <span>{title}</span>
                </button>
            </h2>
            <div id="collapseOne" className={`accordion-collapse collapse ${(status) ? "show" : ""}`}>
                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    )
}