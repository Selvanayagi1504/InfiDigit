
import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col,Breadcrumb } from "antd";
import {Dropdown} from 'react-bootstrap'
import Highcharts from 'highcharts';
import {ModuleExpandTickets} from './index';
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import $ from 'jquery'
import { customRanges } from "./functions";
import moment from "moment";
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

const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };


function ModuleExpandSEOVolatality() {
    
    const [sidenav,setsidenav] = useState(false);
    const [categorylist, setcategorylist] = useState([]);
    const [show,setshow]= useState(false);
    const [enhanceactive, setenhanceactive] = useState("All categories");
    const [enhancerating, setenhancerating] = useState("3.2");
    const [chartdata, setchartdata] = useState([]);
    const [chartdataCompetitor, setchartdatacomp] = useState([]);
    const [series, setseries] = useState([{
        name: <div>3.2 helo</div>,
        type: 'pie',
        innerSize: '60%',
        data: [
            {
              name: '',
              y: 65,
              color: '#dede19'
            },
            {
              name: '',
              y: 35,
              color: '#ffa500'
            },
            
        ]
      }])
    useEffect(()=>{
       
        highChartsRender("3.2");
        var data = [
            {category:"All categories", rating:"3.2"},
            {category:"Arts & Entertainment", rating:"4.9"},
            {category:"Auto & Vehicles", rating:"2.0"},
            {category:"Beauty & Fitness", rating:"2.9"},
            {category:"Books & Literature", rating:"5.9"},
            {category:"Business & Industrial", rating:"3.6"},
            {category:"Computer & Electronics", rating:"3.1"},
            {category:"Finance", rating:"3.0"},
            {category:"Food & Drink", rating:"3.6"},
            {category:"Games", rating:"9.0"},
        ]
        setcategorylist(data);
        data=[
            ['x', 'values'],
            ["Sept 1", 0],
            ["Sept 2", 10],
            ["Sept 3", 23],
            ["Sept 4", 17],
            ["Sept 5", 18],
        ];
        setchartdata(data);
        data=[
            ['x', 'Values', 'Category'],
            [0, 0, 0],
            [1, 10, 5],
            [2, 23, 15],
            [3, 17, 9],
            [4, 18, 10],
            [5, 9, 5],
            [6, 11, 3],
            [7, 27, 19],
          ]
        setchartdatacomp(data)
    },[])
    
    function handleModal(){
        setshow(!show);
    }
    function chooseenhancelist(a,b){
        setenhanceactive(a);
        setenhancerating(b);
        highChartsRender(b);
    }
    function highChartsRender(a){
        Highcharts.chart({
          chart: {
            type: 'pie',
            renderTo: 'atmospheric-composition',
            height:'400px',
          },
          title: {
            verticalAlign: 'middle',
            floating: true,
            text: `${a}`,
            align: 'center',
            y: 60,
            style:{
                fontSize:"33px"
            }
          },
          plotOptions: {
            pie: {
              dataLabels: {
                  format: '{point.name}: {point.percentage:.1f} %',
                  enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
              },
              startAngle: -120,
            endAngle: 120,
            center: ['50%', '75%'],
            size: '80%',
            }
          },
          series: series
      });
      }
    function generatereportseo(){

    }
    function generateChart(a){
        var data=[
            ['x', 'Values', a],
            [0, 0, 0],
            [1, 10, 5],
            [2, 23, 15],
            [3, 17, 9],
            [4, 18, 10],
            [5, 9, 5],
            [6, 11, 3],
            [7, 27, 19],
          ]
          console.log(data)
        setchartdatacomp(data)
    }
    return (
        <>
            <section class="outer-wrapper seo-main">
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
                            <button onClick={()=>{console.log("hiii");setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
                                <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
                                <span class="profile-name">M.Subash</span>
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

            <div class="content-wrapper">
                <div class="dashboard-wrapper">
                    <div class="sidebar-nav-bar">
                        <ul class="list-unstyled side-menu">
                        <li><a href="module-expand-da">DA/ PA Checker</a></li>
                            <li><a href="module-expand-google-trends">Google Trends</a></li>
                            <li><a href="module-expand-page-speed">Page Speed and Core Web Vitals</a></li>
                            <li><a href="module-expand-click-share">Click Share</a></li>
                            <li><a href="module-expand-rank-tracking">Rank Tracking</a></li>
                            <li><a href="module-expand-site-uptime">Site Uptime Monitor</a></li>
                            <li><a href="module-expand-gsc">GSC Data Extractor</a></li>
                            <li><a href="module-expand-organic-research">Organic Research module</a></li>
                            <li><a href="module-expand-roi">ROI Calculator (Paid vs. Organic)</a></li>
                            <li><a href="content-word-count">Content Word Count on a Page</a></li>
                            <li><a href="module-expand-backlinks">BackLinks (SEMRush)</a></li>
                            <li><a href="module-expand-keyword-research">Keyword Research(Permission Pending from Google)</a></li>
                            <li><a href="module-expand-seo-volatality">SEO Volatality</a></li>
                            <li><a href="module-expand-google-analytics">Google Analytics</a></li>
                            <li><a href="module-expand-seo-audit">SEO Audit</a></li>
                        </ul>
                    </div>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/sub-projects">Projects</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/module-expand-seo-volatality">SEO Volatality</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Tabs>
                        <TabList>
                            <Tab>SEO Volatality</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>


                        <TabPanel>
                        <div className="row">
                                <div className="col-md-2 enhance-sidebar seo-left">
                                    <ul className="list-enhace-headings">
                                        {categorylist.map((i)=>{
                                            return(
                                                <li><a className={enhanceactive == i.category ?"bold-active-enhance":""} id={i.category} onClick={()=>chooseenhancelist(i.category,i.rating)}>{i.category}</a></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="col-md-10 seo-right">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="">Location</label>
                                            <select name="" id="">
                                                <option value="">Bangalore</option>
                                                <option value="">Chennai</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Device Type</label>
                                            <select name="" id="">
                                                <option value="">Mobile</option>
                                                <option value="">Desktop</option>
                                                <option value="">Both</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="">Date Range</label>
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
                                    </div>
                                    <div className="add-new-btnw" style={{marginTop:24+'px'}}>
                                        <button class="outline-btn generate-report" onClick={()=>generatereportseo()}>Generate Report</button>
                                    </div>
                                    <div className="main-title-seo">
                                        {enhanceactive} - {enhancerating}
                                    </div>
                                   <div className="row">
                                       <div className="col-md-4">
                                            <div id="atmospheric-composition">
                                            </div>
                                       </div>
                                       <div className="col-md-8">
                                            {enhancerating}
                                            {enhancerating < 5? <><div className="description-rating"><div class="Normal">Normal range</div> Another ordinary day. Although some sites experience insignificant rankings changes, this is most likely because these sites or their backlink profiles are being updated. There is nothing to worry about.</div></>: <></>}
                                            {enhancerating >= 5 && enhancerating < 8? <><div className="description-rating"><div class="high">High range</div>Position changes for numerous sites! Google results are shaking up. This may be a sign of a possible algorithm change. Check if your site has been affected.</div></>: <></>}
                                            {enhancerating >= 8? <><div className="description-rating"><div class="very-high">Very High range</div>There're constant and massive tremors on Google search results, suggesting a significant algorithm update. It's time to check if your site is going up/down.</div></>: <></>}
                                       </div>
                                   </div>
                                    <div className="score-maintain">
                                        <a style={{color:"white",marginRight:24+"px"}} class="outline-btn" onClick={()=>handleModal()}>Custom</a>
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                            <i className="fa fa-download"></i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="">Download All Charts</Dropdown.Item>
                                                <Dropdown.Item href="">Download this only</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <Chart
                                        className="line-graph"
                                        width={'600px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdata}
                                        
                                        options={{
                                            hAxis: {
                                            title: "days",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                    <div className="add-new-btnw">
                                        <select name="" id="chosecate" onChange={()=>{generateChart(document.getElementById('chosecate').value)}}>
                                            <option value="Category">Category</option>
                                            <option value="Device">Device</option>
                                        </select>
                                    </div>
                                    <Chart
                                        className="line-graph"
                                        width={'600px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataCompetitor}
                                        
                                        options={{
                                            hAxis: {
                                            title: "days",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <ModuleExpandTickets/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
        <Modal show={show} onHide={()=>handleModal()} className="edit-employee-modal">  
            <Modal.Header closeButton>Choose Data Range</Modal.Header>  
            <Modal.Body>
                <div class="common-wrapper">

                    <div class="common-wcard">

                        <div class="common-form-fields">

                            <div class="add-user">
                                <div class="form-wrappers">
                                    <label>From Date</label>
                                    <input type="date" name="" placeholder="" />
                                </div>

                                <div class="form-wrappers">
                                    <label>To Date</label>
                                    <input type="date" name="" placeholder="" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </Modal.Body>  
            <Modal.Footer>  
            <Button onClick={()=>handleModal()}>Close</Button>  
            <Button onClick={()=>handleModal()}>Save</Button>  
            </Modal.Footer>  
        </Modal> 
        </>
    );
}

export default ModuleExpandSEOVolatality;
