import React from 'react';
import { Container, ListGroup } from 'reactstrap';
import Meal from './Meal';
import List from './List';
import ItemsListDropdown from './ItemsListDropdown';

 const MealsList = props =>
  <Container>
    <h1>{props.title}</h1>
    <ListGroup>
      { props.meals.map( ({ _id, typeMeal, items = [{_id:_id, name:'Almost'},{_id:_id, name:'You got it'}] }, index) => ( 
          <Meal key={index} id={_id} typeMeal={typeMeal} items={items} />
      ))}
    </ListGroup>
  </Container>;

 export default MealsList;