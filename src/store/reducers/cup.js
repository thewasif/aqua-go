import db from "../../db";
function cup(state = db.cup || 250, action) {
  switch (action.type) {
    case "CHANGE":
      return action.cup;
    default:
      return state;
  }
}

export default cup;
