import React from 'react'
import s from '../nav/Nav.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
    const { onSearch } = props
    return (
        <div className={s.container}>

            <div className={s.home}>
                <NavLink to="/home" className={s.homelink} >Home</NavLink>
            </div>

            <div className={s.about}>
                <NavLink to="/about" className={s.aboutlink} >About</NavLink >
            </div>

            <div className={s.search}>
                <SearchBar onSearch={onSearch} />
            </div>

            <div>
                <NavLink to="/favorites">Favorites</NavLink>
            </div>

        </div >
    )
}