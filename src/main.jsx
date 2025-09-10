import React from 'react'
import ReactDom from 'react-dom/client'
import ForcedDirectedGraph from './ForcedDirectedGraph.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < ForcedDirectedGraph/>
  </React.StrictMode>
)