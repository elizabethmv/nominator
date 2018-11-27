import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { getShoppingListsItems } from '../actions/recipeActions';
import Item from './Item';

class ShoppingListModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      run: true,
      items: []
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  componentDidMount() {
    this.props.getShoppingListsItems();
  }

  render() {
    const { items } = this.props.recipe;
    // console.log('items',items.length);
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          {this.props.name}
        </Button>
        <Modal style={{'flexD irection':'row'}} isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Shopping List</ModalHeader>
              {
                items.map( (item, index) => 
                  <ModalBody key={index} style={{'border':'1px black solid'}}>
                    {
                      <Item
                          style={{  'flex': '1 1 1' }}
                          key={index}
                          id={index}
                          name={item.name}
                        />
                    }
                    
                  </ModalBody>
                )
              }
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

export default connect(
  mapStateToProps,
  { getShoppingListsItems }
)(ShoppingListModal);