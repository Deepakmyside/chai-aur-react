import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>
        Custom App ki hello :DEEPKD,<br></br>Chai pini a kishuji?
      </h1>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  
    MyApp()
 
)
