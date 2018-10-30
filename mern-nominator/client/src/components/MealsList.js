import React from 'react';
import { Container, ListGroup } from 'reactstrap';
import Meal from './Meal';
import List from './List';
import ItemsListDropdown from './ItemsListDropdown';

 const MealsList = props =>
  <Container>
    <h1>{props.title}</h1>
    <ListGroup>
      { props.items.map(({ _id, typeMeal, mealItems = [{_id:_id, name:'Almost'},{_id:_id, name:'You got it'}] }) => ( 
        <div>
          <Meal key={_id} id={_id} typeMeal={typeMeal} mealItems={mealItems} />
        </div>
      ))}
    </ListGroup>
  </Container>;

 export default MealsList;