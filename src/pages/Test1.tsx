import React, { useEffect, useState } from 'react'

const Test1 = () => {

    const[val, setVal] = useState(0);
    useEffect(()=>{
        console.log("Value Changed!");
        
    }, [val]);

    return (
    <>
    <h1>
        Click On Button-
    </h1>
    <button onClick={() => {
        setVal(val + 1);
    }}>Click Here : {val}</button>
    </>
  )
}
export default Test1