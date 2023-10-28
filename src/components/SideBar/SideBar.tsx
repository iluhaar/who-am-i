import { Link } from "react-router-dom";

import styles from "./SideBar.module.css";
import { getLocalNotes } from "../../helpers/getLocalNotes";

const Sidebar = ({ activePath }: Props) => {
  const notes: Note[] = getLocalNotes();

  const showNotesList = activePath.includes("editor") || activePath.includes("note");

  const activeNote = activePath.includes("/note/") && activePath.split("/tools/note/")[1];

  return (
    <ul className={styles.sidebar}>
      <li>
        <Link to={"/who-am-i/"} className={activePath === "/" ? styles.active : ""}>
          Home
        </Link>
      </li>
      <li>
        Tools
        <ul>
          <li>
            <Link
              to={"/who-am-i/tools/encoder"}
              className={activePath === "/who-am-i/tools/encoder" ? styles.active : ""}
            >
              Encoder
            </Link>
          </li>
          <li>
            <Link
              to={"/who-am-i/tools/editor"}
              className={activePath === "/who-am-i/tools/editor" ? styles.active : ""}
            >
              Markdown Editor
            </Link>
            {notes.length > 0 && (
              <ul className={showNotesList ? styles.notes_list : styles.hide_notes}>
                {notes?.map((note: Note) => (
                  <li key={note.id}>
                    {" "}
                    <Link
                      to={`/tools/note/${note.id}`}
                      className={showNotesList && Number(activeNote) === note.id ? styles.active : ""}
                    >
                      {note?.title?.replace(/[^a-zA-Z0-9 ]/g, "")}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Sidebar;

interface Props {
  activePath: string;
}

interface Note {
  id: number;
  title: string;
  text: string;
}
