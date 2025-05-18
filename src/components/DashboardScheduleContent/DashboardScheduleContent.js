import React from "react";
import CalendarView from "../CalendarView/CalendarView"
import UpcomSchedule from "../UpcomingSchedule/UpcomingSchedule"
import "./DashboardScheduleContent.css"
import calendardata from "../../data/calendar"
import {appointments,activityFeedData} from "../../data/appointments"
const DashboardScheduleContent = () => {
    return (
        <>
            <div className="Scedual-box">
                <CalendarView appointments={appointments} calendardata={calendardata} />
                <UpcomSchedule activityFeedData={activityFeedData}/>

            </div>

        </>
    )
}
export default DashboardScheduleContent;