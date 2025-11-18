import NewIdea from "./components/NewIdea";
import Idea from "./components/Idea";
function InnerApp() {
  const storedIdea = localStorage.getItem("idea");
  if (storedIdea) {
    const idea = JSON.parse(storedIdea);
    return <Idea build={idea.build} deploy={idea.deploy} />;
  }
  return <NewIdea />;
}

function App() {
  return (
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "rgb(16, 15, 15)", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1>stay hungry, stay foolish</h1>
            <InnerApp />;
      </div>
    </div>
  );
}

export default App;
