import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { gameReducer } from './store/gameSlice.js'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    game: gameReducer
  }
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </StrictMode>,
)
