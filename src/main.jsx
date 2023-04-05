import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout';
import Home from './pages/Home';
import Books from './pages/Books';
import Details from './pages/Details';
import About from './pages/About';
import _404NotFound from './pages/_404NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <Books></Books>,
        loader: async ()=> fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: "/details/:bId",
        element: <Details></Details>,
        loader: async({params})=> fetch(`https://api.itbook.store/1.0/books/${params.bId}`)
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "*",
        element: <_404NotFound></_404NotFound>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
