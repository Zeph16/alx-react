import * as notifs from "../../dist/notifications.json"
import { normalize, schema } from "normalizr"

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalized = normalize(notifs, [notification]);

export function getAllNotificationsByUser(userId) {
  const notifs = normalized.entities.notifications;
  const messages = normalized.entities.messages;
  const filtered = [];

  for (const id in notifs) {
    if (notifs[id].author === userId) {
      filtered.push(messages[notifs[id].context]);
    }
  }
  return filtered;
}
export default function notificationsNormalizer(data) {
  const normalizedData = normalize(data, [notification]);
  return normalizedData.entities;
};
export { normalized };
