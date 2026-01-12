import express from "express";
import fs from "fs";
const app = express();
app.use(express.json());

app.get("/get", (req, res) => {
  let data = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(data);
  let students = parsedData.students;
  res.json({ message: "Students List", data: students });
});

app.post("/add-student", (req, res) => {
  let data = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(data);
  let students = parsedData.students;
  let newId = students[students.length - 1].id + 1;
  let newStudent = {
    id: newId,
    name: req.body.name,
    course: req.body.course,
    year: 2,
  };
  console.log("newstudent", newStudent);
  students.push(newStudent);
  let stringfiedData = JSON.stringify(parsedData);
  fs.writeFileSync("./db.json", stringfiedData);
  res.json({ message: "Student Added!" });
});

app.put("/update-student/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  let data = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(data);
  let students = parsedData.students;
  let student = students.find((s) => s.id === id);
  if (!student) {
    return res.json({ message: "Student not found" });
  }
  if (name) {
    student.name = name;
  }
  let stringfiedData = JSON.stringify(parsedData);
  fs.writeFileSync("./db.json", stringfiedData);
  res.json({ message: "Student Updated!" });
});

app.delete("/delete-student/:id", (req, res) => {
  const id = Number(req.params.id);
  let data = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(data);
  let students = parsedData.students;
  let filteredStudents = students.filter((s) => s.id !== id);
  if (filteredStudents.length === students.length) {
    return res.json({ message: "Student not found" });
  }
  parsedData.students = filteredStudents;
  fs.writeFileSync("./db.json", JSON.stringify(parsedData, null, 2));
  res.json({ message: "Student Deleted!" });
});
app.listen(8040, () => {
  console.log("Server Running!");
});
