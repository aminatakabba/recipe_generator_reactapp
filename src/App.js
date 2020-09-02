import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '98ef6fd9';
  const APP_KEY = 'fe6112cd51c88d7edd90a36da83e1466';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]); 

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const upadateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <div className="head">
          <h1 className="head-title">Welcome to Random Recipe Generator </h1>
          <p className="head-paragraph">Looking fore healthy and nutricious recipes? You are in the correct place, <strong>Random Recipe Generator</strong> allows you to find the best recipes and gives you the exact calories for each meal.</p>
        <div className="search">
          <input type="text" className="search-bar" value={search} onChange={upadateSearch}/>
          <button  type="submit" className="search-button">Search</button>
        </div>
        </div>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
    </div>
  )
}

export default App;
