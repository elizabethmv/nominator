import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/itemActions';
import ItemsListDropdown from './ItemsListDropdown';
import LocationDropdown from './LocationDropdown';
import styled from 'styled-components';
import List from './List';


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

const Box4 = styled.div`
  width: 100%;
`;

// <Display>
  // <TransitionGroup style={Display}>
    // <CSSTransition key={props.id} timeout={100} classNames="fade"> 
    // </CSSTransition>
  // </TransitionGroup>
// </Display>

const Meal  = props =>
  <Display>
    <ListGroupItem>
        <Box>
          <ItemsListDropdown id={props.id}/>
        </Box>
        <Box>
          {props.typeMeal}
          <List items={props.items} />
        </Box>
        <Box3>
          <Button
            className="remove-btn"
            color="danger"
            size="sm"
            onClick={() => props.deleteItem(props.id)}
          >
            &times;
          </Button>
        </Box3> 
        
          
        
    </ListGroupItem>
    
  </Display>
;

Meal.propTypes = {
  // deleteItem: PropTypes.object.isRequired,
  meal: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  meal: state.meal
})
  
export default connect(mapStateToProps,{ deleteItem })(Meal);
