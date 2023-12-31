import React from 'react'
import LogoImage from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom'
export const Logo = () => {
    return (
        <Link to="/" className='hover:shadow-md rounded-full p-2'><img className="hidden sm:block" src={LogoImage} alt="Logo" width="100" height="100" /></Link>
    )
}
