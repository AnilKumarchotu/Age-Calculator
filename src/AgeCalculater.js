import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function AgeCalculator() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

    const handleSubmit = () => {
        const totalMilliseconds = endDate - startDate;

        // Convert milliseconds to total days
        const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));

        // Calculate years
        const years = Math.floor(totalDays / 365);

        // Calculate remaining days after extracting years
        const remainingDaysAfterYears = totalDays % 365;

        // Calculate months (approximating each month as 30 days)
        const months = Math.floor(remainingDaysAfterYears / 30);

        // Calculate remaining days after extracting months
        const days = remainingDaysAfterYears % 30;

        setAge({ years, months, days });
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="p-5 border bg-light small-curved-box rounded">
                        <div className="col-12" style={{ display: "flex", flexDirection: "row" }}>
                            <div className="col-6">
                                <label style={{ color: "black" }}>Date of Birth:</label>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div className="col-6">
                                <label style={{ color: "black" }}>End Date:</label>
                                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                            </div>
                        </div>
                        <div className="mt-3">
                            <h5 style={{ color: "Red" }}>Your Age is:</h5>
                            <label style={{ color: '#333' }}>{`${age.years} years, ${age.months} months, and ${age.days} days.`}</label>
                        </div>
                        <div className="button-group mt-3">
                            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                            <button className="btn btn-secondary" onClick={() => {
                                setStartDate(new Date());
                                setEndDate(new Date());
                                setAge({years: 0, months: 0, days: 0 })
                            }}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgeCalculator;
