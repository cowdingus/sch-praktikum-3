import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

import App from './App'
import Shop from './pages/Shop';
import EventList from './pages/EventList';
import Index from './pages/Index'

import 'remixicon/fonts/remixicon.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route path="shop" element={<Shop />} />
          <Route path="event" element={<EventList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
