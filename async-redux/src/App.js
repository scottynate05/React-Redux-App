import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/index';
import HarryPotter from './components/HarryPotter';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="headline">What Hogwarts house do you belong to?</h1>
        <HarryPotter />
      </div>
    </Provider>    
  );
}

export default App;
