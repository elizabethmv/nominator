import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';
import AddItemModal from './components/AddItemModal';
import AddMealModal from './components/AddMealModal';
import Collection from './components/Collection';
// import { Container } from 'reactstrap';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './store';
import ShowRecipesModal from './components/ShowRecipesModal';
import ShoppingListModal from './components/ShoppingListModal';

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

const Main = styled.div`
  padding: 10px;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Main>
            <Display>
              <Box><AddItemModal name='Add Item'/></Box>
              <Box><ShowRecipesModal name='Show Recipes'/></Box>
              <Box><AddMealModal name='Add Meal'/></Box>
              <Box><ShoppingListModal name='Shopping List'/></Box>
            </Display>
            <Collection />
          </Main>
          <h6 style={{textAlign:'center', marginTop: '2rem'}}>Welcome! to the Nominator App, Where you can add items or delete them, is up to you to decide.</h6>
        </div>
      </Provider> 
    );
  }
}

export default App;
