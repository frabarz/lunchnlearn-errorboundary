import React, {useState} from "react";

/**
 * @typedef OwnProps
 * @property {string} label
 */

/** @type {React.FC<OwnProps>} */
const Dependency = function(props) {
  const [selfDestruct, setSelfDestruct] = useState(false);
  const daButton = () => setSelfDestruct(true);

  if (selfDestruct) {
    throw new Error("I made a boo-boo :(");
  }

  return <button onClick={daButton}>{props.label}</button>;
};

export default Dependency;
