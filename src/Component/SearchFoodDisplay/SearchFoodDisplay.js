import React from 'react';
import Button from 'react-bootstrap/Button';
import './SearchFoodDisplay.css';

const SearchFoodDisplay = (props) => {
    const { strMeal, strCategory, strCategoryThumb, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = props.food;
    return (
        <div>
            <div className="search-div-style mt-5">
                <img src={strCategoryThumb} className="img-fluid w-100" alt="" />
                <img className="img-fluid w-75" src={strMealThumb} alt="" />
                <h4>{strMeal}</h4>
                <h5>By using Proudct: {strIngredient1} {strIngredient2} {strIngredient3} {strIngredient4}</h5>
                <p>{strInstructions?.slice(0, 150)}</p>
                <Button variant="warning">Primary</Button>{' '}
            </div>

        </div>
    );
};

export default SearchFoodDisplay;