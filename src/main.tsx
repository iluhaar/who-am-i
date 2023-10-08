import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Encoder from "./components/Encoder/Encoder.tsx";
import Layout from "./components/Layout/Layout.tsx";
import { MarkdownEditor } from "./components/Editor/MarkdownEditor.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/tools/encoder",
        element: <Encoder />,
      },
      {
        path: "/tools/editor",
        element: <MarkdownEditor />,
      },
      {
        path: "/tools/note/:id",
        element: <MarkdownEditor />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
