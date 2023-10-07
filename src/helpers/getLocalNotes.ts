export const getLocalNotes = () => {
  return localStorage.getItem("markdown-notes") !== null
    ? JSON.parse(localStorage.getItem("markdown-notes") ?? "")
    : [];
};
