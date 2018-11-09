import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import axios from 'axios';
import Recipe from './Recipe';

class ShowRecipesModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      run: true,
      recipes: []
    };
    this.getRecipes = this.getRecipes.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  componentDidMount() {
    this.props.getItems();
    
  }

  getRecipes() {
    const { items } = this.props.item;
    if (items && items.length > 0 && this.state.run) {
      axios.post(`/api/recipes`, items )
      .then( response => {
        this.setState({ recipes: response.data.results, run: false})
      });
    }
  }

  render() {
    this.getRecipes();
    const { recipes } = this.state;
    console.log(recipes);
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          {this.props.name}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Possible Recipes</ModalHeader>
          <ModalBody>
            <ul>
              {
                recipes.map( (recipe, index) => 
                  <Recipe
                    style={{'float':'left'}}
                    key={index}
                    id={index}  
                    title={recipe.title} 
                    href={recipe.href} 
                    ingredients={recipe.ingredients}
                    thumbnail={recipe.thumbnail}
                  />
                )
              }
            </ul>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems }
)(ShowRecipesModal);