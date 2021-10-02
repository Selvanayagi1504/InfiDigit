import React, { useEffect } from "react";
import {useState} from "react";
// import {Dropdown} from 'react-bootstrap'
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
import Highcharts from 'highcharts';
import ReactApexChart  from 'react-apexcharts'
import {useLocation} from "react-router-dom";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import $ from 'jquery'
import { customRanges } from "./functions";
import moment from "moment";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { NotificationSEO } from "./index";
import 'rsuite/dist/rsuite.css';
import Dashboard from '@rsuite/icons/legacy/Dashboard';
import { Sidenav, Nav, Dropdown } from 'rsuite';
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
function DashboardCustomers() {
  const [sidenav,setsidenav] = useState(false);
  const [sidenavsales, setsidenavsales] = useState(false);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get('id');
  const [proj,setproj] = useState(id);
return (
<>
<section class="outer-wrapper dashboard-sales">
  <div class="top-nav-bar">
      <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
      <div class="nav-bar-center">&nbsp;</div>
      <div class="nav-bar-right">
        <ul class="list-unstyled nav-right-menu">
          <li>
         <NotificationSEO/>


                    </li>
          <li class="dropdown">
            <button onClick={()=>{setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
            <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
            <span class="profile-name">Customers</span>
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
    <Sidenav class="sidenav-seo">
            <Sidenav.Body>
            <Nav>
                <Dropdown eventKey="1" title="Dasboard" >
                  
                      
                      <Dropdown.Menu eventKey="1-1" title="Myntra">
                        <Dropdown.Item eventKey="1-1-1" onClick={()=>{setproj("Myntra - Myntra Shoes");}}>Myntra Shoes</Dropdown.Item>
                        <Dropdown.Item eventKey="1-1-2" onClick={()=>{setproj("Myntra - Myntra Loafers");}}>Myntra Loafers</Dropdown.Item>
                      </Dropdown.Menu>
                      
                </Dropdown>
                
                <Nav.Item eventKey="3">
                  <i class="fa fa-ticket"></i>Tickets
                </Nav.Item>
            </Nav>
            </Sidenav.Body>
        </Sidenav>
    </ul>
  </div>
  <div class="content-wrapper">
    <div class="dashboard-wrapper dashboard-customers">
        <Breadcrumb>
            <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
            <Breadcrumb.Item>
            <a href="/dashboard-customers">Dashboard</a>
            </Breadcrumb.Item>
            
        </Breadcrumb>
        
            
        <div class="row common-mb-24">
            <div class="col-sm-5 pad-lzero">
            <div class="main-title">{proj}</div>
            </div>
            <div className="col-sm-7 add-new-btnw common-mb-24">
            <button class="outline-btn">Export</button>
            </div>
        </div>
        <div className="row common-mb-24">
            <div className="col-sm-5 pad-lzero">

            </div>
            <div className="col-sm-7 add-new-btnw common-mb-24 customers-right">
                <span className="heading-customers">
                    <span>Project Health</span>
                    <span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>
                </span>
                <span className="heading-customers">
                    <span>Audit Progress</span>
                    <span class="progress-bar-customer">
                        <CircularProgressbar value="50" text="50%" />
                    </span>
                </span>
            </div>
        </div>
        <div className="row common-mt-24">
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            DA / PA Checker
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    height={'300px'}
                    
                    chartType="LineChart"
                    data={[
                        ['x','https://www.infidigit.com/', 'https://www.ezrankings.org/'],
                        ['Aug 1',28,31],
                        ['Aug 4',30,28],
                        ['Aug 8',31,20],
                        ['Aug 10',32,40],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        ticks:[0,10,20,30,40]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-da">View Full report</a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Page Speed
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    
                    height={'300px'}
                    chartType="LineChart"
                    data={[
                        ['x', 'https://www.infidigit.com/'],
                        ["Aug 1", 25],
                        ["Aug 2", 36],
                        ["Aug 3", 47],
                        ["Aug 4", 32],
                        ["Aug 5", 20],
                        ["Aug 6", 57],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        minValue:0,
                        maxValue:40
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-page-speed">View Full report</a>
                    </div>
                </div>
            </div>
        </div>


        <div className="row common-mt-24">
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Rank Tracking
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    height={'300px'}
                    
                    chartType="LineChart"
                    data={[
                        ['x', 'Shoes'],
                        ["Aug 1", 1],
                        ["Aug 8", 3],
                        ["Aug 16", 5],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        ticks:[0,25,50,75,100]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-da">View Full report</a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Site Uptime Monitor
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    
                    height={'300px'}
                    chartType="LineChart"
                    data={[
                        ['x', 'https://www.metroshoes.net/'],
                        ["Aug 1", 1],
                        ["Aug 2", 0],
                        ["Aug 3", 1],
                        ["Aug 4", 1],
                        ["Aug 5", 0],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "Pass/ Fail",
                        },
                        vAxis: {
                        title: "https://www.metroshoes.net/",
                        ticks:[0.00,0.25,0.50,0.75,1.00]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-page-speed">View Full report</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row common-mt-24">
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            ROI Calculator
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    height={'300px'}
                    
                    chartType="LineChart"
                    data={[
                        ['x', 'ROI'],
                        ["Aug 1", 25],
                        ["Aug 2", 36],
                        ["Aug 3", 47],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "",
                        },
                        vAxis: {
                        title: "",
                        ticks:[0,10,20,30,40,50],
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-da">View Full report</a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div class="charts-main-box">
                    <div className="row">
                        <div className="col-md-6 chart-title">
                            Google Trends
                        </div>
                        <div className="col-md-6 add-new-btnw">
                            <input type="checkbox" />
                        </div>
                    </div>
                    <Chart
                    className="line-graph"
                    
                    height={'300px'}
                    chartType="LineChart"
                    data={[
                        ['x', 'shoes'],
                        ["Aug 1", 25],
                        ["Aug 2", 36],
                        ["Aug 3", 47],
                        ["Aug 4", 32],
                        ["Aug 5", 20],
                        ["Aug 6", 57],
                    ]}
                    
                    options={{
                        hAxis: {
                        title: "Keyword",
                        },
                        vAxis: {
                        title: "Shoes",
                        ticks:[0,20,40,60]
                        },
                        legend:{position:"bottom"},
                        
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="add-new-btnw">
                        <a href="module-expand-page-speed">View Full report</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

  
</section>
</>
);
}

export default DashboardCustomers;