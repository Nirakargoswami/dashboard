
import {FaSyringe, FaHeart, FaEye,FaTooth, FaBone } from 'react-icons/fa';

export const appointments = [
    {
        "icon": <FaTooth style={{fontSize:"18px",color:"white",marginLeft:"auto"}} className=" tooth" />,
        "Designation" : "dentist",
        "time" : "09:00-11:00",
        "Drname" : "Dr. Cameron Williamson"
    },
    {
         "icon":<FaBone style={{fontSize:"18px",color:"rgb(255, 224, 189)",marginLeft:"auto"}} className="tooth" />,
        "Designation" : "physio",
        "time" : "11:00-12:00",
        "Drname" : "Dr. Kevin Djones"
    }
]


export const activityFeedData = [
    {
      day: "Thursday",
      appointments: [
        {
          title: "Health checkup complete",
          time: "11:00 AM",
          icon: <FaSyringe style={{color:"rgb(33, 165, 222)"}} />
        },
        {
          title: "Ophthalmologist",
          time: "14:00 PM",
          icon: <FaEye style={{color:"rgb(259, 24, 24)"}} />
        }
      ]
    },
    {
      day: "Saturday",
      appointments: [
        {
          title: "Cardiologist",
          time: "12:00 AM",
          icon: <FaHeart style={{color:"rgb(191, 170, 142)"}}/>
        },
        {
            title: "Neurologist",
            time: "16:00 AM",
            icon: <FaHeart style={{color:"rgb(191, 170, 142)"}}/>
          },
       
      ]
    },
  
  ]
  
  export default {activityFeedData,appointments}


