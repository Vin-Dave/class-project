import RemoveIcon from "../../assets/remove.svg";
import styles from "./Note.module.css";
import { TopBar } from "../top-bar/TopBar";
import { Form, useLoaderData, useSubmit } from "react-router-dom";
const NoteEditor = ({ children }) => (
  <div className={styles["note-editor"]}>{children}</div>
);

export async function updateMemo({ request, params }) {
  const data = await request.formData();
  const title = data.get("title");
  const body = data.get("body");
  return fetch(`http://localhost:3000/notes/${params.memoId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  });
}
const Note = () => {
  const submit = useSubmit();
  const date = useLoaderData();

  return (
    <div className={styles.container}>
      <TopBar>
        <button className={styles.button}>
          <img className={styles.image} src={RemoveIcon} />
        </button>
      </TopBar>
      <Form
        method="PATCH"
        onChange={(event) => {
          submit(event.currentTarget);
        }}
      >
        <NoteEditor key={date.id}>
          <input defaultValue={date.title} type="text" name="title" />
          <textarea defaultValue={date.body} name="body" />
        </NoteEditor>
      </Form>
    </div>
  );
};

export { Note };
