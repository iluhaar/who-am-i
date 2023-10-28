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
    path: "/who-am-i/",
    element: <Layout />,
    children: [
      {
        path: "/who-am-i/",
        element: <App />,
      },
      {
        path: "/who-am-i/tools/encoder",
        element: <Encoder />,
      },
      {
        path: "/who-am-i/tools/editor",
        element: <MarkdownEditor />,
      },
      {
        path: "/who-am-i/tools/note/:id",
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
