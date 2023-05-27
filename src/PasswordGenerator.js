import React, { useState } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const length = 10; // Change the desired password length here
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    setPassword(result);
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <button onClick={generatePassword}>Generate Password</button>
      {password && <p className="password">{password}</p>}
    </div>
  );
};

export default PasswordGenerator;
