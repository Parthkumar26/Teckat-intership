import logo from './logo.svg';
import './App.css';

function App() {
  // let str = "Hello"
  // let str2 = "World"

  // if(str === "Hello" && str2 === "World")
  //   {
  //     console.log("Hello World")
  //   }
   const student = {
    student_name: "Aman", 
    
   }
   const student2 = {
    student_name: "Aman",
   }

   const fun = () =>{
    let a = 1;
    let b = 2;
    let c = a+b;
    console.log(c)
   }
  if(student.student_name === student2.student_name)
{
  fun()
}  
else{
  console.log("Hello world")
}

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
