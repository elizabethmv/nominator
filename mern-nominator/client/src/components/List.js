import React from 'react';
import { Container, ListGroup } from 'reactstrap';
import { TransitionGroup } from 'react-transition-group';
import Item from './Item';

 const List = props =>
  <Container>
      <h1>{props.title}</h1>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          { props.items.map(({ _id, name }) => ( 
              <Item key={_id} id={_id}  name={name} onDeleteClick={props.onDeleteClick}/>
          ))}
        </TransitionGroup>
    </ListGroup>
  </Container>;

 export default List;