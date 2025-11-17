import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Text from "./components/Text";
import Loading from "./components/Loading";


function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "rgb(16, 15, 15)", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>stay hungry, stay foolish</h1>
        <div style={{ display: "flex", gap: "60px", padding: "60px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Button label="i'm hungry" onClick={() => alert('Button clicked!')} />
            <Text content="you're ready to apply your skills to something challenging." style={{ padding: "2vh", maxWidth: "300px" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Button label="i'm foolish" onClick={() => setLoading(true)} />
              <Text content="you'd like to learn a language or framework from the ground up." style={{ padding: "2vh", maxWidth: "300px" }} />
          </div>
        </div>
          <div style={{
            opacity: loading ? 1 : 0,
            transform: loading ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
          }}>
            <Loading />
          </div>
      </div>
    </div>
  );
}

export default App;
