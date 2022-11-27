import React from 'react'
import s from '../nav/Nav.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
    const { onSearch } = props
    return (
        <div className={s.nav1}>
            <NavLink to="/home" className={s.home} >Home</NavLink>
            <NavLink to="/about" className={s.about} >About</NavLink >
            <SearchBar onSearch={onSearch} />
        </div >
    )
}