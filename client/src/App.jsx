import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import './App.css'
import RootLayout from './Layouts/RootLayout'
import ConnectWallet from './pages/connectWallet/ConnectWallet'
import Login from './pages/login/Login'

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
    <Route index element={<ConnectWallet/>} />
    <Route path='login' element={<Login/>} />
  </Route>
)

const router = createBrowserRouter(routes);

function App() {
  

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
