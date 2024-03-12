import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    console.log("Your input value using useState:", input);
    console.log("Your input value using ref:", inputRef.current.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleButtonClick}>Click me to show input data!</button>
    </div>
  );
}

export default App;
