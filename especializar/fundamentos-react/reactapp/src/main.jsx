import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'

import { Home } from './pages/Home'
// import { FetchApi } from './pages/FetchApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    {/* <FetchApi /> */}
  </React.StrictMode>
)
