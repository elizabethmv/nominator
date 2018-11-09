import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  getMeals,
  addItemToMeal,
} from '../actions/mealActions';


class MealsListDropdown extends React.Component {
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

  async onClickDropdown(e) {
    switch (e.target.name) {
      case 'meal':
        this.props.addItemToMeal( { _id: e.target.id  }, { _id: this.props.id, meal: this.props.parentMeal })
        break;
      default:
        break;
    }
  }

  render() {
    const { meals } = this.props.meal
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret></DropdownToggle>
        <DropdownMenu>
          {
            meals.map( ({ _id , typeMeal},index) => 
            <div key={index} style={{"float":"left"}}>
              <DropdownItem
              
              key={_id}
              id ={_id}
              name='meal'
              onClick={this.onClickDropdown}
              >
                {typeMeal}
              </DropdownItem>
            </div> 
          )}
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

MealsListDropdown.propTypes = {
  meal: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  meal: state.meal,
})
  
export default connect(mapStateToProps,{ 
  getMeals,
  addItemToMeal,
})(MealsListDropdown);