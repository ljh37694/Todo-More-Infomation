import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTodo from "./pages/AddTodo.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EditTodo from "./pages/EditTodo.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todos",
    children: [
      {
        path: "add",
        element: <AddTodo />
      },
      {
        path: "edit/:id",
        element: <EditTodo />
      }
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
