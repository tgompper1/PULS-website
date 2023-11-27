import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";

const locales = {
    "en-CA": require("date-fns/locale/en-CA"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const dummyEvents = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023, 10, 0),
        end: new Date(2023, 10, 0),
    },
    {
        title: "Vacation",
        start: new Date(2023, 10, 7),
        end: new Date(2023, 10, 10),
    },
    {
        title: "Conference",
        start: new Date(2023, 10, 20),
        end: new Date(2023, 10, 23),
    },
];

export default function EventsCalendar() {
  const[buttonPopup, setButtonPopup] = useState(false);
   const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(dummyEvents);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div>
      <h1>PULS Events Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input  type="text"
                placeholder="Event time and title"
                style={{ width: "20%", marginRight: "10px" }}
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value})}
        />
        <DatePicker placeholderText="Start Date" 
                    style={{ marginRight: "10px" }}
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <button className='button-add' stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="start" style={{ height: 500, margin: "50px" }} />
    </div>
  );
}

