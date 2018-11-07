import React from 'react';

const Recipe  = props =>
  <li key={props.id}>
    {props.title}
    <a target='_blank' href={props.href} >Check the recipe</a>
    <h6>All ingredients for the recipe</h6>
    <ul>
      {
        props.ingredients.split(',').map( (ingredient, index) => <li key={index}>{ingredient}</li>)
      }
    </ul>
    <img src={props.thumbnail} alt='recipe thumbnail'></img>
  </li>;

export default Recipe;
