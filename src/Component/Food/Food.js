import React, { useEffect, useState } from 'react';
import { Card, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import DisplayFood from '../DisplayFood/DisplayFood';
import Button from 'react-bootstrap/Button';

import './Food.css';
const Food = () => {
    // load data from api
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(res => res.json())
            .then(data => setFoods(data.categories))
    }, [])


    return (
        <div className="container mt-3">
            <h2 className="mb-3 text-warning fw-bold p-3">Show in sample Food </h2>
            <Row xs={1} md={2} xl={3} className="g-4">
                {
                    foods.map(food => <DisplayFood
                        key={food.idCategory}
                        food={food}
                    >
                    </DisplayFood>)
                }
            </Row >
        </div >
    );
};

export default Food;