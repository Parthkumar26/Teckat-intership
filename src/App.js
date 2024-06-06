import logo from './logo.svg';
import './App.css';

function App() {
  // let str = "Hello"
  // let str2 = "World"

  // if(str === "Hello" && str2 === "World")
  //   {
  //     console.log("Hello World")
  //   }
//    const student = {
//     student_name: "Aman", 
    
//    }
//    const student2 = {
//     student_name: "Aman",
//    }

//    const fun = () =>{
//     let a = 1;
//     let b = 2;
//     let c = a+b;
//     console.log(c)
//    }
//   if(student.student_name === student2.student_name)
// {
//   fun()
// }  
// else{
//   console.log("Hello world")
// }

// const arr1 = [1,3,2,5,4]
// for (let item of arr1){
//   console.log(item)
// }
// const student = [
//   {student_Name: "Parth kumar", Age : 20},
//   {student_Name: "Aman kumar", Age : 32},
//   {student_Name: "Shivam singh", Age : 25}
// ]

// for (let item of student){
//   console.log(item.student_Name)
// };

// student.forEach((person) => {
//   console.log(person.Age)
// });
// const student = {
//   Name : "Parth kumar",
//   Age : 20,
//   Address : "Bihar"
// }
// for (const key in student){
//   if (student.hasOwnProperty(key)){
//     console.log(`${key}: ${student[key]}`);
//   }
// }

// const employees = [
//   {employee_Name: "Parth kumar", Age : 20, income : 50000},
//   {employee_Name: "Aman kumar", Age : 32, income : 60000}, 
//   {employee_Name: "Shivam singh", Age : 25, income : 70000}
// ]
// const mappedEmployees = employees.map((item) => {
//   return {
//     ...item,
//     income: item.income + 10000,
//   };
// }, [])

// console.log("employees", employees);
// console.log("mappedEmployee", mappedEmployees);

// const employees = [
//   {employee_Name: "Parth kumar", Age : 20, income : 50000},
//   {employee_Name: "Aman kumar", Age : 32, income : 60000}, 
//   {employee_Name: "Shivam singh", Age : 25, income : 70000},
//   {employee_Name: "Rohan", Age : 20, income : 50000},
//   {employee_Name: "Aman Thakur", Age : 32, income : 60000}, 
//   {employee_Name: "Lalan kumar", Age : 25, income : 70000},
//   {employee_Name: "Aryan singh", Age : 20, income : 50000},
//   {employee_Name: "Priya kumari", Age : 32, income : 60000}, 
//   {employee_Name: "Ashutosh kumar", Age : 25, income : 70000},
// ]
// const filterEmployee = employees.filter((item) => {
//   return item.Age === 20;
// });
// console.log("Filter_Employee" ,filterEmployee)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
