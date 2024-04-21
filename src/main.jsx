import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx';
import AllCoffee from './Components/AllCoffee/AllCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx';
import NewCoffee from './Components/AllCoffee/NewCoffee.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/addcoffee',
    element:<AddCoffee/>,
  },
  {
    path:'/coffee',
    element:<AllCoffee/>,
    loader:()=> fetch('http://localhost:5000/coffee'),
  },
  {
    path:'/updatecoffee/:id',
    element:<UpdateCoffee/>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'/newcoffee',
    element:<NewCoffee/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
