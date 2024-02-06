import * as notes from '../../../../notifications.json'
import { schema, normalize } from 'normalizr';

export function getAllNotificationsByUser(userId) {
  const notesList = notes.default.filter((note) => note.author.id === userId);
  const notesContext = notesList.map((note) => note.context);
  return notesContext;
};

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message });

const normalizedData = normalize(notes.default, [notification]);

export { normalizedData };
