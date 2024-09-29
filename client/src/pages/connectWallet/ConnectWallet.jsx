import React from 'react'
import './connectWallet.css'
import {Link, useNavigate} from 'react-router-dom'


const ConnectWallet = () => {

  const navigate = useNavigate();

  function handleConnectWallet()
    {
      navigate('../login');
    }
  return (
    <div className='connect-walletet-container flex flex-center'>

    
        <button className='connect-wallet-btn' onClick={()=> {

          handleConnectWallet()
        }}>Connect Wallet</button>
      <p className='text-white'>Testing</p>
    </div>
  )
}

export default ConnectWallet