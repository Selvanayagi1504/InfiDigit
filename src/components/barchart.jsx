/* App.js */
import CanvasJSReact from "./assets/canvasjs.react";
import React from "react";
var Component = React.Component;

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Tickets",
        fontFamily: "verdana",
      },
      axisY: {
        title: "No.of Tickets",
        includeZero: true,
        // prefix: "€",
        // suffix: "k",
      },
      axisX: {
        title: "Days",
        includeZero: true,
        // prefix: "€",
        // suffix: "k",
      },
      toolTip: {
        shared: true,
        reversed: true,
      },
      legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        reversed: true,
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: "stackedColumn",
          name: "InProgress",
          showInLegend: true,

          // yValueFormatString: "#,###k",
          // dataPoints: [
          //   { label: "Jan", y: 14 },
          //   { label: "Feb", y: 12 },
          //   { label: "Mar", y: 14 },
          //   { label: "Apr", y: 13 },
          //   { label: "May", y: 13 },
          //   { label: "Jun", y: 13 },
          //   { label: "Jul", y: 14 },
          //   { label: "Aug", y: 14 },
          //   { label: "Sept", y: 13 },
          //   { label: "Oct", y: 14 },
          //   { label: "Nov", y: 14 },
          //   { label: "Dec", y: 14 },
          // ],
          dataPoints: [
            { label: "Sun", y: 11 },
            { label: "Mon", y: 12 },
            { label: "Tue", y: 14 },
            { label: "Wed", y: 13 },
            { label: "Thu", y: 13 },
            { label: "Fri", y: 13 },
            { label: "Sat", y: 14 },
          ],
        },
        {
          type: "stackedColumn",
          name: "Overdue",
          showInLegend: true,
          // yValueFormatString: "#,###k",
          // dataPoints: [
          //   { label: "Jan", y: 13 },
          //   { label: "Feb", y: 13 },
          //   { label: "Mar", y: 15 },
          //   { label: "Apr", y: 16 },
          //   { label: "May", y: 17 },
          //   { label: "Jun", y: 17 },
          //   { label: "Jul", y: 18 },
          //   { label: "Aug", y: 18 },
          //   { label: "Sept", y: 17 },
          //   { label: "Oct", y: 18 },
          //   { label: "Nov", y: 18 },
          //   { label: "Dec", y: 18 },
          // ],
          dataPoints: [
            { label: "Sun", y: 12 },
            { label: "Mon", y: 12 },
            { label: "Tue", y: 14 },
            { label: "Wed", y: 13 },
            { label: "Thu", y: 13 },
            { label: "Fri", y: 13 },
            { label: "Sat", y: 14 },
          ],
        },

        {
          type: "stackedColumn",
          name: "Resolved",
          showInLegend: true,
          // yValueFormatString: "#,###k",
          // dataPoints: [
          //   { label: "Jan", y: 13 },
          //   { label: "Feb", y: 13 },
          //   { label: "Mar", y: 15 },
          //   { label: "Apr", y: 15 },
          //   { label: "May", y: 15 },
          //   { label: "Jun", y: 15 },
          //   { label: "Jul", y: 16 },
          //   { label: "Aug", y: 17 },
          //   { label: "Sept", y: 17 },
          //   { label: "Oct", y: 18 },
          //   { label: "Nov", y: 19 },
          //   { label: "Dec", y: 20 },
          // ],
          dataPoints: [
            { label: "Sun", y: 14 },
            { label: "Mon", y: 12 },
            { label: "Tue", y: 14 },
            { label: "Wed", y: 13 },
            { label: "Thu", y: 13 },
            { label: "Fri", y: 13 },
            { label: "Sat", y: 14 },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default App;