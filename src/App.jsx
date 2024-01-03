function App() {
  function displayMessage() {
    alert("Hello World!");
  }
  return <button onClick={displayMessage}>Click Me</button>;
}

export default App;
