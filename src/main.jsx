import React from 'react'
import ReactDom from 'react-dom/client'
// @ts-ignore
import App from './App.jsx'
// import App from './components/ForcedGraph/Testgraph'
// import App from './utils/Timer.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < App/>
  </React.StrictMode>
)