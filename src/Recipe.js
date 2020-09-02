import React from 'react';
import './Recipe.css';

function Recipe({title, calories, image, ingredients}) {
    return (
        <div className="recipe">
            <div className="recipe-post">
                <h1>{title}</h1>
                <ul>
                    {ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
                <p><strong>Calories: </strong>{calories} kcal</p>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Recipe;
