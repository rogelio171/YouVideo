import React from 'react'
import './search.css'

const Search = (props) => (
    <form 
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <input 
            ref={props.setRef}
            className="Search-input"
            placeholder="Search your video" 
            name="search"
            type="text"
            onChange={props.handleChange}
            value={props.value}
        />
    </form>
)

export default Search