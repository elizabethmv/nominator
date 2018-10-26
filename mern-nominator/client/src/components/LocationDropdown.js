import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToFridge } from '../actions/fridgeActions';
import { addItemToPantry } from '../actions/pantryActions';


class LocationDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount(){
    console.log(this.props.id)
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret></DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            onClick={()=>{ this.props.addItemToFridge({ _id: "5bcce9e5ce791b117ec60f7c" }, { _id: this.props.id }) }}
          >Fridge</DropdownItem>
          <DropdownItem
            onClick={()=>{ this.props.addItemToPantry({ _id: "5bccf0ada1ab9f13df595d27" }, { _id: this.props.id }) }}
          >Pantry</DropdownItem>
          <DropdownItem>Meal</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

LocationDropdown.propTypes = {
  // deleteItem: PropTypes.object.isRequired,
  fridge: PropTypes.object.isRequired,
  pantry: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  fridge: state.fridge,
  pantry: state.pantry
})
  
export default connect(mapStateToProps,{ 
  addItemToFridge, 
  addItemToPantry 
})(LocationDropdown);