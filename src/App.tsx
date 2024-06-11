import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data , setData] = useState<number>(0);
  const [numberData, setNumberData] =  useState<number>(0)

  const numberArray = [1,2,3,4,5,6,7,8];

  const student = [
    { name : "Parth kumar", age : 20, status : "active"},
    { name : "Aman singh", age : 24, status : "active"},
    { name : "shivam raj", age : 21, status : "inactive"}
  ]

  useEffect(() => {
    addData();
  },[numberData]);

  const addData = () => {
    const oldData = data;
    const newData = oldData + 1;
    setData(newData);
    console.log(newData);
  };

  const decrementData = () =>{
    setNumberData(numberData - 1);
  }


  return (
    <>
      <button title='title' onClick={addData} className={`number ${data}`}>
        click here to Increment Data
      </button>
      <div>Increment data:{data}</div>
    <br />

    <button onClick={decrementData} className={`decrement ${numberData}`}> click here to Decrement Data</button>
    <div>decrement data: {numberData}</div>


    {numberArray.map((item, i) => {
      return <div key={i}>{item}</div>;
    })}

    {student.map((item, i) => {
      return (
        <div key={i}>
          {item.status === "active" &&(
          <><div> Name: {item.name}</div>
          <div> Age: {item.age}</div>
          <br /></>
          )
          }          
        </div>
      );
    }
    )}


{/* else statement */}
<hr />
{student.map((item, i) => {
      return (
        <div key={i}>
          {item.status === "active" ? (
          <><div> Name: {item.name}</div>
          <div> Age: {item.age}</div>
          <br />
          </>
          ) : ( 
            <>
            <div>
              inactive 
            </div>
            <br />
            </>
          )
          }          
        </div>
      );
    }
    )}

    </>
  )
}

export default App
