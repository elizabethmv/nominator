import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/itemActions';
import { getMeals } from '../actions/mealActions'
import LocationDropdown from './LocationDropdown';
import ItemsListDropdown from './ItemsListDropdown';
import styled from 'styled-components';
import MealsListDropdown from './MealsListDropdown';

// import { TransitionGroup } from 'react-transition-group';
// import { CSSTransition } from 'react-transition-group';

const Display = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  float: left;
`;
const Box3 = styled.div`
  float: right;
`;

// <Display>
  // <TransitionGroup style={Display}>
    // <CSSTransition key={props.id} timeout={100} classNames="fade"> 
    // </CSSTransition>
  // </TransitionGroup>
// </Display>

const Item  = props =>{
  return <Display>
    <ListGroupItem>
        <Box>
          <Button
            className="remove-btn"
            color="danger"
            size="sm"
            onClick={() => props.deleteItem(props.id)}
          >
            &times;
          </Button>
        </Box>
        <Box>
          {props.name}
          {props.typeMeal}
        </Box>
        <Box3>
          <LocationDropdown id={props.id} />
          <MealsListDropdown id={props.id} />
        </Box3> 
    </ListGroupItem>
  </Display>
}

Item.propTypes = {
  // deleteItem: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  meal: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.item,
  meal: state.item,
})
  
export default connect(mapStateToProps,{ deleteItem, getMeals })(Item);
