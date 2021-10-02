// import { DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import ReactApexChart  from 'react-apexcharts'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function About() {
  const [chartseries, setchartseries] = useState([
		{
			name: "Changes Requested",
			type: "column",
			data: [14,14,33,64,66]
		},
    {
			name: "Implemented",
			type: "column",
			data: [,,4,12,13]
		},
    {
			name: "WIP",
			type: "column",
			data: [,,11,11,10]
		},
    {
			name: "On Hold",
			type: "column",
			data: [,,4,4,4]
		},
    {
			name: "Pending",
			type: "column",
			data: [,,14,37,39]
		},
		{
			name: "Implementation %",
			type: "line",
			data: [,,12,19,20]
		}
	]);
	const [chartoptions, setchartoptions] = useState({
		chart: {
			height: 350,
			type: "line"
		},
		stroke: {
			width: [0, 4]
		},
		title: {
			text: ""
		},
		dataLabels: {
			enabled: true,
			enabledOnSeries: [1]
		},
		labels: [
      "Jan21",
			"Feb 21",
      "Mar 21",
      "Apr 21",
      "May 21",
      "Jun 21"
		],
		xaxis: {
			type: "datetime"
		},
		yaxis: [
			{
				title: {
					text: "",
				},
        min:0,
        max:100,
        range:10
			},
			{
				opposite: true,
				title: {
					text: ""
				}
			}
		],
    legend: {
      show: false
    },
    colors : ['#4264BE','#8BA3D9','#A4A4A5','#FFC531','#913203','#50BC63']
	});
  const [text, settext] = useState('');
  const percentage = 127;
  return (
    <div className="about">
      <CustomTextProgressbar percentage={percentage}>
      <div>
        <strong>You're at {percentage}</strong>
      </div>
      <div style={{ fontSize: '0.8em' }}>and that's fine</div>
    </CustomTextProgressbar>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <ReactApexChart
        options={chartoptions}
        series={chartseries}
        type="line"
        height={350}
        width={600}
        class="salesRevenue"
      />
      <div className="dashboard-sales-legend">
          <div>
            <span className="square-legend" style={{backgroundColor:"#4264BE"}}></span>
            <span>Changes Requested</span>
          </div>
          <div>
            <span className="square-legend" style={{backgroundColor:"#8BA3D9"}}></span>
            <span>Implemented</span>
          </div>
          <div>
            <span className="square-legend" style={{backgroundColor:"#A4A4A5"}}></span>
            <span>WIP</span>
          </div>
          <div>
            <span className="square-legend" style={{backgroundColor:"#FFC531"}}></span>
            <span>On H0ld</span>
          </div>
          <div>
            <span className="square-legend" style={{backgroundColor:"#913203"}}></span>
            <span>Pending</span>
          </div>
          <div>
            <span className="line-legend" style={{backgroundColor:"#50BC63"}}></span>
            <span>Implementation %</span>
          </div>
      </div>
    </div>

    
  );
}
function CustomTextProgressbar(props) {
  const { children, ...otherProps } = props;

  return (
    <div
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
      }}
    >
      <div style={{ position: 'absolute' }}>
        <CircularProgressbar {...otherProps} />
      </div>
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default About;
