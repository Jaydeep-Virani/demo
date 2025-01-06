import { useState } from 'react';

const Exercies4 = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <h1>Character Counter</h1>
      <label>
        Enter text:
        <input
          type="text"
          value={text}
          onChange={(e)=> setText(e.target.value)}
          placeholder="Type something..."
        />
      </label>
      <p>Total number of characters: {text.length}</p>
    </div>
  );
};

export default Exercies4;
