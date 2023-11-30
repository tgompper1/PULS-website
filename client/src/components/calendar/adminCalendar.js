import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import "../twelve_column_grid.css";
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


export default function AdminEventsCalendar() {  
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({
    title: '',
    start: '',
    end: ''
  });

  // const onChange = (e) => {
  //   setEvent({ ...event, [e.target.name]: e.target.value });
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8001/api/events', event)
      .then((res) => {
        setEvent({
          title: '',
          start: '',
          end: '',
        });

        // Push to /calendar
       // navigate('/calendar');
      })
      .catch((err) => {
        console.log('Error in CreateEvent');
      });
  };

  // function handleAddEvent() {
  //   setAllEvents([...allEvents, newEvent]);
  // }

  // //Clicking an existing event allows you to remove it
  function handleDeleteEvent(pEvent) {
    const r = window.confirm("Would you like to delete this event?")
    if(r === true){
      // const prevEvents = [...allEvents]
      // const index = prevEvents.indexOf(pEvent)
      // prevEvents.splice(index, 1);
      // setAllEvents([...prevEvents]);
      axios
      .delete('http://localhost:8001/api/events', pEvent)
      .then((res) => {
        // setEvent({
        //   title: '',
        //   start: '',
        //   end: '',
        // });

        // Push to /calendar
       // navigate('/calendar');
      })
      .catch((err) => {
        console.log('Error in CreateEvent');
      });
    }
  }
  
  // const handleDeleteEvent = (e) => {
    // e.preventDefault();
    
  //   axios
  //     .delete('http://localhost:8001/api/events', event)
  //     .then((res) => {
  //       // setEvent({
  //       //   title: '',
  //       //   start: '',
  //       //   end: '',
  //       // });

  //       // Push to /calendar
  //      // navigate('/calendar');
  //     })
  //     .catch((err) => {
  //       console.log('Error in CreateEvent');
  //     });
  // };

  useEffect(()=>{
    axios
      .get('http://localhost:8001/api/events')
      .then((res) => {
        setEvents([...res.data]);
      })
      .catch((err) => {
        console.log('Error from ShowEventList');
      });
  }, []);


  return (
    <div>
      <div className='row'>
        <div className="col-12 col-s-12 centered-div">
          <h1>PULS Events Calendar</h1>
          {/* <form noValidate className="add-event-container" onSubmit={onSubmit}> */}
          <div className="add-event-calendar">
            <input  type="text"
                    placeholder="Event time and title"
                    style={{ width: "20%", margin: "10px" }}
                    name='title'
                    value={event.title}
                    onChange={(e) => setEvent({ ...event, title: e.target.value})}
            />
            <DatePicker placeholderText="Start Date" 
                        selected={event.start}
                        style={{ width: "100px", margin: "10px" }}
                        // showTimeSelect
                        // timeFormat="HH:mm"
                        // timeIntervals={30}
                        name='start'
                        // value={event.start}
                        //onChange={(e) => setEvent({ ...event, start: e.target.value})}
                        onChange={(start) => setEvent({ ...event, start })}
            />
            {/* <input type='submit' className="button-add"/> */}
          </div>
          <div>
            {/* <button className='button-add' onClick={handleAddEvent}> */}
           <button className='button-add' onClick={onSubmit}>
              Add Event
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-s-12">
          <Calendar localizer={localizer}
                    events={events}//{allEvents}
                    startAccessor="start"
                    endAccessor="start"
                    style={{ height: 500, margin: "50px" }}
                    views={['month']}
                    onSelectEvent = {event => handleDeleteEvent(event)} 
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

