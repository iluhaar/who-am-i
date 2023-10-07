import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";

import styles from "./MarkdownEditor.module.css";

export const MarkdownEditor = () => {
  const defaultMarkdown = "## Hello, Markdown!\n\n**This** is a _basic_ Markdown editor.";
  const [markdown, setMarkdown] = useState("");

  const notes: Note[] =
    localStorage.getItem("markdown-notes") !== null ? JSON.parse(localStorage.getItem("markdown-notes") ?? "") : [];

  const handleMarkdownChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const selectedNote = notes.find((note) => note.id === Number(id));
      if (selectedNote) {
        setMarkdown(selectedNote?.text);
      }
    } else {
      setMarkdown("");
    }
  }, [id]);

  const handleSave = () => {
    localStorage.setItem(
      `markdown-notes`,
      JSON.stringify([
        ...notes,
        {
          id: notes.length + 1,
          title: markdown.split("\n").at(0),
          text: markdown,
        },
      ])
    );
  };

  const handleReset = () => {
    setMarkdown("");
  };

  return (
    <div className={styles.markdown__wrapper}>
      <h1>Markdown Editor</h1>
      <div className={styles.editor}>
        <textarea value={markdown} placeholder={defaultMarkdown} onChange={handleMarkdownChange} />
        <div className={styles.preview}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

interface Note {
  id: number;
  title: string;
  text: string;
}
