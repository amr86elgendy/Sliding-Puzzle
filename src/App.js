import React, { useState } from 'react';

function App() {
  const [initail, setInitial] = useState([
    1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  return (
    <div className='app'>
      <div className='board'>
        {initail.map((box, i) => (
          <div className={box === 0 ? '' : 'tale'}>{box === 0 ? '' : box}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
