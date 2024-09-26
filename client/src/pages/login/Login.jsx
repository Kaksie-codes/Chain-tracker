import React from 'react'

import './login.css'
import UserWallet from '../../components/userWallet/UserWallet'
const Login = () => {
  return (
   <div className="login-container">
      <UserWallet/>

      <form className='flex flex-center login-form flex-column'>
        <h2 className='flex flex-center'>Enter Your InvestorID</h2>
        <p className='flex flex-center'>Securely manage your courses and attendance records</p>
        <div className='login-form-glass-background'>

        </div>
      </form>
   </div>
  )
}

export default Login