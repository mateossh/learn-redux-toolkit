import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, decremented, reseted } from './features/counter/counterSlice'

import logo from './logo.svg'
import './App.css'

function App() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrementClick = () => {
    dispatch(incremented());
  }

  const handleDecrementClick = () => {
    dispatch(decremented());
  }

  const handleResetClick = () => {
    dispatch(reseted());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          count is: {count}
        </p>
        <div>
          <button type="button" onClick={handleDecrementClick}>-</button>
          <button type="button" onClick={handleResetClick}>reset</button>
          <button type="button" onClick={handleIncrementClick}>+</button>
        </div>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
