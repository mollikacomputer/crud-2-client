import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx';
import AllCoffee from './Components/AllCoffee/AllCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/addcoffee',
    element:<AddCoffee/>,
  },{
    path:'/coffee',
    element:<AllCoffee/>,
    loader:()=> fetch('http://localhost:5000/coffee'),
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
