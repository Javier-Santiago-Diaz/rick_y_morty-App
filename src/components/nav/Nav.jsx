import React from 'react'
import s from '../nav/Nav.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
    const { onSearch } = props
    return (
        <div className={s.container}>
            <div className={s.container1}>
                <div className={s.home}>
                    <NavLink to="/home" className={s.homeL} >Principal...</NavLink>
                </div>

                <div className={s.home}>
                    <NavLink to="/about" className={s.aboutN} >SobreNosotros...</NavLink >
                </div>

                <div >
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
        </div >
    )
}