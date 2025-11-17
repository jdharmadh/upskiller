import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Text from "./components/Text";
import Loading from "./components/Loading";
import Idea from "./components/Idea";



function App() {
  const [loading, setLoading] = useState(false);
  const [idea, setIdea] = useState(null);
  const [generated, setGenerated] = useState(false);
  const [buttonsHidden, setButtonsHidden] = useState(false);
  function handleShowIdea() {
    // set loading to true, wait 0.5 seconds, then set loading to false and show idea
      setGenerated(true);
      setTimeout(() => {
        setButtonsHidden(true);
          setLoading(true);
        }, 300);
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setIdea("Here is your new idea!");
        }, 200);
      }, 1000);
  }

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "rgb(16, 15, 15)", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>stay hungry, stay foolish</h1>
        <div style={{ display: buttonsHidden ? "none" : "flex", gap: "60px", padding: "60px", opacity: generated ? 0 : 1, transition: "all 0.3s ease-in-out", visibility: generated ? "hidden" : "visible"}}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Button label="i'm hungry" onClick={() => handleShowIdea()} />
            <Text content="you're ready to apply your skills to something challenging." style={{ padding: "2vh", maxWidth: "300px" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Button label="i'm foolish" onClick={() => handleShowIdea()} />
              <Text content="you'd like to learn a language or framework from the ground up." style={{ padding: "2vh", maxWidth: "300px" }} />
          </div>
        </div>
          <div style={{
            opacity: loading ? 1 : 0,
            transform: loading ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
            paddingTop: '20px'
          }}>
            <Loading />
          </div>
          <div style={{
            opacity: idea !== null ? 1 : 0,
            transform: idea !== null ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
          }}>
            <Idea />
          </div>
      </div>
    </div>
  );
}

export default App;
