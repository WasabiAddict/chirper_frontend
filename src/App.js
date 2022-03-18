import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [print, setPrint] = useState(false);
  const form = document.querySelector("form");
  const API_URL = "http://localhost:3000/mew";
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleThoughtsChange = (e) => {
    setThoughts(e.target.value);
  };
  const handleButtonClick = (e) => {
    //setPrint(true);
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const content = formData.get("content");

    const mew = {
      name,
      content,
    };
    
  
      const div = document.createElement("div");
      div.id = 'newDiv';
      

      const header = document.createElement("h3");
      header.textContent = name;

      const contents = document.createElement("p");
      contents.textContent = content;

      const date = document.createElement('small');
      date.textContent = new Date();

      div.appendChild(header);
      div.appendChild(contents);
      div.appendChild(date);

      document.body.appendChild(div);
      setThoughts('');
      setUsername('');

  };

  return (
    <>
      <form
        className="container "
        autoComplete="on"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          name="name"
          onChange={handleUsernameChange}
        />
        <textarea
          type="text"
          placeholder="Any thoughts?"
          value={thoughts}
          name="content"
          onChange={handleThoughtsChange}
        />
        <button className="btn" onClick={handleButtonClick}>
          Chirp it
        </button>
      </form>
      
    </>
  );
};

export default App;