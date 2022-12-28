import React, { Component, useState } from "react";
import "./search.css"
import $ from 'jquery'
import RecipeList from "./RecipeList"

function Search() {

    const [recipeData, setRecipeData] = useState(null);
    const [query, setQuery] = useState("burger");
    
   function getRecipeData(){
       fetch(
    `https://api.spoonacular.com/recipes/search?apiKey=cabe11c03f694e5fa82994e4d70adc60&number=10&query=${query}`,
       )
       .then((response) => response.json())
       .then((data) => {
         setRecipeData(data);
         console.log(data)
       })
       .catch(() => {
         console.log("error");
       });
   }
    function handleChange(e) {
       setQuery(e.target.value);
      }
    
   
    return (
        <div className="App">
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
        
        <div class = "wrapper">
        

        <div class = "search-wrapper">
          <div className="searchRecipe">
        <h1 class = "wordSearch">Find a Recipe</h1>
        </div>
       <div className="searchBar">
        <input class="inputSearch" type ="text" id="searchField" placeholder ="" onChange = {handleChange}/>
        <button class="buttonSearch" onClick = {getRecipeData}>
          
        <i class="uil uil-search"></i>
        </button>
        </div>
        </div>
        </div>
        
        <div id = "output"></div>
        {recipeData && <RecipeList recipeData = {recipeData} />}
        </div>
);
}
export default Search;
