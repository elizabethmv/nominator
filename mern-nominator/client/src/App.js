import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModal';
import Collection from './components/Collection';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            
            <ItemModal />
            <Collection />

          </Container>
          
          <h6 style={{textAlign:'center', marginTop: '2rem'}}>Welcome! to the Nominator App, Where you can add items or delete them, is up to you to decide.</h6>
        </div>
      </Provider> 
    );
  }
}

export default App;
