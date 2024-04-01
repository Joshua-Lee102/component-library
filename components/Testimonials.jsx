import React from 'react'

function Testimonial({ hasImage, imageUrl, quote, author, title, header }) {
    if (hasImage === true){
        return (
            <div className="testimonial-container">
            {hasImage && (
                <div className="testimonial-image">
                <img className ="profile-pic" src={'./components/profile.webp'} />
                </div>
            )}
            <div className="testimonial-content">
                
                <blockquote>
                    <p>{quote}</p>
                <cite>
                    <span className="author">{author}</span> / <span className="title">{title}</span>
                </cite>
                
                </blockquote>
            </div>
            </div>  
        )
    }else{
        return(
            <div className="testimonial-content no-image">
                <blockquote>
                    <h1> {header} </h1>
                    <p>{quote}</p>
                <cite>
                    <span className="author">{author}</span> / <span className="title">{title}</span>
                </cite>
                </blockquote>
            </div>  
        )  
    } 
}

export default Testimonial
