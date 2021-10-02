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
            <h2 className="mb-3">Choice Your Food</h2>
            <InputGroup className="mb-3 w-50 mx-auto">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="warning" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
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