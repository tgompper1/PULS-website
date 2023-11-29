import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
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
    return (
        <div>
            <div className="row">
                <div className="col-12 col-s-12 centered-div">
                    <h1>PULS Events Calendar</h1>
                    <Calendar localizer={localizer}
                                events={dummyEvents}
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
