import React, { Component } from 'react';
import List from './List';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';

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
  };
  onDeleteClick = id => {
    this.props.deleteItem(id);
  };
  render() {
  const { items } = this.props.item
    return (
      <Display>
        <Box><List title='All' items={items} /></Box>
        <Box><List title='Fridge' items={items} /></Box>
        <Box><List title='Pantry' items={items} /></Box>
        <Box><List title='Meal' items={items} /></Box>
      </Display>
    );
  }
}

Collection.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps,{ getItems, deleteItem  })(Collection);