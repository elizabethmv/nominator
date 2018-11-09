import React from 'react';
import { Container, ListGroup } from 'reactstrap';
import Meal from './Meal';

 const MealsList = props =>
  <Container>
    <h1>{props.title}</h1>
    <ListGroup>
      { props.meals.map( ({ _id, typeMeal, items =[]}, index) => ( 
          <Meal key={index} id={_id} typeMeal={typeMeal} items={items} />
      ))}
    </ListGroup>
  </Container>;

 export default MealsList;