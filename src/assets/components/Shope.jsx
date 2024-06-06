import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../State'
import { useContext } from 'react'
import noteContext from '../../context/notes/noteContext'

const Shop = () => {
    const a = useContext(noteContext)
    const dispatch = useDispatch()
    const balance = useSelector(state=>state.amount)
    const {withdrawMoney , depositMoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <div >
  <div className='container'>
  <div className='button-container'>
    <button className="glow-on-hover mb-2" onClick={() => { withdrawMoney(100) }}>LOSS</button>
    <div className='update-balance'>Update Balance {balance}</div>
    <button className='glow-on-hover mb-2' onClick={() => { depositMoney(100) }}>EARN</button>
  </div>
  <div className='balance'><h4>Your Current Balance is: {5000 + balance}</h4></div>
  <div className='p-name'><h3>My name is {a.name} and this is the example of {a.pname}</h3></div>
</div>

    </div>
  )
}

export default Shop
