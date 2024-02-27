import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const anotherElement = (
  <a href="https://google.com" target='_balnk'> Visit Google </a>
)

const reactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',
    target : '_blank'
  },
  "Visit to google"
)


ReactDOM.createRoot(document.getElementById('root')).render(
   <App/>
)
