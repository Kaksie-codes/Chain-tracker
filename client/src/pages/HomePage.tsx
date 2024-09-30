import React from 'react';
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();

  const navigateToSignInPage = () => {
    navigate('/home');
  }

  return (
    <div className="grid place-items-center w-screen bg-custom-gradient min-h-screen">
      <div>
          <button className='w-[300px] bg-primary text-white border-none rounded-lg h-[60px]' onClick={navigateToSignInPage}>
            Signin
          </button>
          <p className='text-white mt-1'>Don't have an account? No wahala! <span className='text-secondary hover:underline hover:cursor-pointer'>SignUp</span></p>
      </div>
    </div>
  );
}

export default HomePage;
