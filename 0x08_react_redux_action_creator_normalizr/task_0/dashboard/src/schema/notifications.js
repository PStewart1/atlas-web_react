import * as notes from '../../../../notifications.json'

function getAllNotificationsByUser(userId) {
  const notesList = notes.default.filter((note) => note.author.id === userId);
  const notesContext = notesList.map((note) => note.context);
  return notesContext;
}

export default getAllNotificationsByUser;