import React, { useEffect } from "react";
import {useState} from "react";
import {Dropdown} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {
  
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Chart from "react-google-charts";
import "antd/dist/antd.css";
import { Table, Breadcrumb } from "antd";
// import Highcharts from 'highcharts';
import ReactApexChart  from 'react-apexcharts'

import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import $ from 'jquery'
import { customRanges } from "./functions";
import moment from "moment";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { circularProgressClasses } from "@mui/material";

const datePickerHandler = (event, picker) => {
    let value =
      picker.startDate.format("DD-MM-YYYY") +
      " to " +
      picker.endDate.format("DD-MM-YYYY");
    $("#date-picker").val(value);
  };
  const start = moment().subtract(1, "days");
  const minDate = moment("01-01-2017", "DD-MM-YYYY");
  const maxDate = moment();

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};


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


function DashboardSales() {
  const [sidenav,setsidenav] = useState(false);
  const [sidenavsales, setsidenavsales] = useState(false);
  const [proj,setproj] = useState('Dashboard');
  const [chartdata, setchartdata] = useState([]);
  const [chartdataContentWordCount, setchartdataContentWordCount] = useState([]);
  const [healthaudit, sethealthaudit] = useState([]);
  const [healthauditcol, sethealthauditcol] = useState([]);
  const [selectionType, setSelectionType] = useState('checkbox');
  const [ticketmin, setticketmin] = useState(true);
  const [ticketstable, setticketstable] = useState([]);
  const [ticketscol, setticketscol] = useState([]);
  const [ticketstableWait, setticketstableWait] = useState([]);
  const [ticketscolWait, setticketscolWait] = useState([]);
  // const [series, setseries] = useState([])
  useEffect(()=>{
    // highChartsRender(127);
    var data = [
      ['x', 'totalClicks', 'totalImp','organicUsers', 'newUsers'],
      ["24/1/2021", 5,10,20,30],
      ["25/1/2021", 10,20,30,40],
      ["26/1/2021", 23,33,43,53],
      ["27/1/2021", 17,27,37,47],
      ["28/1/2021", 18,28,38,48],
    ]
    setchartdata(data);
    setchartdataContentWordCount(data);
    data = [
      {
        title:"",
        dataIndex:"projects",
        key:"projects"
      },
      {
        title:"Compliance %",
        dataIndex:"comp",
        key:"comp"
      },
      {
        title:"Health Score",
        dataIndex:"healthscore",
        key:"healthscore",
      },
      {
        title:"Total Score",
        dataIndex:"totalscore",
        key:"totalscore"
      }
    ]
    sethealthauditcol(data);
    data = [
      {
        projects:"Myntra Shoes",
        comp:"90%",
        healthscore:<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>,
        totalscore:<i class="fa fa-star"></i>
      },
      {
        projects:"Myntra Loafers",
        comp:"90%",
        healthscore:<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>,
        totalscore:<i class="fa fa-star"></i>
      },
      {
        projects:"Amazon Fashion",
        comp:"90%",
        healthscore:<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>,
        totalscore:<i class="fa fa-star"></i>
      }
    ]
    sethealthaudit(data);
    data = [
      {
        title:"Ticket #",
        dataIndex:"ticketno",
        key:"ticketno"
      },
      {
        title:"Status",
        dataIndex:"status",
        key:"status"
      },
      {
        title:"Priority",
        dataIndex:"priority",
        key:"priority"
      },
      {
        title:"Raised On",
        dataIndex:"raisedon",
        key:"raisedon"
      }
    ]
    setticketscol(data);
    setticketscolWait(data);
    data = [
      {
        ticketno: <Link to={{pathname: "/tickets-sales",search: `?id=1`,state: { detail: "1" },}}>1</Link>,
        status:"open",
        priority:<div class="high">High</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=2`,state: { detail: "2" },}}>2</Link>,
        status:"open",
        priority:<div class="Low">Low</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=3`,state: { detail: "3" },}}>3</Link>,
        status:"open",
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>20-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=4`,state: { detail: "4" },}}>4</Link>,
        status:<div class="OverDue">OverDue</div>,
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>18-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=5`,state: { detail: "5" },}}>5</Link>,
        status:<div class="Inprogress">Inprogress</div>,
        priority:<div class="Low">Low</div>,
        raisedon:<div>15-09-2021</div>
      }
    ]
    setticketstable(data);
    data = [
      {
        ticketno: <Link to={{pathname: "/tickets-sales",search: `?id=11`,state: { detail: "11" },}}>11</Link>,
        status:"open",
        priority:<div class="high">High</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=12`,state: { detail: "12" },}}>12</Link>,
        status:"open",
        priority:<div class="Low">Low</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=13`,state: { detail: "13" },}}>13</Link>,
        status:"open",
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>20-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=14`,state: { detail: "14" },}}>14</Link>,
        status:<div class="OverDue">OverDue</div>,
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>18-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=15`,state: { detail: "15" },}}>15</Link>,
        status:<div class="Inprogress">Inprogress</div>,
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>15-09-2021</div>
      }
    ]
    setticketstableWait(data);
  },[])
  function sidenavtoggle(){
    setsidenavsales(!sidenavsales)
  }
  // function highChartsRender(a){
  //   var value = a;
  //   var value1= 1;
  //   if(a>100){
  //     value = 100;
  //     value1 = 0;
  //   }
  //   else{
  //     value = a;
  //     value1 = 100-a;
  //   }
  //   Highcharts.chart({
  //     chart: {
  //       type: 'pie',
  //       renderTo: 'atmospheric-composition',
  //       height:'400px',
  //     },
  //     title: {
        
  //       floating: true,
  //       text: `${a}%<hr/>`,
  //       align: "center",
  //       verticalAlign: "middle",
  //       y: 80,
  //     },
  //     subtitle: {
  //       text: "Congrats Tickets <br/>is met",
  //       align: "center",
  //       verticalAlign: "middle",
  //       y: 110
  //     },
  //     plotOptions: {
  //       pie: {
  //         dataLabels: {
  //             format: '{point.name}: {point.percentage:.1f} %',
  //             enabled: false,
  //               distance: -50,
  //               style: {
  //                   fontWeight: 'bold',
  //                   color: 'white'
  //               }
  //         },
  //         startAngle: -180,
  //       endAngle: 180,
  //       center: ['50%', '75%'],
  //       size: '50%',
  //       }
  //     },
  //     series: [
  //       {
  //         name: <div>3.2 helo</div>,
  //         type: 'pie',
  //         innerSize: '60%',
  //         data: [
  //             {
  //               name: '',
  //               y: value,
  //               color: "#a5c559"
  //             },
  //             {
  //               name: '',
  //               y: value1,
  //               color: '#edf3de'
  //             },
              
  //         ]
  //       }
  //     ]
  // });
  // }
  const [chartseries, setchartseries] = useState([
		{
			name: "Sales Revenue",
			type: "column",
			data: [100,200,300,400,500]
		},
		{
			name: "Sales Target",
			type: "line",
			data: [10,20,30,40,50]
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
			"01 Jan 2001",
			"02 Jan 2001",
			"03 Jan 2001",
			"04 Jan 2001",
			"05 Jan 2001",
		],
		xaxis: {
			type: "datetime"
		},
		yaxis: [
			{
				title: {
					text: "Sales Revenue",
				}
			},
			{
				opposite: true,
				title: {
					text: "Sales Target"
				}
			}
		],
    legend: {
      show: false
    },
    colors : ['#4e73df', '#a5c559'],
	});
  const [chartseriesSecond, setchartseriesSecond] = useState([
		{
			name: "Revenue Generated",
			type: "column",
			data: [100,200,300,400,500]
		},
		{
			name: "Profitability",
			type: "line",
			data: [10,20,30,40,50]
		}
	]);
	const [chartoptionsSecond, setchartoptionsSecond] = useState({
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
			"01 Jan 2001",
			"02 Jan 2001",
			"03 Jan 2001",
			"04 Jan 2001",
			"05 Jan 2001",
		],
		xaxis: {
			type: "datetime"
		},
		yaxis: [
			{
				title: {
					text: "Revenue Generated",
				}
			},
			{
				opposite: true,
				title: {
					text: "Profitability"
				}
			}
		],
    legend: {
      show: false
    },
    colors : ['#4e73df', '#a5c559'],
	});
