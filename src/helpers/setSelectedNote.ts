export const setSelectedNote = (id: number) => {
  return localStorage.getItem(`markdown-note-${id}`);
};
