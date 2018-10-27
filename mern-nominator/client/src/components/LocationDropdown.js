import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToFridge } from '../actions/fridgeActions';
import { addItemToPantry, getPantryItems, deleteItemFromPantry } from '../actions/pantryActions';

class LocationDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.onClickDropdownItem = this.onClickDropdownItem.bind(this);
  }

  componentDidMount(){

  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  async onClickDropdownItem(e) {
    switch (e.target.name) {
      case 'fridge':
        this.props.addItemToFridge({ _id: "5bcce9e5ce791b117ec60f7c" }, { _id: this.props.id })
        break;
      case 'pantry':
        this.props.addItemToPantry({ _id: "5bccf0ada1ab9f13df595d27" }, { _id: this.props.id });
        break;
      case 'meal':
        // this.props.addItemToMeal({ _id: this.props.meal.id }, { _id: this.props.id });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret></DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            name='fridge'
            onClick={this.onClickDropdownItem}
          >Fridge</DropdownItem>
          <DropdownItem
            name='pantry'
            onClick={this.onClickDropdownItem}
          >Pantry</DropdownItem>
          <DropdownItem
            name='meal'
          >Meal</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

LocationDropdown.propTypes = {
  fridge: PropTypes.object.isRequired,
  pantry: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  fridge: state.fridge,
  pantry: state.pantry
})
  
export default connect(mapStateToProps,{ 
  addItemToFridge, 
  addItemToPantry,
  getPantryItems,
  deleteItemFromPantry
})(LocationDropdown);