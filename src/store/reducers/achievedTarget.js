import db from "../../db";

function achievedTarget(state = db.achievedTarget || 0, action) {
  switch (action.type) {
    case "SET_ACHIEVED_TARGET":
      return action.achievedTarget;
    default:
      return state;
  }
}

export default achievedTarget;
