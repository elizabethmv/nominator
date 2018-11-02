import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addMeal } from '../actions/mealActions';

class AddMealModal extends Component {

  constructor(props){
    super(props);
    this.state = {
      modal: false,
      typeMeal: '',
      items: [],
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newMeal = {
      typeMeal: this.state.typeMeal,
    };

    // Add item via addItem action
    console.log('newMeal', newMeal);
    this.props.addMeal(newMeal);

    // Close modal
    this.toggle();
  };

  render() {
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
          <ModalHeader toggle={this.toggle}>Plan a meal</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="meal">Meal</Label>
                <Input
                  type="text"
                  name="typeMeal"
                  id="meal"
                  placeholder="Name your meal, Lunch?"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  {this.props.name}
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meal: state.meal
});

export default connect(
  mapStateToProps,
  { addMeal }
)(AddMealModal);