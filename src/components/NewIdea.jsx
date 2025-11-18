import { useState } from "react";
import "./newidea.css";
import Button from "./Button";
import Text from "./Text";
import Loading from "./Loading";
import Idea from "./Idea";
import skills from "./skills.json";

function NewIdea() {
  const [loading, setLoading] = useState(false);
  const [idea, setIdea] = useState(null);
  const [generated, setGenerated] = useState(false);
  const [buttonsHidden, setButtonsHidden] = useState(false);

  function handleShowIdea(hungry_or_foolish) {
    // set loading to true, wait 0.5 seconds, then set loading to false and show idea
      setGenerated(true);
      setTimeout(() => {
        setButtonsHidden(true);
          setLoading(true);
        }, 300);
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setIdea(generateNewIdea(hungry_or_foolish));
        }, 200);
      }, 1000);
  }

  function generateNewIdea( hungry_or_foolish) {
    console.log("skills", skills);
    console.log("skills[hungry]", skills["hungry"]);
    const skill_choice = skills[hungry_or_foolish];
    console.log("Skill choice", skill_choice);
    const randomIndex = Math.floor(Math.random() * skill_choice.length);
    const chosen = skill_choice[randomIndex];
    localStorage.setItem("idea", JSON.stringify(chosen));
    return chosen;
  }


  return (
    <>
        <div style={{ display: buttonsHidden ? "none" : "flex", gap: "1rem", padding: "1rem", paddingTop:"2rem", opacity: generated ? 0 : 1, transition: "all 0.3s ease-in-out", visibility: generated ? "hidden" : "visible"}}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Button label="i'm hungry" onClick={() => handleShowIdea("hungry")} />
            <Text content="you're ready to apply your skills to something challenging." style={{ padding: "2vh", maxWidth: "300px" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Button label="i'm foolish" onClick={() => handleShowIdea("foolish")} />
              <Text content="you'd like to learn a language or framework from the ground up." style={{ padding: "2vh", maxWidth: "300px" }} />
          </div>
        </div>
          <div style={{
            opacity: loading ? 1 : 0,
            transition: 'all 0.3s ease-in-out, padding-top 0.5s ease-out',
            paddingTop: loading ? '60px' : '0px',
            height: loading ? 'auto' : '0px'
          }}>
            <Loading />
          </div>
          <div style={{
            opacity: idea !== null ? 1 : 0,
            transform: idea !== null ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
          }}>
            <Idea build={idea !== null ? idea.build : ""} deploy={idea !== null ? idea.deploy : ""} />
          </div>
    </>
  );
}

export default NewIdea;