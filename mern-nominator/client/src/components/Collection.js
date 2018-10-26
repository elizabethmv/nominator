import React, { Component } from 'react';
import List from './List';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems, deleteItem, getMeals } from '../actions/itemActions';
import { getFridgeItems, addItemToFridge } from '../actions/fridgeActions';
import { getPantryItems, addItemToPantry } from '../actions/pantryActions';

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

  componentDidMount() {
    this.props.getItems();
    this.props.getFridgeItems({ _id: "5bcce9e5ce791b117ec60f7c" });
    this.props.getPantryItems({ _id: "5bccf0ada1ab9f13df595d27" });
    this.props.getMeals();
  };

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
  const { items, meals } = this.props.item;
  const { fridgeItems } = this.props.fridge;
  const { pantryItems } = this.props.pantry;
    return (
      <Display>
        <Box><List title='All' items={items} /></Box>
        <Box><List title='Fridge' items={fridgeItems} /></Box>
        <Box><List title='Pantry' items={pantryItems} /></Box>
        <Box><List title='Meal' items={meals} /></Box>
      </Display>
    );
  }
}

Collection.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  fridge: PropTypes.object.isRequired,
  pantry: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.item,
  fridge: state.fridge,
  pantry: state.pantry
})

export default connect(mapStateToProps,{ 
  getItems, 
  deleteItem, 
  getFridgeItems, 
  addItemToFridge, 
  getPantryItems, 
  addItemToPantry, 
  getMeals  
})(Collection);