import React from 'react'
import { Link } from 'react-router-dom';

const SearchItem = (props) => {
    return (
        <Link className="search-item-link" replace>    
            <li class="search-item">
                <span> {props.user.firstName} </span>
                <p>{props.user.lastName}</p>
            </li>
        </Link>
    )
}

export default SearchItem;