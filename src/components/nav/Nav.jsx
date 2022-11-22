import React from 'react'
import s from '../nav/Nav.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'

export default function Nav(props) {
    const { onSearch } = props
    return (
        <div className={s.Nav}>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}