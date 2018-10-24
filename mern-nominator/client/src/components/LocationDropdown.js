import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToFridge } from '../actions/fridgeActions';

class LocationDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
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
            onClick={()=>{this.props.addItemToFridge({ _id: "5bcce9e5ce791b117ec60f7c" }, { _id: this.props.id })}}
          >Fridge</DropdownItem>
          <DropdownItem>Pantry</DropdownItem>
          <DropdownItem>Meal</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

LocationDropdown.propTypes = {
  // deleteItem: PropTypes.object.isRequired,
  fridge: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  fridge: state.fridge
})
  
export default connect(mapStateToProps,{ addItemToFridge })(LocationDropdown);