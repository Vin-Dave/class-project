import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import FoldersList from "./components/folders-list/FoldersList";
import NotesList from "./components/notes-list/NotesList";
import { Note } from "./components/note/Note";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return fetch("http://localhost:3000/folders");
    },
    children: [
      {
        path: "/memos/:folderId",
        element: <NotesList />,
        loader: ({ params }) => {
          return fetch(
            `http://localhost:3000/notes?folderId=${params.folderId}`
          );
        },
        children: [
          {
            path: "/memos/:folderId/memo/:memoId",
            element: <Note />,
            loader: ({ params }) => {
              return fetch(`http://localhost:3000/notes/${params.memoId}`);
            },
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
