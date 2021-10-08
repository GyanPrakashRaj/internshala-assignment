import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import {
  Header,
  ItemCreator,
  ItemsList,
  Filter,
} from './components';
import './app.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <div>
            <ItemCreator />
            <Filter />
            <ItemsList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
