//   ////MINI LOYIXAAAA///

// import { useState } from 'react';

// interface Student {
//     readonly id: number;
//     name: string;
//     age: number;
//     course: string;
// }

// interface StudentCardProps {
//     student: Student;
//     onDelete: (id: number) => void;
// }

// function StudentCard({ student, onDelete }: StudentCardProps) {
//     return (
//         <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "5px" }}>
//             <h2>{student.name}</h2>
//             <p>Age: {student.age}</p>
//             <p>Course: {student.course}</p>
//             <button onClick={() => onDelete(student.id)}>Delete</button>
//         </div>
//     );
// }

// export default function App() {
//     const [students, setStudents] = useState<Student[]>([]);

//     function addStudent(student: Student): void {
//         setStudents((prev) => [...prev, student]);
//     }

//     function deleteStudent(id: number): void {
//         setStudents((prev) => prev.filter((student) => student.id !== id));
//     }

//     return (
//         <div style={{ padding: "20px" }}>
//             <h1>Student Management</h1>

//             <button 
//                 onClick={() => addStudent({ id: Date.now(), name: "Ali", age: 20, course: "Frontend" })}
//                 style={{ marginBottom: "20px", padding: "8px 12px" }}
//             >
//                 Talaba qo'shish
//             </button>

//             {students.length === 0 ? (
//                 <p>Hozircha talabalar yo'q</p>
//             ) : (
//                 students.map((student) => (
//                     <StudentCard 
//                         key={student.id} 
//                         student={student} 
//                         onDelete={deleteStudent} 
//                     />
//                 ))
//             )}
//         </div>
//     );
// }






//     ///1///
// interface UserCardProps {
//     name: string;
//     age: number;
//     email: string;
//     isActive: boolean;
// }

// function UserCard({ name, age, email, isActive }: UserCardProps) {
//     return (
//         <div>
//             <h2>Name: {name}</h2>
//             <p>Age: {age}</p>
//             <p>Email: {email}</p>
//             <p>Status: {isActive ? "Active" : "Inactive"}</p>
//         </div>
//     );
// }


// <UserCard name="Ali" age={20} email="ali@gmail.com" isActive={true} />


// //2//
// import { useState } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState<number>(0);

//   return (
//     <div>
//       <h2>Soni: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }


// //3//
// interface Todo {
//     id: number;
//     title: string;
//     completed: boolean;
// }

// const [todos, setTodos] = useState<Todo[]>([]);
// function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setTodos(event.target.value);
//     <input value={To} onChange={handleChange} />
// }

// function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
//     console.log("Clicked");
// }

// <button onClick={handleClick}>Click</button>
// function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     console.log("Form submitted");
// }

// <form onSubmit={handleSubmit}>
//     <input />
//     <button type="submit">Submit</button>
// </form>



// import React, { useState } from "react";
// // import StudentCard from "./components/StudentCard";

// export interface Student {

//   readonly id: number;
//   name: string;
//   age: number;
//   course: string;

// }
// const App = () => {
//   const [students, setStudents] = useState<Student[] | undefined>([]);
//   const [name, setName] = useState<string>("");
//   const [age, setAge] = useState<number | undefined>();
//   const [course, setCourse] = useState<string>("");


//   function deleteStudent(id: string):void {
//     setStudents((prev) => prev?.filter((student) => student.id !== id));
//   }
//   const handeleSubmit = (e: React.FocusEvent<>)
// }
export default function App() {
  
}