import React from 'react';
import Header from './components/header/header';
import Sidebar from './components/slider/slidebar';
import DashboardMainContent from "./components/DashboardMainContent/AnatomySection"
import DashboardScheduleContent from "./components/DashboardScheduleContent/DashboardScheduleContent"
import "./App.css";



const App = () => (
    <div className="app">
        <div className='app-div' >
            <div style={{ borderRadius: "20px" }}>
                <Header />
            </div>

            <div className="main-content">
                <div>
                    <Sidebar />
                </div>
                <div>
                    <DashboardMainContent/>

                </div>
                <div>
                    <DashboardScheduleContent/>

                </div>


            </div>
        </div>

    </div>
);

export default App