import { useState, useRef } from "react";

export default function Player() {
  const inputValue = useRef();

  const [name, setName] = useState();

  function handleNameChange() {
    setName(inputValue.current.value);
    inputValue.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={inputValue} />
        <button onClick={handleNameChange}>Set Name</button>
      </p>
    </section>
  );
}
