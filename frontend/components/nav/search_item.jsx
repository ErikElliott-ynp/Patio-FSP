import React from 'react'
import { Link } from 'react-router-dom';

const SearchItem = (props) => {
    return (
        <Link to={`/users/${props.user.id}`} className="search-item-link" replace>    
            <li className="search-item">
                <span className="search-name"> {props.user.firstName} </span>
                <p className="search-name">{props.user.lastName}</p>
            </li>
        </Link>
    )
}

export default SearchItem;