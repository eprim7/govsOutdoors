import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import styles from './Schedule.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');


const eventsData = [
  {
    title: 'Event 1',
    start: '2024-09-16T10:30:00',
    end: '2024-09-16T14:30:00',
    description: 'This is event 1 description.',
  },
  {
    title: 'Climbing at the bluffs',
    start: '2024-09-15T14:00:00',
    end: '2024-09-15T16:00:00',
    description: 'An exciting climbing event at the bluffs.',
  },
];

const eventContentStyle = {
  whiteSpace: 'normal',
  overflow: 'visible',
  textOverflow: 'clip',
  padding: '5px',
  maxWidth: '100px',
  boxSizing: 'border-box',
  fontWeight: 'bold',
  margin: 'auto',
};


function Schedule() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const renderEventContent = ({ event }) => (
    <div style={eventContentStyle}>
      {event.title}
    </div>
  );

  return (
    <>
      <Header />
      <h1 className={styles.h1}>Current 2024 Fall Schedule</h1>
      <div className={styles.scheduleContainer}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: '',
            center: 'title',
            right: 'prev,next',
          }}
          events={eventsData} // gets the event data
          eventClick={handleEventClick}
          eventContent={renderEventContent} // gets the title and styles it
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Event Information"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>{selectedEvent?.title}</h2>
        <p><strong>Start:</strong> {selectedEvent?.start.toString()}</p>
        <p><strong>End:</strong> {selectedEvent?.end.toString()}</p>
        <p><strong>Description:</strong> {selectedEvent?.extendedProps?.description}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default Schedule;