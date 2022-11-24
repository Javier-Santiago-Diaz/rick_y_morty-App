import React from 'react'
import s from '../nav/Nav.module.css'
import SearchBar from '../searchBar/SearchBar.jsx'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    const { onSearch } = props
    return (
        <div className={s.Nav}>
            <Link to="/home">Home</Link>
            <Link to="/about" >About</Link>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}