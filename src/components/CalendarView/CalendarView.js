import React from 'react';
import './CalendarView.css';

const CalendarView = ({ calendardata, appointments }) => {
  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <span>{calendardata.month}</span>
        <div className="nav-buttons">
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </header>

      <div className="calendar-grid">
        {calendardata.calendar.map((X, i) => (
          <div key={i} style={{backgroundColor: X.day == "Tues" ? "rgb(237, 244, 255)" :"" }} className="calendar-day">
            <div className="day-label">{X.day}</div>
            <div className="day-number">{X.date}</div>
            <div className="time-slots">
              {X.slots.map((y) => (
                y == X.active[0] ? <div className="time active">{y}</div> :

                  <div className="time">{y}</div>

              ))

              }

            </div>
          </div>
        ))}
      </div>
      <div className="appointments">
        {appointments.map((x) => (
          <div >
            <div className={`appointment-card ${x.Designation}`}>
              <div style={{display:"flex"}}>
                {x.Designation}{x.icon}
              </div>

              <p className="time-range">{x.time}</p>
              <p className="name">{x.Drname}</p>
            </div>
          </div>
        ))
        }
      </div>




    </div>
  );
};

export default CalendarView;
