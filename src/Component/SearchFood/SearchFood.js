import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const SearchFood = () => {
    const [foods, setFoods] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        // let url = `www.themealdb.com/api/json/v1/1/random.php`;
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setFoods(data.categories));
    }, [])
    return (
        <div>
            <div>
                <h2>Total data is loaded: {foods.length}</h2>
                {
                    foods.map(food => {
                        <Row xs={1} md={2} className="g-4">
                            <img src={food.strCategoryThumb} alt="" />
                            {food.idCategory}
                            <h4>{food.strCategory}</h4>
                            <h5>{food.strCategoryDescription}</h5>
                        </Row>
                    })
                }
            </div>
        </div>
    );
};

export default SearchFood;