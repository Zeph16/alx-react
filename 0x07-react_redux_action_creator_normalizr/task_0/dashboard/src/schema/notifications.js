import * as notifs from "../../../../notifications.json"

export default function getAllNotificationsByUser(userId) {
  return notifs.filter((notif) => notif.author.id === userId).map((notif) => notif.context);
}
