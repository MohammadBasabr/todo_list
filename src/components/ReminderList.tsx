import React from "react";
import Reminder from "../models/reminder";
// ******************** //
interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}
//
function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-inside list-disc">
      {items.map((item) => (
        <li className="list-item ring-2 p-4 ring-blue-500" key={item.id}>
          {item.title}
          <button
            onClick={() => onRemoveReminder(item.id)}
            className="bg-white text-orange-700 ring-2 ring-orange-700 rounded-full p-2 mx-4"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
