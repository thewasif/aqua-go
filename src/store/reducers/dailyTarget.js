import db from "../../db";

function dailyTarget(state = db.dailyTarget || 3000, action) {
  switch (action.type) {
    case "SET_DAILY_TARGET":
      return action.dailyTarget;
    default:
      return state;
  }
}

export default dailyTarget;
