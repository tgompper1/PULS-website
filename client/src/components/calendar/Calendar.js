import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../twelve_column_grid.css"
import AutoplayCarousel from "../imageCarousel/autoplayCarousel";

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
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        axios
          .get('http://localhost:8001/api/posts')
          .then((res) => {
            setEvents(res.data);
          })
          .catch((err) => {
            console.log('Error from ShowEventList');
          });
      }, []);

    //   const eventList = 
    //   events.length === 0
    //     ? ''
    //     : events.map((event, k) => <PostCard post={post} key={k} />);
    
    return (
        <div>
            <div className="row">
                <div className="col-12 col-s-12 centered-div">
                    <h1>PULS Events Calendar</h1>
                    <Calendar localizer={localizer}
                                events={events}//{dummyEvents}
                                startAccessor="start"
                                endAccessor="start"
                                style={{ height: 500, margin: "50px" }}
                                views={['month']}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-s-12"> 
                    <AutoplayCarousel></AutoplayCarousel>
                </div>
            </div>
            <div className="row"><div className="col-12 col-s-12"> </div></div>
        </div>
    );
}
