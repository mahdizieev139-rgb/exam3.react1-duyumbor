import { Suspense } from 'react'
import './App.css'
import Layout from './Layout'
import {Home, Blog, Contact, NotFound, ApartmentsInDubai, CategoryNumberOne, Info} from "./router/router"
import { createBrowserRouter, RouterProvider } from 'react-router'

export default function App() {

    const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Suspense fallback={<p>Loading...</p>}>
            <Home />,
          </Suspense>
        },
        {
          path: "/blog",
          element: <Suspense fallback={<p>Loading...</p>}>
            <Blog />,
          </Suspense>
        },
        {
          path: "/contact",
          element: <Suspense fallback={<p>Loading...</p>}>
            <Contact  />,
          </Suspense>
        },
        {
          path: "/apartmentsInDubai",
          element: <Suspense fallback={<p>Loading...</p>}>
            <ApartmentsInDubai  />,
          </Suspense>
        },
        {
          path: "/categoryNumberOne",
          element: <Suspense fallback={<p>Loading...</p>}>
            <CategoryNumberOne  />,
          </Suspense>
        },
        {
          path: "/info/:id",
          element: <Suspense fallback={<p>Loading...</p>}>
            <Info  />,
          </Suspense>
        },
      ]
    },
    {
      path: "*",
      element: <Suspense fallback={<p>Loading...</p>}>
        <NotFound />,
      </Suspense>
    }
  ])
   
  return (
    <RouterProvider router={router} />
  )
}
