import React from 'react';
import './DisplayFood.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const DisplayFood = (props) => {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props.food;
    return (
        <div>
            <div className="food-style">
                <div>
                    <img src={strCategoryThumb} alt="" />
                    <h4>Item No: {idCategory}</h4>
                    <h5>{strCategory}</h5>
                    <p>{strCategoryDescription.slice(0, 150)}</p>
                </div>
                <Link to="/contact">
                    <Button variant="warning">Order Now</Button>
                </Link>
            </div>

        </div>
    );
};

export default DisplayFood;