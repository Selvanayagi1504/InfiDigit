import moment from "moment";

function getLastWorkingDay() {
  let diff = 0;
  let day = moment().day();
  if (day === 0 || day === 1) {
    diff = day + 2;
  }
  return moment().subtract(diff, "days");
}
const customRanges = {
  "Last Working Day": [getLastWorkingDay(), getLastWorkingDay()],
  "Current Week": [moment().startOf("week"), moment()],
  "Past Week": [
    moment()
      .startOf("week")
      .subtract(7, "days"),
    moment()
      .startOf("week")
      .subtract(1, "days")
  ],
  "This Month": [moment().startOf("month"), moment().endOf("month")]
};

export { getLastWorkingDay, customRanges };
