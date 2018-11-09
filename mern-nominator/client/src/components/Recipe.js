import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

const Recipe  = props =>
  <div key={props.id} >
    {props.title}
    <a target='_blank' rel="noopener noreferrer" href={props.href} >Check the recipe</a>
    <h6>All ingredients for the recipe</h6>
    <ul>
      {
        
        props.ingredients
          .split(',')
          .map( (ingredient, index) => {

            let color = 'white';
            let border = '';
            
            const itemsNames = props.items.map(item => item.name.toLowerCase().trim() );
            const match = itemsNames.indexOf(ingredient.toLowerCase().trim()) > -1;
            color = match ? 'MintCream ' : color;
            border = match ? '1px black solid' : border;
            
            const style = {'backgroundColor':`${color}`, 'border':`${border}`}
            return <li style={style} key={index}>{ingredient}</li>
          })
          
      }
    </ul>
    <img src={props.thumbnail} alt='recipe thumbnail'></img>
    <button type="button"
      onClick={() => {
        const ingredients = props.ingredients
          .split(',')
          .map( ingredient => ingredient.trim() );

        axios.post('/api/items',{ingredients:ingredients})
          .then( response => response.data
            .map( ingredient => props.addItem(ingredient)) )

      }}
    >
      Buy missing ingredients
    </button>
  </div>;

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(Recipe);