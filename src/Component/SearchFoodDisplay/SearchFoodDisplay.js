import React from 'react';
import './SearchFoodDisplay.css';

const SearchFoodDisplay = (props) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props.food;
    return (
        <div>
            <div className="search-div-style mt-5">
                <img src={strCategoryThumb} className="img-fluid w-100" alt="" />
                <h4>{strCategory}</h4>
                <p>{strCategoryDescription.slice(0, 150)}</p>
            </div>
        </div>
    );
};

export default SearchFoodDisplay;