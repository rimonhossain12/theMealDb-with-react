import React from 'react';
import './DisplayFood.css';
import Button from 'react-bootstrap/Button';

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
                <Button variant="warning">Order Now</Button>
            </div>

        </div>
    );
};

export default DisplayFood;