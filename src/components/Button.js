import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'


function Button({children, type, onClick, buttonStyle, buttonSize})
{
    const STYLES = ['btn--primary', 'btn--outline', 'btn--test']
    const SIZES = ['btn--medium', 'btn--large']

    return (
        <>
            <Link to='/sign-up' className='btn-mobile'>
                <button className={`btn ${STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]} ${SIZES.includes(buttonSize) ? buttonSize : SIZES[0]}`} onClick={onClick} type={type}>
                    {children}
                </button>
            </Link>
        </>            
    )
}
    
export default Button