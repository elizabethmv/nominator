import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModal';
import Collection from './components/Collection';
import { Container } from 'reactstrap';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './store';

const Display = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  flex: 1
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>

            <Display>
              <Box><ItemModal name='Add Item'/></Box>
              <Box><ItemModal name='Add Meal'/></Box>
            </Display>

            <Collection />

          </Container>
          
          <h6 style={{textAlign:'center', marginTop: '2rem'}}>Welcome! to the Nominator App, Where you can add items or delete them, is up to you to decide.</h6>
        </div>
      </Provider> 
    );
  }
}

export default App;
