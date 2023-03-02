import * as notifs from "../../../../notifications.json"
import { normalize, schema } from "normalizr"

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notification", {
  author: user,
  context: message,
});

const normalized = normalize(notifs, [notification]);

export function getAllNotificationsByUser(userId) {
  return notifs.filter((notif) => notif.author.id === userId).map((notif) => notif.context);
}

export { normalized };
