
import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect, useRef} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col,Breadcrumb } from "antd";
import {Dropdown} from 'react-bootstrap'
import {DatePicker} from 'react-datepicker';
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


function ModuleExpandGSC() {
    //Dimensions GSC Tab
    const [dimensionsSelected, setdimensionsSelected] = useState(null);
    function handleChangeDimensions(selected){
        setdimensionsSelected(selected);
    };
    const [DimensionsOptions, setDimensionsOptions] = useState([]);

    //Query GSC Tab
    const [QueryGSCSelected, setQueryGSCSelected] = useState(null);
    function handleChangeQueryGSCTab(selected){
        setQueryGSCSelected(selected);
    };
    const [QueryGSCTabOptions, setQueryGSCTabOptions] = useState([]);

    const [sidenav,setsidenav] = useState(false);
    const [show,setshow]= useState(false);
    const [gsctabtable, setgsctabtable] = useState([]);
    const [selectionTypeGSCTab, setSelectionTypeGSCTab] = useState('checkbox');
    const [GSCTableCol,setGSCTableCol] = useState([]);
    const [gscQueryTable, setgscQueryTable] = useState([]);
    const [selectionTypeGSCQueryTable, setSelectionTypeGSCQueryTable] = useState('checkbox');
    const [GSCQueryTableCol,setGSCQueryTableCol] = useState([]);
    const [gscPageTable, setgscPageTable] = useState([]);
    const [selectionTypeGSCPageTable, setSelectionTypeGSCPageTable] = useState('checkbox');
    const [GSCPageTableCol,setGSCPageTableCol] = useState([]);
    const [chooseintoption, setchooseintoption] = useState("External");
    const [GSCmodal , setGSCmodal] = useState([{value:"1"}]);
    const [GSCmodallength, setGSCmodallength] = useState([]);
    const [chartdataGSC, setchartdataGSC] = useState([]);
    const [totalClicks, settotalClicks] = useState(true);
    const [totalimp, settotalimp] = useState(false);
    const [avgCTR, setavgCTR] = useState(false);
    const [avgPos, setavgPos] = useState(false);
    const [chartdataGSCSearch, setchartdataGSCSearch] = useState([]);

    useEffect(()=>{
        settotalimp(false);
        setavgPos(false);
        setavgCTR(false);
        settotalClicks(true)
        var data = [
            {label:"Query", value:"Query"},
            {label:"Page", value:"Page"},
            {label:"Country", value:"Country"},
            {label:"Device", value:"Device"},
            {label:"Search Appearence", value:"Search Appearence"},
            {label:"Date", value:"Date"},
        ];
        setDimensionsOptions(data);
        setQueryGSCTabOptions(data);
        data=[
            ['x', 'Performance'],
            ["Sept 1", 0],
            ["Sept 2", 10],
            ["Sept 3", 23],
            ["Sept 4", 17],
            ["Sept 5", 18],
        ];
        setchartdataGSC(data);
        data=[
            ['x', 'TotalClicks'],
            ["Sept 1", 0],
            ["Sept 2", 10],
            ["Sept 3", 23],
            ["Sept 4", 17],
            ["Sept 5", 18],
            ["Sept 6", 30],
            ["Sept 7", 20],
        ];
        setchartdataGSCSearch(data);
        var columns = [
            {
                title:"Query",
                dataIndex:"query",
                key:"query"
            },
            {
                title:"Clicks",
                dataIndex:"clicks",
                key:"clicks"
            },
            {
                title:"Impressions",
                dataIndex:"impression",
                key:"impression"
            },
            {
                title:"CTR",
                dataIndex:"ctr",
                key:"ctr"
            },
            {
                title:"Position",
                dataIndex:"position",
                key:"position"
            }
        ]
        setGSCTableCol(columns);
        data = [
            {
                key:1,
                query:"Cult Fit",
                clicks:"5174",
                impression:"15750",
                ctr:"32.85%",
                position:"1.0"
            },
            {
                key:2,
                query:"Curefit",
                clicks:"1385",
                impression:"5033",
                ctr:"27.52%",
                position:"1.0"
            },
            {
                key:3,
                query:"cult",
                clicks:"1384",
                impression:"10731",
                ctr:"12.05%",
                position:"2.1"
            },
            {
                key:4,
                query:"Gym near me",
                clicks:"1326",
                impression:"110531",
                ctr:"1.18%",
                position:"1.6"
            },
        ]
        setgsctabtable(data);
        columns = [
            {
                title:"Top Queries",
                dataIndex:"query",
                key:"query",
                width:"70%"
            },
            {
                title:<div>Clicks<br/>Last 7 days</div>,
                dataIndex:"clicklast7",
                key:"clicklast7",
                width:"10%"
            },
            {
                title:<div>Clicks<br/>Previous 7 days</div>,
                dataIndex:"clickprev7",
                key:"clickprev7",
                width:"10%"
            },
            {
                title:<div>Clicks<br/>Difference</div>,
                dataIndex:"diff",
                key:"diff",
                width:"10%"
            },
        ]
        setGSCQueryTableCol(columns);
        data = [
            {
                key:0,
                query:"Top google Searches 2021",
                clicklast7:"120",
                clickprev7:"104",
                diff:"16"
            },
            {
                key:1,
                query:"InfiDigit",
                clicklast7:"83",
                clickprev7:"74",
                diff:"9"
            },
            {
                key:2,
                query:"Most searched thing on Google 2021",
                clicklast7:"72",
                clickprev7:"57",
                diff:"15"
            },
            {
                key:3,
                query:"Types of SEO",
                clicklast7:"70",
                clickprev7:"56",
                diff:"14"
            },
            {
                key:4,
                query:"Most searched topics on Youtube 2021",
                clicklast7:"63",
                clickprev7:"77",
                diff:"-14"
            },
            {
                key:5,
                query:"most Searched keywords on Youtube",
                clicklast7:"60",
                clickprev7:"39",
                diff:"21"
            },
        ]
        setgscQueryTable(data);
        columns = [
            {
                title:"Top Pages",
                dataIndex:"pages",
                key:"pages",
                width:"70%"
            },
            {
                title:<div>Clicks<br/>Last 7 days</div>,
                dataIndex:"clicklast7",
                key:"clicklast7",
                width:"10%"
            },
            {
                title:<div>Clicks<br/>Previous 7 days</div>,
                dataIndex:"clickprev7",
                key:"clickprev7",
                width:"10%"
            },
            {
                title:<div>Clicks<br/>Difference</div>,
                dataIndex:"diff",
                key:"diff",
                width:"10%"
            },
        ]
        setGSCPageTableCol(columns);
        data = [
            {
                key:0,
                pages:"https://www.infidigit.com/news/youtube-searches/",
                clicklast7:"2649",
                clickprev7:"1668",
                diff:"681"
            },
            {
                key:1,
                pages:"https://www.infidigit.com/blog/google",
                clicklast7:"632",
                clickprev7:"452",
                diff:"157"
            },
            {
                key:2,
                pages:"https://www.infidigit.com/blog/youtube-search",
                clicklast7:"600",
                clickprev7:"400",
                diff:"200"
            },
        ]
        setgscPageTable(data);
        var a = GSCmodal.length - 1;
        setGSCmodallength(a)
    },[])
    function handleModal(){
        setshow(!show);
    }
    function generatereportgsc(){
        // var data = gsctabtable;
        var data = JSON.parse(JSON.stringify(gsctabtable));
        dimensionsSelected.map((i)=>{
            data.push({
                key:i,
                query:i.value,
                clicks:"1550",
                impression:"102",
                ctr:"32.25%",
                position:"3.0"
            })
        })
        setgsctabtable(data);
    }
    function handleMOdalSet(a){
        console.log(a)
    }
    function addModal(){
        var data = JSON.parse(JSON.stringify(GSCmodal));
        var x = GSCmodal.length + 1;
        data.push({value:x});
        setGSCmodal(data);
        setGSCmodallength(x+2);
        var a = "plus"+(x-1);
        console.log(a);
        document.getElementById(a).classList.add('none')
    }
    function generateGSCChartSearchResults(tc,ti,ac,ap){
        var data = [];
        var b = ['x'];
        var len = 0;
        console.log(totalClicks + '  ' + totalimp +' '+avgPos + avgCTR);
        if(tc){
            b.push('totalClicks');
            len += 1;
        }
        if(ti){
            b.push('totalimp');
            len += 1;
        }
        if(ac){
            b.push('avgCtr');
            len += 1;
        }
        if(ap){
            b.push('avgpos');
            len += 1;
        }
        data.push(b);
        var vaxiz = [{value:"Sept 1"},{value:"Sept 2"},{value:"Sept 3"},{value:"Sept 4"},{value:"Sept 5"},{value:"Sept 6"},{value:"Sept 7"}];
        vaxiz.map((i)=>{
            b = [];
            b.push(i.value);
            for(let i=0;i<len;i++){
                var total = ((i+1)*2/2000)*100;
                b.push(total);
            }
            data.push(b);
        })
        setchartdataGSCSearch(data)   
    }
    useEffect(()=>{
        generateGSCChartSearchResults(totalClicks, totalimp,avgCTR, avgPos)
    },[totalimp, totalClicks, avgCTR, avgPos])
    const [clientchosen, setclientchosen] = useState([
  
        {
          projname:"Myntra - Shoes"
        },
        {
          projname:"Myntra - Loafers"
        }
  ]);
  const [projectslisttop, setprojectslisttop] = useState([
    {
      title:"Myntra",
      projects:[
        {
          projname:"Myntra - Shoes"
        },
        {
          projname:"Myntra - Loafers"
        }
      ]
    },
    {
      title:"Amazon",
      projects:[
        {
          projname:"Amazon - Fashion"
        },
        {
          projname:"Amazon - Jewellery"
        }
      ]
    }
  ])
  function showProjects(a){
    var proj = projectslisttop.filter(item => item.title == a);
    console.log(proj[0].projects)
    setclientchosen(proj[0].projects)
  }
    const ref = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
            setIsMenuOpen(false)
        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])
    const [sidenavToggle, setSidenavToggle] = useState(true);
    return (
        <>
            <section class="outer-wrapper module-expand-gsc dashboard-seo">
            <div class="top-nav-bar">
                <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span>
                <div className="wrapper dashboard-seo-dropdown" ref={ref}>
                    <button
                        className="button"
                        onClick={() => setIsMenuOpen(oldState => !oldState)}
                    >
                        All data View <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                    {isMenuOpen && (
                    <div className="row">
                        <div className="col-md-6" style={{borderRight:'1px solid rgba(0,0,0,.15)'}}>
                            
                            <ul className="Clients-list">
                            <li  onClick={()=>{showProjects("Myntra")}}><span>Myntra</span> <i class="fa fa-angle-right"></i></li>
                            <li  onClick={()=>{showProjects("Amazon")}}><span>Amazon</span> <i class="fa fa-angle-right"></i></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                        <ul class="projectsList">
                        {clientchosen.map((i)=>{
                            return(
                            <li onClick={()=>{setIsMenuOpen(false)}}><a style={{color:"inherit"}} href={`dashboard-seo?id=${i.projname}`}>{i.projname}</a></li>
                            )
                        })}
                        </ul>
                        </div>
                    </div>

                    )}
                    </div> 
                </div>
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
                                <span class="profile-name">SEO</span>
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
            <div className="custom-row-dashboard-seo">
                <div className={sidenavToggle?"custom-column-20-dashboard-seo":"custom-column-10-dashboard-seo"}>
                    <div class="sidebar-nav-bar">
                        {sidenavToggle 
                            ?
                            <>
                                <ul class="list-unstyled side-menu">
                                <li><a href="/dashboard-seo?id=Myntra - Shoes"><i class="fa fa-home"></i>Home</a></li>
                                <li><a href="module-expand-da"><span class="icon"><i class="fa fa-check"></i></span><span>DA/ PA Checker</span></a></li>
                                <li><a href="module-expand-google-trends"><span class="icon"><i class="fa fa-line-chart" aria-hidden="true"></i></span><span>Google Trends</span></a></li>
                                <li><a href="module-expand-page-speed"><span class="icon"><i class="fa fa-tachometer" aria-hidden="true"></i></span><span>Page Speed and Core Web Vitals</span></a></li>
                                <li><a href="module-expand-click-share"><span class="icon"><i class="fa fa-share"></i></span><span>Click Share</span></a></li>
                                <li><a href="module-expand-rank-tracking"><span class="icon"><i class="fa fa-trophy"></i></span><span>Rank Tracking</span></a></li>
                                <li><a href="module-expand-site-uptime"><span class="icon"><i class="fa fa-clock-o" aria-hidden="true"></i></span><span>Site Uptime Monitor</span></a></li>
                                <li><a href="module-expand-gsc"><span class="icon"><i class="fa fa-database" aria-hidden="true"></i></span><span>GSC Data Extractor</span></a></li>
                                <li><a href="module-expand-organic-research"><span class="icon"><i class='fa fa-flask' aria-hidden="true"></i></span><span>Organic Research module</span></a></li>
                                <li><a href="module-expand-roi"><span class="icon"><i class="fa fa-calculator" aria-hidden="true"></i></span><span>ROI Calculator</span></a></li>
                                <li><a href="content-word-count"><span class="icon"><i class="fa fa-file" aria-hidden="true"></i></span><span>Content Word Count on a Page</span></a></li>
                                <li><a href="module-expand-backlinks"><span class="icon"><i class="fa fa-external-link" aria-hidden="true"></i></span><span>BackLinks</span></a></li>
                                <li><a href="module-expand-keyword-research"><span class="icon"><i class="fa fa-keyboard-o" aria-hidden="true"></i></span><span>Keyword Research</span></a></li>
                                <li><a href="module-expand-seo-volatality"><span class="icon"><i class="fa fa-building-o"></i></span><span>SEO Volatality</span></a></li>
                                <li><a href="module-expand-google-analytics"><span class="icon"><i class="fa fa-bar-chart" aria-hidden="true"></i></span><span>Google Analytics</span></a></li>
                                <li><a href="module-expand-seo-audit"><span class="icon"><i class="fa fa-pagelines"></i></span><span>SEO Audit</span></a></li>
                                <br />
                                <li><a href="/ticketslist"><i class="fa fa-ticket"></i>Tickets</a></li>
                                <li><a href="/configuration-seo"><i className="fa fa-cogs"></i>Configuration</a></li>
                                </ul>
                                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                                <i class="fa fa-angle-right"></i>
                                </button>
                            </>
                            :
                            <>
                                <ul class="list-unstyled side-menu">
                                <li><a href="/dashboard-seo?id=Myntra - Shoes"><i class="fa fa-home"></i></a></li>
                                <li><a href="module-expand-da"><i class="fa fa-check"></i></a></li>
                                <li><a href="module-expand-google-trends"><i class="fa fa-line-chart" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-page-speed"><i class="fa fa-tachometer" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-click-share"><i class="fa fa-share"></i></a></li>
                                <li><a href="module-expand-rank-tracking"><i class="fa fa-trophy"></i></a></li>
                                <li><a href="module-expand-site-uptime"><i class="fa fa-clock-o" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-gsc"><i class="fa fa-database" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-organic-research"><i class='fa fa-flask' aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-roi"><i class="fa fa-calculator" aria-hidden="true"></i></a></li>
                                <li><a href="content-word-count"><i class="fa fa-file" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-backlinks"><i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-keyword-research"><i class="fa fa-keyboard-o" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-seo-volatality"><i class="fa fa-building-o"></i></a></li>
                                <li><a href="module-expand-google-analytics"><i class="fa fa-bar-chart" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-seo-audit"><i class="fa fa-pagelines"></i></a></li>
                                <br />
                                <li><a href="/ticketslist"><i class="fa fa-ticket"></i></a></li>
                                <li><a href="/configuration-seo"><i className="fa fa-cogs"></i></a></li>
                                </ul>
                                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                                <i class="fa fa-angle-right"></i>
                                </button>
                            </>
                        }        
                    </div>
                </div>
                <div className={sidenavToggle?"custom-column-80-dashboard-seo main-dashboard":"custom-column-90-dashboard-seo main-dashboard"}>
                    
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/sub-projects">Projects</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <a href="/module-expand-gsc">GSC</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Tabs>
                        <TabList>
                            <Tab>GSC</Tab>
                            <Tab>Queries / Pages</Tab>
                            <Tab>Internal / External /Index</Tab>
                            <Tab>Enhancements</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            
                            <div className="row" style={{marginBottom:24+'px'}}>
                                <div className="col-lg-4">
                                    <label>Website</label>
                                    <input type="text" className="website-gsc-inp"/>
                                </div>
                               
                                <div className="col-lg-4">
                                    <label>Search Type</label>
                                    <select>
                                        <option value="Web">Web</option>
                                        <option value="Video">Video</option>
                                        <option>Image</option>
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                    <label style={{width:27+'%'}}>Select Date Range</label>
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
                            <div className="row">
                                <div className="col-lg-4" style={{display:"flex"}}>
                                    <label>Dimensions</label>
                                    <ReactSelect
                                        className="gsc-multiselect"
                                        options={DimensionsOptions}
                                        isMulti
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={false}
                                        components={{
                                            Option
                                        }}
                                        onChange={handleChangeDimensions}
                                        allowSelectAll={true}
                                        value={dimensionsSelected}
                                    />
                                </div>
                                <div className="col-lg-4">
                                    <label>Expression</label>
                                    <select>
                                        <option value="All">All</option>
                                        <option value="Contains">Contains</option>
                                        <option>Does not Contain</option>
                                        <option>Exact match</option>
                                        <option value="regex">Regex</option>
                      9              </select>
                                </div>
                                <div className="col-lg-4" style={{display:"flex"}}>
                                <label style={{marginRight:24+'px', marginTop:5+'px'}}>Filter</label>
                                <button class="filter-btn-GSC" onClick={()=>handleModal()}>Filter <i class="fa fa-filter"></i></button>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:24+'px'}}>
                                <div className="col-lg-4">
                                    <label className="aggregation-type">Aggregation Type</label>
                                    <select id="aggregation">
                                        <option value="By Property">By Property</option>
                                        <option value="By Page">By Page</option>
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                    <button class="outline-btn generate-report" onClick={()=>generatereportgsc()}>Generate</button>
                                </div>
                                
                                <div className="col-lg-4" style={{textAlign:"end"}}>
                                    
                                </div>
                            </div>
                            <hr/>
                            <Tabs className="tabs-inner-page-speed">
                                <TabList>
                                    <Tab>Performance</Tab>
                                    <Tab>Search Results</Tab>
                                </TabList>
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
                                <TabPanel>
                                    <Chart
                                        className="line-graph"
                                        width={'600px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataGSC}
                                        
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
                                </TabPanel>
                                <TabPanel>
                                    <div className="search-results-gsc-main">
                                        
                                        <div className="search-results-gsc-innerbox" onClick={()=>{settotalClicks(!totalClicks);}}>
                                            <div className={totalClicks?"blue-GSC":"search-box-GSC"}>
                                                <span>
                                                    {totalClicks ? <input type="checkbox" checked name="" id="" readOnly /> :<input type="checkbox" name="" id="" readOnly />}
                                                    <p>Total Clicks</p>
                                                </span>
                                                
                                                <h2>66.2K</h2>
                                            </div>
                                        </div>
                                        
                                        <div className="search-results-gsc-innerbox" onClick={()=>{settotalimp(!totalimp);}}>
                                            <div className={totalimp?"blue-GSC":"search-box-GSC"}>
                                                <span>
                                                {totalimp ? <input type="checkbox" checked name="" id="" readOnly /> :<input type="checkbox" name="" id="" readOnly />}
                                                    <p>Total Impressions</p>
                                                </span>
                                                
                                                <h2>11.6M</h2>
                                            </div>
                                        </div>
                                        
                                        <div className="search-results-gsc-innerbox" onClick={()=>{setavgCTR(!avgCTR);}}>
                                            <div className={avgCTR?"blue-GSC":"search-box-GSC"}>
                                                <span>
                                                    {avgCTR ? <input type="checkbox" checked name="" id="" readOnly /> :<input type="checkbox" name="" id="" readOnly />}     
                                                    <p>Average CTR</p>
                                                </span>
                                                
                                                <h2>0.6%</h2>
                                            </div>
                                        </div>
                                        
                                        <div className="search-results-gsc-innerbox" onClick={()=>{setavgPos(!avgPos);}}>
                                            <div className={avgPos?"blue-GSC":"search-box-GSC"}>
                                                <span>
                                                    {avgPos ? <input type="checkbox" checked name="" id="" readOnly /> :<input type="checkbox" name="" id="" readOnly />}
                                                    <p>Average Position</p>
                                                </span>
                                                
                                                <h2>43.4</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <Chart
                                        className="line-graph"
                                        width={'600px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataGSCSearch}
                                        
                                        options={{
                                            hAxis: {
                                            title: "days",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            legend:{position:"none"}
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </TabPanel>
                            </Tabs>
                            <hr/>
                            <div>
                                <div className="add-new-btnw">
                                <button class="outline-btn">Export</button>
                                </div>
                                <Table id="sample-module-expand" columns={GSCTableCol} dataSource={[...gsctabtable]} rowSelection={{type: selectionTypeGSCTab,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                            </div>
                            <hr />
                            

                        </TabPanel>
                        <TabPanel>
                            <Tabs className="tabs-inner-page-speed">
                                <div class="row">
                                    <div class="col-sm-10 pad-lzero">
                                        <TabList>
                                            <Tab>Query</Tab>
                                            <Tab>Pages</Tab>
                                        </TabList>
                                    </div>
                                    <div class="col-sm-2 add-new-btnw">
                                        <a href="#" class="outline-btn">EXPORT</a>
                                    </div>
                                </div>
                                <TabPanel>
                                    <div>
                                        <Table id="sample-module-expand" columns={GSCQueryTableCol} dataSource={gscQueryTable} rowSelection={{type: selectionTypeGSCQueryTable,...rowSelection,}} pagination={{position:[]}} />
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <   Table id="sample-module-expand" columns={GSCPageTableCol} dataSource={gscPageTable} rowSelection={{type: selectionTypeGSCPageTable,...rowSelection,}} pagination={{position:[]}} />
                                </TabPanel>
                            </Tabs>
                        </TabPanel>
                        <TabPanel>
                            <div className="row">
                                <div className="col-md-6">
                                    <label style={{marginRight:24+'px'}}>Choose Type</label>
                                    <select id="choose-type-inex" value={chooseintoption} onChange={()=>{setchooseintoption(document.getElementById('choose-type-inex').value)}}>
                                        <option value="External">External</option>
                                        <option value="Internal">Internal</option>
                                        <option value="Index">Index</option>
                                    </select>
                                </div>
                                <div className="col-md-6 add-new-btnw">
                                    
                                </div>
                            </div>
                            <hr/>
                            { chooseintoption == "External" 
                                ?
                                <>
                                    <div className="common-flex-div">
                                        <div style={{width:48+'%', marginRight:48+'px'}}>
                                            <div className="add-new-btnw"><a href="#" class="outline-btn">EXPORT</a></div>
                                            <div className="gsc-ex-title">External Total:</div>
                                            <div className="box-gsc">
                                                <a href="">Show more</a>
                                            </div>
                                        </div>
                                        <div style={{width:48+'%', marginRight:48+'px'}}>
                                            <div class="add-new-btnw">
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
                                            </div>
                                            <div className="chart-inex">
                                                <Chart
                                                    className="line-graph"
                                                    
                                                    height={'500px'}
                                                    chartType="Bar"
                                                    data={[
                                                        ['External links dropped by 20%', 'External links'],
                                                        ["Feb '21", 32627],
                                                        ["Mar '21", 31843],
                                                        ["Apr '21", 33191],
                                                        ["May '21", 32154],
                                                        ["Jun '21", 33195],
                                                        ["Jul '21", 34323],
                                                        ["Aug '21", 27345]
                                                    ]}
                                                    
                                                    options={{
                                                        hAxis: {
                                                        title: "External links dropped by 20%",
                                                        baselineColor:"red"
                                                        },
                                                        vAxis: {
                                                        title: "",
                                                        minValue:"0",
                                                        maxValue:"40,000"
                                                        },
                                                        legend:{position:"none"}
                                                    }}
                                                    rootProps={{ 'data-testid': '1' }}
                                                    
                                                />
                                                <div style={{textAlign:"center",marginTop:24+'px'}}>
                                                    <span className="square-legend" style={{backgroundColor:"rgb(78, 115, 223)"}}></span>
                                                    <span>External</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </>
                                :
                                <></>
                            }
                            { chooseintoption == "Internal" 
                                ?
                                <>
                                <div className="common-flex-div">
                                        <div style={{width:48+'%', marginRight:48+'px'}}>
                                            <div className="add-new-btnw"><a href="#" class="outline-btn">EXPORT</a></div>
                                            <div className="gsc-ex-title">Internal Total:</div>
                                            <div className="box-gsc">
                                                <a href="">Show more</a>
                                            </div>
                                        </div>
                                        <div style={{width:48+'%', marginRight:48+'px'}}>
                                        <div class="add-new-btnw">
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
                                    </div>
                                    <div className="chart-inex">
                                        <Chart
                                            className="line-graph"
                                            
                                            height={'500px'}
                                            chartType="Bar"
                                            data={[
                                                ['Internal links improved by 8%', 'Internal links'],
                                                ["Feb '21", 1453513],
                                                ["Mar '21", 1874841],
                                                ["Apr '21", 2317148],
                                                ["May '21", 2277080],
                                                ["Jun '21", 2792648],
                                                ["Jul '21", 3342819],
                                                ["Aug '21", 3596717]
                                            ]}
                                            
                                            options={{
                                                hAxis: {
                                                title: "Internal links dropped by 20%",
                                                baselineColor:"red"
                                                },
                                                vAxis: {
                                                title: "",
                                                minValue:"0",
                                                maxValue:"40,000"
                                                },
                                                legend:{position:"none"}
                                            }}
                                            rootProps={{ 'data-testid': '1' }}
                                        />
                                         <div style={{textAlign:"center",marginTop:24+'px'}}>
                                            <span className="square-legend" style={{backgroundColor:"rgb(78, 115, 223)"}}></span>
                                            <span>Internal</span>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                   
                                   
                                </>
                                :
                                <></>
                            }
                            { chooseintoption == "Index" 
                                ?
                                <>
                                <div className="common-flex-div">
                                        <div style={{width:48+'%', marginRight:48+'px'}}>
                                            <div className="add-new-btnw"><a href="#" class="outline-btn">EXPORT</a></div>
                                            <div className="gsc-ex-title">Index Total:</div>
                                            <div className="box-gsc">
                                                <a href="">Show more</a>
                                            </div>
                                        </div>
                                        <div style={{width:48+'%', marginRight:48+'px'}}>
                                            <div class="add-new-btnw">
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
                                            </div>
                                            <div className="chart-inex">
                                                <Chart
                                                    className="line-graph"
                                                    height={'500px'}
                                                    chartType="Bar"
                                                    data={[
                                                        ['Index pages improved by 9%', 'Index links'],
                                                        ["Jan '21", 20216],
                                                        ["Feb '21", 22204],
                                                        ["Mar '21", 23647],
                                                        ["Apr '21", 25670],
                                                        ["May '21", 28501],
                                                        ["Jun '21", 33620],
                                                        ["Jul '21", 36757],
                                                        ["Aug '21", 40195]
                                                    ]}
                                                    
                                                    options={{
                                                        hAxis: {
                                                        title: "Index links dropped by 20%",
                                                        baselineColor:"red"
                                                        },
                                                        vAxis: {
                                                        title: "",
                                                        minValue:"0",
                                                        maxValue:"40,000"
                                                        },
                                                        legend:{position:"none"}
                                                    }}
                                                    rootProps={{ 'data-testid': '1' }}
                                                />
                                                 <div style={{textAlign:"center",marginTop:24+'px'}}>
                                                    <span className="square-legend" style={{backgroundColor:"rgb(78, 115, 223)"}}></span>
                                                    <span>Index</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    
                                </>
                                :
                                <></>
                            }
                        </TabPanel>
                        <TabPanel>
                            <Enhancements />
                        </TabPanel>
                        <TabPanel>
                            <ModuleExpandTickets/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
        <Modal show={show} onHide={()=>handleModal()} className="module-expand-modal">  
            <Modal.Header closeButton>Filter</Modal.Header>  
            <Modal.Body>
                {GSCmodal.map((i)=>{
                    return(
                        <div className="row" style={{marginBottom:24+'px'}}>
                            <div className="col-md-3" style={{display:"flex"}}>
                                <span style={{marginRight:16+'px', marginTop:5+'px'}}>{i.value}</span>
                                <ReactSelect
                                    id = {`GSCModalMulti${i.value}`}
                                    className="da-pa-search"
                                    options={QueryGSCTabOptions}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{
                                        Option
                                    }}
                                    onChange={handleChangeQueryGSCTab}
                                    allowSelectAll={true}
                                    value={QueryGSCSelected}
                                />
                            </div>
                            <div className="col-md-3">
                                <select id={`GscModalCondition${i.value}`}>
                                    <options>Conditions</options>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <input type="text" id={`GSCModalInput${i.value}`} style={{height:38+'px'}} />
                            </div>
                            <div className="col-md-2">
                                <button class="outline-btn" onClick={()=>{handleMOdalSet(i.value)}}>Set</button>
                            </div>
                            <div className="col-md-1">
                                {(i.value != GSCmodallength && QueryGSCTabOptions.length != i.value)? <i id={`plus${i.value}`} class="fa fa-plus" onClick={()=>{addModal()}}></i>  :<></>}
                            </div>
                            
                        </div>
                    )
                })}
            </Modal.Body>  
            <Modal.Footer>  
             
            </Modal.Footer>  
        </Modal> 
        </>
    );
}

function Enhancements(props){
    const [enhanceactive, setenhanceactive] = useState("FAQ");
    const [chartdataError, setchartdataError] = useState([]);
    const [chartdataValidWithWarn, setchartdataValidWithWarn] = useState([]);
    const [chartdataInvalid, setchartdataInvalid] = useState([]);
    const [chartdataImpressions, setchartdataImpressions] = useState([]);

    useEffect(()=>{
        var data=[
            ['x', 'Error'],
            ["2021-06-23", 0],
            ["2021-06-24", 0],
            ["2021-06-25", 0],
            ["2021-06-26", 0],
            ["2021-06-27", 0],
            ["2021-06-28", 0],
            ["2021-06-29", 0]
        ];
        setchartdataError(data);
        var data=[
            ['x', 'InValid'],
            ["2021-06-23", 91],
            ["2021-06-24", 95],
            ["2021-06-25", 75],
            ["2021-06-26", 85],
            ["2021-06-27", 98],
            ["2021-06-28", 81],
            ["2021-06-29", 65]
        ];
        setchartdataInvalid(data);
        var data=[
            ['x', 'Valid With Warn'],
            ["2021-06-23", 0],
            ["2021-06-24", 0],
            ["2021-06-25", 0],
            ["2021-06-26", 0],
            ["2021-06-27", 0],
            ["2021-06-28", 0],
            ["2021-06-29", 0]
        ];
        setchartdataValidWithWarn(data);
        var data=[
            ['x', 'Valid With Warn'],
            ["2021-06-23", 8944],
            ["2021-06-24", 9505],
            ["2021-06-25", 7996],
            ["2021-06-26", 7110],
            ["2021-06-27", 8045],
            ["2021-06-28", 7419],
            ["2021-06-29", 7943]
        ];
        setchartdataImpressions(data);
    },[])
    function chooseenhancelist(a){
        var x = enhanceactive;
        x = x.replace(/\s/g, '');
        document.getElementById(x).classList.remove('bold-active-enhance')
        setenhanceactive(a);
        a = a.replace(/\s/g,'');
        document.getElementById(a).classList.add('bold-active-enhance')
    }
    return(
        <>
            <div className="row">
                <div className="col-md-2 enhance-sidebar">
                    <ul className="list-enhace-headings">
                        <li><a id="BreadCrumbs" onClick={()=>chooseenhancelist("BreadCrumbs")}>BreadCrumbs</a></li>
                        <li><a id="FAQ" class="bold-active-enhance" onClick={()=>chooseenhancelist("FAQ")}>FAQ</a></li>
                        <li><a id="Howto" onClick={()=>chooseenhancelist("How to")}>How to</a></li>
                        <li><a id="JobPostings" onClick={()=>chooseenhancelist("Job Postings")}>Job Postings</a></li>
                        <li><a id="Logos" onClick={()=>chooseenhancelist("Logos")}>Logos</a></li>
                        <li><a id="Products" onClick={()=>chooseenhancelist("Products")}>Products</a></li>
                        <li><a id="ReviewSnippets" onClick={()=>chooseenhancelist("Review Snippets")}>Review Snippets</a></li>
                        <li><a id="SitelineSearchbox" onClick={()=>chooseenhancelist("Siteline Searchbox")}>Siteline Searchbox</a></li>
                    </ul>
                </div>
                <div className="col-md-10 enhance-active-content">
                    <div className="row">
                        <div className="col-md-10">
                            <div class="main-title">{enhanceactive}</div>
                            <Tabs className="tabs-inner-page-speed module-expand-gsc-tabs-inner">
                                <TabList>
                                    <Tab>
                                        <p>Error</p>
                                        <h5>0</h5>
                                        <p>No issues</p>
                                    </Tab>
                                    <Tab>
                                        <p>Valid with warn</p>
                                        <h5>0</h5>
                                        <p>No issues</p>
                                    </Tab>
                                    <Tab>
                                        <p >Invalid</p>
                                        <h5>92</h5>
                                       <p style={{visibility:"hidden"}}>hi</p>
                                    </Tab>
                                    <Tab >
                                        <p >Impressions</p>
                                        <h5 style={{visibility:"hidden"}}>hi</h5>
                                        <p style={{visibility:"hidden"}}>hi</p>
                                        
                                    </Tab>
                                </TabList>
                                <TabPanel>
                                    <Chart
                                        className="line-graph"
                                        width={'800px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataError}
                                        
                                        options={{
                                            hAxis: {
                                            title: "Error",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <Chart
                                        className="line-graph"
                                        width={'800px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataValidWithWarn}
                                        
                                        options={{
                                            hAxis: {
                                            title: "Error",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <Chart
                                        className="line-graph"
                                        width={'800px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataInvalid}
                                        
                                        options={{
                                            hAxis: {
                                            title: "Error",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <Chart
                                        className="line-graph"
                                        width={'800px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdataImpressions}
                                        
                                        options={{
                                            hAxis: {
                                            title: "Error",
                                            },
                                            vAxis: {
                                            title: "",
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </TabPanel>
                            </Tabs>
                        </div>
                        <div className="col-md-2 add-new-btnw">
                            <a href="#" class="outline-btn">Export</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModuleExpandGSC;
