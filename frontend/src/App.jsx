import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home, LogIn, RootLayout, SignUp } from "./componentsRoute";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { user } = useAuthContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: user ? <Home /> : <Navigate to="/login" />,
        },
        {
          path: "signup",
          element: !user ? <SignUp /> : <Navigate to="/" />,
        },
        {
          path: "login",
          element: !user ? <LogIn /> : <Navigate to="/" />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>Error</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
