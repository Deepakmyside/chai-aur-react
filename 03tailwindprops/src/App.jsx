import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {

  const [count, setCount] = useState(0)


   let myObj ={
    username: "Deep",
    EXPERIENCE: 2
   }

   let myArr=[1,2,3,19]

  return (
    <>
    <h1 className="bg-pink-700 text-yellow-400
    p-4 rounded-xl">Tailwind test</h1>

      <Card username="Deepak sharma"  btnText="Click me "/>
       <Card username="Kashish garg" btnText="Click me"/>
    </>
  )
}

export default App
