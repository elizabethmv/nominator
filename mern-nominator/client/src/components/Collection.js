import React, { Component } from 'react';
import List from './List';
import MealsList from './MealsList';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { getFridgeItems } from '../actions/fridgeActions';
import { getPantryItems } from '../actions/pantryActions';
import { getMeals } from '../actions/mealActions';

const Display = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Box = styled.div`
  flex: 1
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

 class Collection extends Component {

  constructor(){
    super();
    this.state = {
      fridgeItems: [] ,
      pantryItems: [] 
    }
  }

  componentDidMount() {
    this.props.getItems();
    this.props.getFridgeItems({ _id: "5bcce9e5ce791b117ec60f7c" });
    this.props.getPantryItems({ _id: "5bccf0ada1ab9f13df595d27" });
    this.props.getMeals();
  };

  componentWillReceiveProps(){
    this.setState(this.props.fridge);
    this.setState(this.props.pantry);
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    
  const { items } = this.props.item;
  const { fridgeItems } = this.props.fridge;
  const { pantryItems } = this.props.pantry;
  const { meals } = this.props.meal;
  console.log('meals',meals);

  // const { fridgeItems, pantryItems } = this.state;
  // console.log('fridgeItems',fridgeItems, 'pantryItems',pantryItems);
  
    return (
      <Display>
        <Box><List title='All' items={items} /></Box>
        <Box><List title='Fridge' items={fridgeItems} /></Box>
        <Box><List title='Pantry' items={pantryItems} /></Box>
        <Box><MealsList title='Meal' meals={meals} /></Box>
      </Display>
    );
  }
}

Collection.propTypes = {
  item: PropTypes.object.isRequired,
  fridge: PropTypes.object.isRequired,
  pantry: PropTypes.object.isRequired,
  meal: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.item,
  fridge: state.fridge,
  pantry: state.pantry,
  meal: state.meal,
})

export default connect(mapStateToProps,{ 
  getItems,  
  getFridgeItems, 
  getPantryItems, 
  getMeals  
})(Collection);