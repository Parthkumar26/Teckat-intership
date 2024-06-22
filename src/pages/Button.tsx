import React, { useState } from 'react';

const Button: React.FC = () => {
  const [data, setData] = useState(0);

  const addData = () => {
    setData(data + 1);
  };

  return (
    <>
      <button title="title" onClick={addData} className={`number-${data}`}>
        Incremented data
      </button>
      <div>Increment data: {data}</div>
      <br />
    </>
  );
};

export default Button;