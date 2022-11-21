import SearchBar from '../searchBar/SearchBar.jsx'
import s from '../nav/Nav.module.css'
import React from 'react'

export default function Nav(props) {
    return (
        <div className={s.Nav}>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}