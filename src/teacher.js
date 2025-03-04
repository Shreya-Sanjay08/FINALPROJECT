import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, "attendance"));
      const studentList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentList);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Classes</th>
            <th>Attended Classes</th>
            <th>Last Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.total_classes}</td>
              <td>{student.attended_classes}</td>
              <td>{student.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherDashboard;
