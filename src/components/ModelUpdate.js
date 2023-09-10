import React from 'react';

export default function ModelUpdate({ title, modelStatus, modelClose, children }) {

    return (
        <>
            {(modelStatus) && <div className={`modal-backdrop fade show`}></div>}
            <div className={`modal fade theme-modal ${(modelStatus) ? 'show d-block' : 'd-none'}`} tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-modal={modelStatus} aria-hidden={!modelStatus}>
                <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">{title}</h5>
                            <button type="button" className="btn-close" onClick={() => modelClose()}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
