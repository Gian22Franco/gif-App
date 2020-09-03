import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card-item-nn animate__animated animate__fadeIn">
            <img className="img-card" src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}


