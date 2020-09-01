import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = '98ef6fd9';
  const APP_KEY = 'fe6112cd51c88d7edd90a36da83e1466';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []); 

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button  type="submit" className="search-button">Search</button>
      </form>
    </div>
  )
}

export default App;
