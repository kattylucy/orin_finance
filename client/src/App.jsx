import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  redirect,
} from "react-router-dom";
import Login from "@/pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
    loader: () => {
      if (!localStorage.getItem("token")) {
        throw redirect("/login");
      }
    },
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
