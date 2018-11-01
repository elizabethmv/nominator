import React from 'react';
import { Container, ListGroup } from 'reactstrap';
import Item from './Item';

 const List = props =>
  <Container>
    <h1>{props.title}</h1>
    <ListGroup>
      { props.items.map(({ _id, name}) => ( 
        <Item key={_id} id={_id}  name={name}/>
      ))}
    </ListGroup>
  </Container>;

 export default List;