return (
<>
<section class="outer-wrapper dashboard-sales">
  <div class="top-nav-bar">
      <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
      <div class="nav-bar-center">&nbsp;</div>
      <div class="nav-bar-right">
        <ul class="list-unstyled nav-right-menu">
          <li>
          <Dropdown id="notification-dropdown">
                        <Dropdown.Toggle id="dropdown-basic">
                        <i class="fa fa-bell"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="">
                                <div className="notification-item">
                                    <h4>Notification 1!!</h4>
                                    <p>21 hours ago..</p>
                                </div>
                            </Dropdown.Item>
                            <hr />
                            <Dropdown.Item href="" style={{backgroundColor:"#85C1E9"}}>
                                <div className="notification-item" >
                                    <h4>Notification 2!!</h4>
                                    <p>8 hours ago..</p>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    </li>
          <li class="dropdown">
            <button onClick={()=>{setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
            <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
            <span class="profile-name">Sales</span>
          </button>
            
              
              
              <ul style={{display:sidenav?"block":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/">Log Out</a></li>
              </ul>
            
          </li>
        </ul>
      </div>
      <div class="clearfix"></div>
    </div>
  <div class="sidebar-nav-bar">
    <ul class="list-unstyled side-menu">
      <li onClick={()=>{setproj("Dashboard")}}><a href=""><i class="fa fa-columns"></i> Dashboard</a></li>
      {/* <li>
        <UncontrolledButtonDropdown className="uncontrolled">
          <DropdownToggle caret size="md" onClick={()=>{setproj("All Clients");}}>
            Clients <i class="fa fa-angle-right"  aria-hidden="true"></i>
          </DropdownToggle>
          <DropdownMenu>
            <span onClick={()=>{setproj("Myntra");}}> Myntra </span>
            <DropdownItem onClick={()=>{setproj("Myntra - Myntra Shoes");}}>Myntra Shoes</DropdownItem>
            <DropdownItem onClick={()=>{setproj("Myntra - Myntra Loafers");}}>Myntra Loafers</DropdownItem>
            <span onClick={()=>{setproj("Amazon");}}> Amazon </span>
            <DropdownItem onClick={()=>{setproj("Amazon - Fashion");}}>Fashion</DropdownItem>
            <DropdownItem onClick={()=>{setproj("Amazon - Jewellery");}}>Jewellery</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </li> */}
      <li><a href="client-list"><i class="fa fa-users"></i> Customers</a></li>
    </ul>
  </div>
  <div class="content-wrapper">
    <div class="dashboard-wrapper main-dashboard">
      <Breadcrumb>
        <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item>
        <a href="/dashboard">Dashboard</a>
        </Breadcrumb.Item>
        
    </Breadcrumb>
      
            
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">{proj}</div>
              </div>
              <div className="col-sm-7 add-new-btnw">
                <button class="outline-btn">Customize</button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-4 add-new-btnw">
              {ticketmin?<i class="fa fa-window-minimize" aria-hidden="true" onClick={()=>setticketmin(!ticketmin)}></i>:<i class="fa fa-window-maximize" aria-hidden="true" onClick={()=>setticketmin(!ticketmin)}></i>}
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-7" id={!ticketmin?"full":""}>
              <div className="add-new-btnw" style={{marginBottom:64+'px'}}>
                  <label htmlFor="" style={{marginRight:24+'px'}}>Date Range</label>
                  <DateRangePicker
                    class="date-range"
                        showDropdowns
                        ranges={customRanges}
                        timePickerIncrement={1}
                    startDate={start}
                    endDate={maxDate}
                        minDate={minDate}
                        maxDate={maxDate}
                        opens="right"
                        format="DD-MM-YYYY"
                        autoUpdateInput={true}
                        alwaysShowCalendars={true}
                        linkedCalendars={true}
                        onApply={datePickerHandler}
                        autoApply={true}
                        applyClass="btn btn-sm btn-primary btn-raised"
                        cancelClass="btn btn-sm btn-flat"
                      >
                        <input type="text" autoComplete="off" id="date-picker" placeholder="Choose date range" />
                    </DateRangePicker>
                </div>
                <div class={!ticketmin?"charts-flex":""}>
                  <div class="charts-main-box">
                    <div className="row">
                      <div className="col-lg-8 dashboard-sales-chart1">
                        <div className="dashboard-sales-chart1-inner" style={{marginLeft:7+'%'}}>
                          <span><i class="fa fa-user-plus"></i></span>
                          <span>
                            <h2>358</h2>
                            <p>New Customers | YTQ</p>
                          </span>
                        </div>
                        <div className="dashboard-sales-chart1-inner">
                          <span><i class="fa fa-signal" aria-hidden="true"></i></span>
                          <span>
                            <h2>1180 357</h2>
                            <p>Sales Revenue  | YTQ</p>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-4 dashboard-sales-chart1 progress-bar-sales">
                         {/* <CustomTextProgressbar percentage="127">
                          <div>
                            <strong>127%</strong>
                          </div>
                          <div style={{ fontSize: '0.8em' }}>Congrats Tickets <br/> are met</div>
                        </CustomTextProgressbar> */}
                        <CircularProgressbar value="127" text="127%" />
                      </div>
                    </div>
                    <ReactApexChart
                      options={chartoptions}
                      series={chartseries}
                      type="line"
                      height={350}
                     
                      class="salesRevenue"
                    />
                    <div className="dashboard-sales-legend">
                        <div>
                          <span className="circle-legend"></span>
                          <span>Sales Revenue</span>
                        </div>
                        <div>
                          <span className="line-legend"></span>
                          <span>Sales Target</span>
                        </div>
                    </div>
                    <div className="full-report"><a>View full report</a></div>
                  </div>
                  <div class="charts-main-box">
                    <div className="row">
                      <div className="col-lg-6 dashboard-sales-chart1">
                      <div className="dashboard-sales-chart1-inner" style={{marginLeft:7+'%'}}>
                          <span>
                            <p>Total Clients</p>
                            <h2>358</h2>
                          </span>
                        </div>
                        <div className="dashboard-sales-chart1-inner">
                          <span>
                            <p>Total Team 2</p>
                            <h2>100</h2>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 dashboard-sales-chart1">
                        
                      </div>
                    </div>
                    <ReactApexChart
                      options={chartoptionsSecond}
                      series={chartseriesSecond}
                      type="line"
                      height={350}
                      
                      class="salesRevenue"
                    />
                    <div className="dashboard-sales-legend">
                        <div>
                          <span className="circle-legend"></span>
                          <span>Revenue Generated</span>
                        </div>
                        <div>
                          <span className="line-legend"></span>
                          <span>Profitability</span>
                        </div>
                    </div>
                    <div className="full-report"><a>View full report</a></div>
                  </div>
                  
                </div>
                
                <div class="charts-main-box" id={!ticketmin?"wi-50":""}>
                    <Chart
                      className="line-graph"
                     
                      height={'350px'}
                      chartType="ColumnChart"
                      data={chartdataContentWordCount}
                      
                      options={{
                          hAxis: {
                          title: "",
                          },
                          vAxis: {
                          title: "",
                          },
                          legend:{position:"none"},
                          colors:['#4e73df', '#008000', '#ffc107', '#5f9ea0']
                      }}
                      rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="dashboard-sales-legend">
                        <div>
                          <span className="square-legend" style={{backgroundColor:"rgb(78, 115, 223)"}}></span>
                          <span>East</span>
                        </div>
                        <div>
                          <span className="square-legend" style={{backgroundColor:"rgb(0, 128, 0)"}}></span>
                          <span>West</span>
                        </div>
                        <div>
                          <span className="square-legend" style={{backgroundColor:"rgb(255, 193, 7)"}}></span>
                          <span>North</span>
                        </div>
                        <div>
                          <span className="square-legend" style={{backgroundColor:"rgb(95, 158, 160)"}}></span>
                          <span>South</span>
                        </div>
                    </div>
                    <div className="full-report"><a>View full report</a></div>
                  </div>
              </div>

              
              <div className="col-lg-5 tickets">
              <div className="row tickets-heading">
                  <div className="col-lg-5">
                    <h4>Tickets</h4>
                    <MyFDate />
                  </div>
                  <div className="col-lg-7 add-new-btnw">
                    <a href ="ticketslist-sales">View all Tickets</a>
                  </div>
                  
                </div>
                {
                  ticketmin
                  ?
                    <>
                      <Table id="sample" columns={ticketscol} dataSource={ticketstable} pagination={{position:[]}} />
                      <div className="audit-score-title">
                        Waiting for Approval
                      </div>
                      <Table id="sample" columns={ticketscolWait} dataSource={ticketstableWait} pagination={{position:[]}} />
                    </>
                  :
                    <>
                    </>
                }
              </div>
            </div>
    </div>
  </div>

  
</section>
</>
);
}
function MyFDate() {
  var myCurrentDate = new Date();
  var date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth() + 1) + '-' + myCurrentDate.getDate();
  let a =new Date(date)
  let longMonth = a.toLocaleString('en-us', { month: 'long' });
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  date = days[myCurrentDate.getDay()]+', ' +myCurrentDate.getDate()+' ' + longMonth;
  const newCurrentDate =date;
  return (
    <p>{newCurrentDate}</p>
  );
}

export default DashboardSales;