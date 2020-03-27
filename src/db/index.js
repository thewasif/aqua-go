import * as moment from "moment";

let db = JSON.parse(localStorage.getItem("APP_DATA")) || {
  cup: 250,
  dailyTarget: 3000,
  achievedTarget: 0
};
let date = localStorage.getItem("DATE") || null;
if (date)
  if (date != new Date().getDate()) {
    let dailyStats = db;
    let weeklyStats = JSON.parse(localStorage.getItem("WEEKLY_STATS")) || [];
    dailyStats.day = moment().format("dddd");
    if (weeklyStats.length > 6) {
      weeklyStats.shift();
    }
    weeklyStats.push(dailyStats);
    localStorage.setItem("WEEKLY_STATS", JSON.stringify(weeklyStats));
  }
// eslint-disable-next-line eqeqeq
db.achievedTarget = date == new Date().getDate() ? db.achievedTarget : 0;

export default db;
