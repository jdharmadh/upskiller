import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "rgb(16, 15, 15)", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>stay hungry, stay foolish</h1>
        <Button label="hungry" onClick={() => alert('Button clicked!')} />
      </div>
    </div>
  );
}

export default App;
