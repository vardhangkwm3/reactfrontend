import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [students, setStudents] = useState([])

  useEffect(()=>{
    async function getAllStud(){
      try {
        const students = await axios.get("http://127.0.0.1:8000/api/student/")
        console.log(students.data)
        setStudents(students.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllStud()
  }, [])

  return (
    <div className="App">
      <h1>Connectd React JS to Django</h1>
      {
        students.map((student, i)=>{
          return(
            <h2 key={i}>{student.studname} || {student.email}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
