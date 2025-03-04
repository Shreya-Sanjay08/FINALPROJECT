import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const StudentDashboard = ({ studentName }) => {
  const [attendance, setAttendance] = useState(null);

  useEffect(() => {
    const fetchAttendance = async () => {
      const docRef = doc(db, "attendance", studentName);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setAttendance(docSnap.data());
      } else {
        console.log("No attendance data found");
      }
    };

    fetchAttendance();
  }, [studentName]);

  return (
    <div>
      <h1>Student Dashboard</h1>
      {attendance ? (
        <div>
          <p>Name: {studentName}</p>
          <p>Total Classes: {attendance.total_classes}</p>
          <p>Attended: {attendance.attended_classes}</p>
          <p>Last Scanned: {attendance.timestamp}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StudentDashboard;
