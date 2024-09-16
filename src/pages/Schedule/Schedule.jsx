import Header from "../../components/Header/Header";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

function Schedule() {
  return (
    <>
      <Header />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: '',
          center: 'title',
          right: 'prev,next',
        }}
        events={[
          {
            title: 'event 1',
            start: '2024-09-16T10:30:00',
            end: '2024-09-16T2:30',
          },
          {
            title: 'climbing at the bluffs',
            start: '2024-09-15T14:00:00',
            end: '2024-09-15T16:00:00',
          },
        ]}
      />
      <h1>Schedule page</h1>
    </>
  );
}

export default Schedule;


/*
import Header from "../../components/Header/Header";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'; // Import the timeGrid plugin

function Trips() {
  return (
    <>
      <Header />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]} // Include timeGridPlugin
        initialView="dayGridMonth" // Default view is the month view
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay', // Add timeGridWeek and timeGridDay views
        }}
        events={[
          {
            title: 'event 1',
            start: '2024-09-16T10:30:00', // Event with time
          },
          {
            title: 'climbing at the bluffs',
            start: '2024-09-15T14:00:00', // Another event with time
            end: '2024-09-15T16:00:00', 
          },
        ]}
      />
      <h1>Trips page</h1>
    </>
  );
}

export default Trips;

*/