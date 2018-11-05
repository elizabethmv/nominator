import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { addItemToMeal } from '../actions/mealActions';

class ItemsListDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.onClickDropdown = this.onClickDropdown.bind(this);
  }

  componentDidMount(){
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onClickDropdown(e) {
    switch (e.target.name) {
      case 'item':
        this.props.addItemToMeal( {_id: this.props.id}, { _id: e.target.id } )
        break;
      default:
        break;
    }
  }

  render() {
    const { items } = this.props.item
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret></DropdownToggle>
        <DropdownMenu>
          {
            items.map( ({ _id , name},index) => 
            <div key={_id} style={{"float":"left"}}>
              <DropdownItem
              
              key={_id}
              id ={_id}
              name='item'
              onClick={this.onClickDropdown}
              >
                {name}
              </DropdownItem>
              {/* <LocationDropdown  id={_id} /> */}
            </div> 
          )}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

ItemsListDropdown.propTypes = {
  item: PropTypes.object.isRequired,
  meal: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.item,
  meal: state.meal,
})
  
export default connect(mapStateToProps,{ 
  getItems,
  addItemToMeal,
})(ItemsListDropdown);