import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from './pages/homepage.tsx'
import WebD from './pages/webD.tsx'
import AppD from './pages/appD.tsx'
import GraphD from './pages/graphD.tsx'
import About from './pages/about.tsx'
import Contact from './pages/contact.tsx'
import Locations from './pages/locations.tsx'
import NotFound from './components/NotFound.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Homepage/>
  },
  {
    path:'/web-design',
    element:<WebD/>
  },
  {
    path:'/app-design',
    element:<AppD/>
  },
  {
    path:'/graphic-design',
    element:<GraphD/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/locations',
    element:<Locations/>
  },
  {
    path:'*',
    element:<NotFound/>
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
