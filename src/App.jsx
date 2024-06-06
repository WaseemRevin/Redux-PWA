import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './assets/components/Shope';
import { useSelector } from 'react-redux';
import NoteState from './context/notes/NoteState';



function App() {
  const amount = useSelector(state=>state.amount)
  return (
    <>
    <NoteState>
   <div className='container'>
    <div>
      {/* css-in-js libraries */}
      <style jsx>{`
        h1{
          color: #FF851B;
        }
      `}</style>
      <h1>Redux State Management</h1>
    </div>
    <div><h3>Deposit/Withdraw Money</h3></div>
    <div><h4>Your Balance: {5000}</h4></div>
   </div>

  
     <Shop/>
     </NoteState>
    </>
  )
}

export default App
