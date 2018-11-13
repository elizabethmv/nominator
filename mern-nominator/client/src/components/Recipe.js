import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';


class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { items } = this.props.item;
    return <div key={this.props.id} >
    {this.props.title}
    <a target='_blank' rel="noopener noreferrer" href={this.props.href} >Check the recipe</a>
    <h6>All ingredients for the recipe</h6>
    <ul>
      {
        
        this.props.ingredients
          .split(',')
          .map( (ingredient, index) => {

            let color = 'white';
            let border = '';
            
            const itemsNames = items.map(item => {
              if(item.name){
                return item.name.toLowerCase().trim()
              }
              return '';
            } ).filter(item => item !== '');

            const match = itemsNames.indexOf(ingredient.toLowerCase().trim()) > -1;
            color = match ? 'MintCream ' : color;
            border = match ? '1px black solid' : border;
            
            const style = {'backgroundColor':`${color}`, 'border':`${border}`}
            return <li style={style} key={index}>{ingredient}</li>
          })
          
      }
    </ul>
    <img src={this.props.thumbnail} alt='recipe thumbnail'></img>
    <button type="button"
      onClick={() => {
        const ingredients = this.props.ingredients
          .split(',')
          .map( ingredient => ingredient.trim() );

        axios.post('/api/items',{ingredients:ingredients})
          .then( response => {
            console.log(0,response.data);
            return response.data
                    .map( ingredient => this.props.addItem(ingredient));
          })
      }}
    >
      Buy missing ingredients
    </button>
  </div>;
  }
  
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(Recipe);