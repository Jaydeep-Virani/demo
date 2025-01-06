import { useState } from "react";

const Exercies2 = () => {
  const [email, setEmail] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const validateEmail = (input) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(input) && input.trim().length > 0;
    if (isValid) {
      setValidationMessage('Valid email address');
    } else {
      setValidationMessage('Invalid email address');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    validateEmail(email); 
  };

  return (
    <div>
      <h1>Email Address Validator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Email:
          <input
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
          />
        </label>
        <button type="submit">Validate</button>
      </form>
      <p>{validationMessage}</p>
    </div>
  );
};
export default Exercies2;
