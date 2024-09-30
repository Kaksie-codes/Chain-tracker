import { useNavigate } from "react-router-dom"


const SignInPage = () => {
  const navigate = useNavigate();

  const navigateToSignInPage = () => {
    navigate('/signin');
  }
  // style={{height: 'calc(100vh - 50px)'}}
  return (
    <div className="grid place-items-center w-screen bg-custom-gradient min-h-screen" >
        <button className='w-[300px] bg-primary text-white border-none rounded-lg h-[60px] ' onClick={navigateToSignInPage}>Login</button>
    </div>
  )
}

export default SignInPage