import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Store from './Redux/Store.jsx'
// import {Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* <Provider Store={Store}> */}
    <App />
  {/* </Provider> */}
</StrictMode>,
)