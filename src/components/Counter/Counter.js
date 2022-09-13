import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends React.Component {
  render() {
    return (
      <div className='Counter'>
      <span className='Counter__value'>0</span>
  
      <div className='Counter__controls'>
          <button
            type='button'
            onClick={() => {
              console.log('Кликнули в увеличить')
            }}
          >
            Увеличить на 1
          </button>
          <button
            type='button'
            onClick={() => {
              console.log('Кликнули на уменьшение')
            }}
          >
            Уменьшить на 1</button>
      </div>
    </div>
    )
  }
}

export default Counter;
