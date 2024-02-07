import RemoveIcon from "../../assets/remove.svg";
import styles from "./Note.module.css";
import { TopBar } from "../top-bar/TopBar";
import { useLoaderData } from "react-router-dom";
const NoteEditor = ({ children }) => (
  <div className={styles["note-editor"]}>{children}</div>
);

const Note = () => {
  const date = useLoaderData();

  return (
    <div className={styles.container}>
      <TopBar>
        <button className={styles.button}>
          <img className={styles.image} src={RemoveIcon} />
        </button>
      </TopBar>

      <NoteEditor>
        <input defaultValue={date.title} type="text" />
        <textarea defaultValue={date.body} />
      </NoteEditor>
    </div>
  );
};

export { Note };
