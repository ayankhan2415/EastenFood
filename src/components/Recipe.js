import React from 'react'
import {useState} from 'react'

import RecipeDetails from '../components/RecipeDetails'
function Recipe({recipe}) {
    const {label, image, url, ingredients} = recipe.recipe
    const [show, setShow] = useState(false)
    
    return (
       
        <div  className = 'recipe' >
            <h2>{label}</h2>
            <img src = {image} alt ={label} />
            <a href={url} target = '_blank' rel='noopener noreferrer' >  Hit URL</a>
            <button  onClick ={()=>setShow(!show)} >ingredients </button>
            {  show  &&  <RecipeDetails  ingredients = {ingredients} />}


        </div>
    )
}

export default Recipe
