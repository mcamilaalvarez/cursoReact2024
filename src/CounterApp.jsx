/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes, { func } from 'prop-types'
import {useState} from 'react';

export const CounterApp = ({ value }) => {

  const [counter, setCounter ] = useState(value)

  const handleAdd = () => {
      setCounter(counter + 1)
    // setCounter((c)=> c+1)
  }
  const handleSubtract = () => {
    setCounter(counter - 1)
  }
  const handleReset = () => {
    setCounter(value)
   }

    return (
        <>
          <h1> Counter App</h1>
          <h2>{ counter }</h2>

          <button onClick={ handleAdd}>
            +1
          </button>
          <button onClick={ handleSubtract}>
            -1
          </button>
          <button onClick={ handleReset}>
            Reset
          </button>
        </>
    )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired

}

