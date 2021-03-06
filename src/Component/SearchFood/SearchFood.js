import React, { useEffect, useState } from 'react';
import { Card, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import SearchFoodDisplay from '../SearchFoodDisplay/SearchFoodDisplay';

const SearchFood = () => {
    const [foods, setFoods] = useState([]);
    const [searchText, setSearchText] = useState("");

    // search text handle in 
    const handleSearchText = (event) => {
        console.log(event.target.value)
        const newText = event.target.value;
        setSearchText(newText);

    }

    useEffect(() => {
        // let url = `www.themealdb.com/api/json/v1/1/random.php`;
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals));
    }, [foods])

    return (
        <div>
            <h4 className="text-primary mt-3 fw-bold">Search Your Favorite Food here</h4>
            <div className="container mt-5">
                <InputGroup className="w-50 mx-auto">
                    <FormControl onChange={handleSearchText}
                        placeholder="Type here to your favorite food"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
                <Row xs={1} md={2} xl={3} className="g-4">
                    {
                        foods && foods.map(food => <SearchFoodDisplay
                            key={food.idCategory}
                            food={food}

                        ></SearchFoodDisplay>)
                    }
                </Row >
            </div>
        </div>
    );
};

export default SearchFood;