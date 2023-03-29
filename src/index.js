import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from "redux";
import {Provider} from "react-redux";
import  { action } from './actions/action';

const initialState = {
  count: 0,
  productCount: 0,
};

const {increment, decrement, addToCard} = action;

function reducer (state = initialState, action) {

 switch (action.type) {
  case increment :{
    return {
      ...state,
      count: state.count + 1,
      
    };
  }
  case decrement : {
    if(state.count == 0){
      alert("0dan asagi olmaz")
      return { 
        ...state,
        count: state.count
      }
    } else {
    return{
      ...state,
      count: state.count -1 
    };}
  }
  case addToCard :{
    return {
      ...state,
      productCount: state.productCount + 1 

    };
  }
  default:
    return state;
}

}


const store = createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

