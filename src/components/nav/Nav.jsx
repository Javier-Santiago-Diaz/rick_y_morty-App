import React from 'react'
import s from '../nav/Nav.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'
import { Link, NavLink } from 'react-router-dom'

export default function Nav(props) {
    const { onSearch } = props
    return (
        <div className={s.Nav}>
            <NavLink to="/" className={s.prueba} >Home</NavLink>
            <Link to="/about" >About</Link>
            <SearchBar onSearch={onSearch} />
        </div >
    )
}