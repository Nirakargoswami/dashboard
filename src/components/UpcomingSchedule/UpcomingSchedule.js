import React from 'react';
import './UpcomingSchedule.css';

const SimpleAppointmentCard = ({ title, time, icon }) => (
    <div className="simple-card">
        <span className="card-title">{title} {icon}</span>
        <span className="card-time">{time}</span>
    </div>
);

const UpcomingSchedule = ({ activityFeedData }) => {
    console.log(activityFeedData)
    return (
        <div className="upcoming-container">
            <p style={{marginTop:"15px",fontSize:"15px",fontWeight:"500"}}>The Upcoming Schedule </p>
            {activityFeedData.map((X) => (
                <>
                    <p className="section-title">{`On ${X.day}`}</p>

                    <div className="day-section">
                        {X.appointments.map((x) =>
                            (<SimpleAppointmentCard title={x.title} time={x.time} icon={x.icon} />)
                        )

                        }

                    </div></>
            ))

            }



        </div>
    );
};

export default UpcomingSchedule;
