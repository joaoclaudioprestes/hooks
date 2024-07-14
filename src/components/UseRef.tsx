import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const previusName = useRef(name);

  useEffect(() => {
    previusName.current = name;
  }, [name]);

  return (
    <div>
      <h1>UseRef</h1>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello! My name is {name}</p>
      <p>Renders: {renderCount.current}</p>
      <p>And my name was {previusName.current}</p>

      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default UseRef;
