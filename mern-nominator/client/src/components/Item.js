import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/itemActions';

const Item  = props =>
  <CSSTransition key={props.id} timeout={500} classNames="fade">
    <ListGroupItem>
      <Button
        className="remove-btn"
        color="danger"
        size="sm"
        onClick={() => props.deleteItem(props.id)}
      >
        &times;
      </Button>
      {props.name}
    </ListGroupItem>
  </CSSTransition>;

Item.propTypes = {
  // deleteItem: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.item
})
  
export default connect(mapStateToProps,{ deleteItem })(Item);
