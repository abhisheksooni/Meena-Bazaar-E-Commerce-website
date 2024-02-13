import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './Routers/Root.jsx'
import Catalogue from './Pages/Catalogue.jsx'
import Home from './Pages/Home.jsx'

// redux
import { store } from './Store.js'
import {Provider} from 'react-redux'
import Cart from './Pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"catalogue",
        element:<Catalogue/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router} >
    <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
