import React from "react";
const CouresForm = (props) => {
  return (
    <form onSubmit={props.addCourse}>
      <input type="text" value={props.current} onChange={props.updateCourse} />
      <button type="submit">Add Skill</button>
    </form>
  );
};
export default CouresForm;
