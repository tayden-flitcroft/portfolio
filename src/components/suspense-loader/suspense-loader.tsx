import React from 'react'
import './suspense-loader.scss'

const SuspenseLoader = () => {
    return (
        <div className="suspense-loader">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default SuspenseLoader
