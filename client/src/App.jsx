import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";
// import Budgets from './pages/Budgets';
// import Transactions from './pages/Transactions';
// import Cards from './pages/Cards';
// import Visualization from './pages/Visualization';
// import Settings from './pages/Settings';
import Login from "./pages/login";
import Register from "./pages/register";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: () => {
          if (!localStorage.getItem("accessToken")) {
            return redirect("/login");
          }
          return null;
        },
      },
      // { path: 'budgets', element: <Budgets /> },
      // { path: 'transactions', element: <Transactions /> },
      // { path: 'cards', element: <Cards /> },
      // { path: 'visualization', element: <Visualization /> },
      // { path: 'settings', element: <Settings /> },
    ],
  },
  { path: "register", element: <Register /> },
  { path: "login", element: <Login /> },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
