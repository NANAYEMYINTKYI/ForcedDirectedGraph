import React from 'react'
import ReactDom from 'react-dom/client'
// @ts-ignore
import App from './App.jsx'
// import TestApp from './TestApp.jsx'
import App_Tag from './App_Tag.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < App/>
  </React.StrictMode>
)