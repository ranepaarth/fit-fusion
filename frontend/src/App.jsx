import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, LogIn, RootLayout, SignUp } from "./componentsRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path:'signup',
        element:<SignUp />
      },
      {
        path:'login',
        element:<LogIn />
      }
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
