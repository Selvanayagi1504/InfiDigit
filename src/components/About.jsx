// import { DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import MultipleDatePicker from 'react-multiple-datepicker'
import ReactApexChart  from 'react-apexcharts'
import { DateRangePicker } from 'rsuite';

function About() {

  const [chartseries, setchartseries] = useState([
		{
			name: "Website Blog",
			type: "column",
			data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
		},
		{
			name: "Social Media",
			type: "line",
			data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
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
			text: "Traffic Sources"
		},
		dataLabels: {
			enabled: true,
			enabledOnSeries: [1]
		},
		labels: [
			"01 Jan 2001",
			"02 Jan 2001",
			"03 Jan 2001",
			"04 Jan 2001",
			"05 Jan 2001",
			"06 Jan 2001",
			"07 Jan 2001",
			"08 Jan 2001",
			"09 Jan 2001",
			"10 Jan 2001",
			"11 Jan 2001",
			"12 Jan 2001"
		],
		xaxis: {
			type: "datetime"
		},
		yaxis: [
			{
				title: {
					text: "Website Blog"
				}
			},
			{
				opposite: true,
				title: {
					text: "Social Media"
				}
			}
		]
	});
useEffect(()=>{
  
},[])

  return (
    <div className="about">
     
     <ReactApexChart
		options={chartoptions}
		series={chartseries}
		type="line"
		height={350}
	/>

    

<br/>

            <MultipleDatePicker 
    onSubmit={dates => console.log('selected date', dates)}
  />

  <br/>
  <DateRangePicker />

      
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
      

  

    </div>
    
  );
}

export default About;
