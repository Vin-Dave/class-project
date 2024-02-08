import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import FoldersList, {
  createFolder,
} from "./components/folders-list/FoldersList";
import NotesList, { createNote } from "./components/notes-list/NotesList";
import { Note, updateMemo } from "./components/note/Note";
import { NotFound } from "./components/not-found/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return fetch("http://localhost:3000/folders");
    },
    action: createFolder,

    children: [
      {
        path: "/memos/:folderId",
        element: <NotesList />,
        loader: ({ params }) => {
          return fetch(
            `http://localhost:3000/notes?folderId=${params.folderId}`
          );
        },
        action: createNote,
        children: [
          {
            path: "memo/:memoId",
            element: <Note />,
            loader: ({ params }) => {
              return fetch(`http://localhost:3000/notes/${params.memoId}`);
            },
            action: updateMemo,
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
