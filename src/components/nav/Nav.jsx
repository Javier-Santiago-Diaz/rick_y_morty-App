import SearchBar from './SearchBar'
import React from 'react'

export default function NavBar(props) {
    return (
        <div className='Nav'>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}