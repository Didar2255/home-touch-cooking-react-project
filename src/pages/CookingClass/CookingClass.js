import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';

const CookingClass = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('./servicesData.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <h2>All cooking class here</h2>
        </div>
    );
};

export default CookingClass;