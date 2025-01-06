// 3. create a react
// that will toggle the visibility of the text written by user
// take one text box and one button, button will toggle the visibility 
// when text is visible, button text should be "Hide" text
// when text is hidden, button text should be "Show" text
import { useState } from 'react';

const Exercies3 = () => {
  const [text, setText] = useState('');
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <h1>Text Visibility Toggle</h1>
      <label>
        Enter Text:
        <input
          type="text"
          value={text}
          onChange={(e)=> setText(e.target.value)}
          placeholder="Type something..."
        />
      </label>
      <br />
      <button onClick={toggleVisibility}>
        {isTextVisible ? 'Hide Text' : 'Show Text'}
      </button>
      <br />
      {isTextVisible && <p>{text}</p>}
    </div>
  );
};
export default Exercies3;