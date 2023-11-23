import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    children:[
      {
        path:'/',
        element: <Home />
      }
    ]
  },
  {
    path:'*',
    element: <h1>Error</h1>
  }
])

function App() {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
