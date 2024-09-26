import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//Importing all the pages for the App
import ConnectWallet from './pages/ConnectWallet/ConnectWallet'
import Login from './pages/Login/Login'
import './App.css'
import RootLayout from "./Layouts/RootLayout";

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
     <Route index element ={<ConnectWallet/>}/>
     <Route path="login" element ={<Login/>}/>
  </Route>
);

const router = createBrowserRouter(routes);
function App() {
  

  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  )
}

export default App
