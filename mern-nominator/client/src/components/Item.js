import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/itemActions';
import LocationDropdown from './LocationDropdown';
import styled from 'styled-components';

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



const Item  = props =>
  <Display>
    <CSSTransition key={props.id} timeout={500} classNames="fade"> 
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
          <LocationDropdown id={props.id}/>
        </Box3>
      </ListGroupItem>
    </CSSTransition>
  </Display>
;

Item.propTypes = {
  // deleteItem: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.item
})
  
export default connect(mapStateToProps,{ deleteItem })(Item);
