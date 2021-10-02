import React, { useState, useEffect } from 'react';

const SearchFood = () => {
    const [foods, setFoods] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        const url = `www.themealdb.com/api/json/v1/1/search.php?s=${Arrabiata}`
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div>

        </div>
    );
};

export default SearchFood;