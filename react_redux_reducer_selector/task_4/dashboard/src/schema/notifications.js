import * as notes from '../../dist/notifications.json'
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message });

const normalizedData = normalize(notes, [notification]);

export function getAllNotificationsByUser(userId) {
  const notesList = Object.values(normalizedData.entities.notifications).filter((note) => note.author === userId);
  const notesContext = notesList.map((note) => normalizedData.entities.messages[note.context]);
  return notesContext;
};

export { normalizedData };
