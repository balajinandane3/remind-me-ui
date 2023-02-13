import React from "react";


const ReminderList = () => {
  return (
    <table className="reminder-table">
      <thead>
        <tr>
          <th>Reminder Id</th>&emsp;
          <th>Reminder Description</th>&emsp;
          <th>Reminder Frequency</th>&emsp;
          <th>Reminder Type</th>&emsp;
          <th>Reminder Status</th>
        </tr>
      </thead>
      <tbody>
        {/* Add your table data here */}
      </tbody>
    </table>
  );
};

export default ReminderList;
