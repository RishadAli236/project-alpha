import CombatCore from "./CombatCore";
import Draggable from "react-draggable";

const Combat = ({ enemy }) => {
  return (
    <Draggable bounds="html" handle="#combat-header">
      <div style={{ position: "absolute", top: "0", right: "0" }}>
        <CombatCore enemy={enemy} />
      </div>
    </Draggable>
  );
};

export default Combat;
