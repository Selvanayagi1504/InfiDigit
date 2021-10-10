import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect, useRef} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col,Breadcrumb } from "antd";
import {Dropdown, Card} from 'react-bootstrap'
import {ModuleExpandTickets, SideNavBarCustomClosed, SideNavBarCustom} from './index';
import DatePicker,{ DateObject } from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"

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

function ModuleExpandROI() {
    const u = localStorage.getItem('state');
    const [usertype, setusertype] = useState(u);
    const [KeywordSelected, setKeywordSelected] = useState(null);
    function handleChangeKeyword(selected){
        setKeywordSelected(selected);
        
    };
    const [KeywordOption, setKeywordOption] = useState([]);
    const [sidenav,setsidenav] = useState(false);
    const [PaidCPCTable, setPaidCPCTable] = useState([]);
    const [PaidCTCCol, setPaidCTCCol] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [methodROI, setmethodROI] = useState("GSC");
    const [GSCTable, setGSCTable] = useState([]);
    const [GSCCol, setGSCCol] = useState([]);
    const [selectionTypeGSC, setSelectionTypeGSC] = useState('checkbox');
    const [ClickShareTable, setClickShareTable] = useState([]);
    const [ClickShareCol, setClickShareCol] = useState([]);
    const [selectionTypeClickShare, setSelectionTypeClickShare] = useState('checkbox');
    const [chartdata, setchartdata] = useState([]);
    const [show,setshow]= useState(false);
    const [showGSC, setshowGSC] = useState(false);
    const [showClickShare, setshowClickShare] = useState(false);
    const [MetricTable, setMetricTable] = useState([]);
    const [MetricCol, setMetricCol] = useState([]);
    const [selectionTypeMetric, setSelectionTypeMetric] = useState('checkbox');
    useEffect(()=>{
        var data = [];
        data = [
            {label:"Shoes", value:"Shoes"},
            {label:"Formal Shoes", value:"Formal Shoes"},
            {label:"Casual Shoes", value:"Casual Shoes"},
            {label:"Shoes for Men", value:"Shoes for Men"},
        ]
        setKeywordOption(data);
        data = [
            {
                title:"Keyword List",
                dataIndex:"keyword",
                key:"keyword",
                width:"10%"
            },
            {
                title:"Search Volume",
                dataIndex:"volume",
                key:"volume",
                width:"10%"
            },
            {
                title:"CPC",
                dataIndex:"ctc",
                key:"ctc",
                width:"20%"
            },
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"60%"
            }
        ];
        setPaidCTCCol(data);
        data = [
            {
                key:"1",
                keyword:"Soes",
                volume:"33100",
                ctc:"3.1"
            },
            {
                key:"2",
                keyword:"Shoes for Men",
                volume:"5400",
                ctc:"2.5"
            },
            {
                key:"3",
                keyword:"Mens for Women",
                volume:"27100",
                ctc:"6.8"
            },
            {
                key:"4",
                keyword:"Shoes for Kids",
                volume:"12400",
                ctc:"50.2"
            }
        ]
        setPaidCPCTable(data);
        data = [
            {
                title:"Keywords",
                dataIndex:"keyword",
                key:"keyword",
                width:"10%"
            },
            {
                title:"Clicks",
                dataIndex:"click",
                key:"click",
                width:"10%"
            },
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"80%"
            }
        ]
        setGSCCol(data);
        data = [
            {
                title:"Keywords",
                dataIndex:"keyword",
                key:"keyword",
                width:"10%"
            },
            {
                title:"EStd. Organic Traffic",
                dataIndex:"organictraffic",
                key:"organictraffic",
                width:"10%"
            },
            {
                title:"",
                dataIndex:"",
                key:"",
                width:"80%"
            }
        ];
        setClickShareCol(data);
        data = [
            {
                key:"1",
                keyword:"Shoes for Men",
                click:"984"
            },
            {
                key:"2",
                keyword:"Shoes",
                click:"564"
            },
            {
                key:"3",
                keyword:"Shoes for Women",
                click:"872"
            },
            {
                key:"4",
                keyword:"Shoes for Kids",
                click:"1250"
            },
        ];
        setGSCTable(data);
        data = [
            {
                key:"1",
                keyword:"Shoes for Men",
                organictraffic:"784"
            },
            {
                key:"2",
                keyword:"Shoes",
                organictraffic:"2200"
            },
            {
                key:"3",
                keyword:"Shoes for Women",
                organictraffic:"11000"
            },
            {
                key:"4",
                keyword:"Shoes for Kids",
                organictraffic:"2400"
            },
        ]
        setClickShareTable(data);
        data=[
            ['x', 'ROI'],
            ["Aug 1", 25],
            ["Aug 2", 36],
            ["Aug 3", 47],
            
        ];
        setchartdata(data);
        data = [
            {
                title:"Metric",
                dataIndex:"metric",
                key:"metric"
            },
            {   
                title:"Aug 1",
                dataIndex:"aug1",
                key:"aug1",
                
            },
            {   
                title:"Aug 2",
                dataIndex:"aug2",
                key:"aug2",
                
            },
            {   
                title:"Aug 3",
                dataIndex:"aug3",
                key:"aug3",
                
            }
        ]
        setMetricCol(data);
        data = [
            {
                metric:"ROI",
                aug1:"25",
                aug2:"36",
                aug3:"47"
            }
        ]
        setMetricTable(data);
    },[])
    
    function handleModal(){
        setshow(!show);
    }
    function handleModalGSC(){
        setshowGSC(!showGSC);
    }
    function handleModalClickShare(){
        setshowClickShare(!showClickShare);
    }
    function openModal(a){
        if(a == "GSC"){
            handleModalGSC();
        }
        else{
            handleModalClickShare();
        }
    }
    function generateROI(){
        var a = document.getElementById('roi-choose-method').value;
        if(a == "GSC"){
            setmethodROI("GSC");
        }
        else{
            setmethodROI("ClickShare")
        }
    }
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
    const [values, setValues] = useState([
        new DateObject().setDay(4).subtract(1, "month"),
        new DateObject().setDay(4).add(1, "month")
      ])
    const [headValues, setHeadValues] = useState([
        new DateObject().setDay(4).subtract(1, "month"),
        new DateObject().setDay(4).add(1, "month")
      ])
    const [open, setOpen] = useState(false);
    const [head1,setHead1]= useState(headValues[0].format())
    const [head2,setHead2]= useState(headValues[1].format())
    const [checkBoxValue,setCheckBoxValue]= useState(false)
    function setheadvalues(){
        setHead1(values[0].format())
        setHead2(values[1].format())
    }
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (open && ref.current && !ref.current.contains(e.target)) {
            setOpen(false)
        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [open])
    return (
        <>
            <section class="outer-wrapper ROI dashboard-seo">
            {
                usertype == "SEO" ?<div class="top-nav-bar">
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
                {/* <div class="nav-bar-center">&nbsp;</div> */}
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
            </div> :
             <div class="top-nav-bar">
             <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
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
                   <span class="profile-name">Director</span>
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
            }

            <div className="custom-row-dashboard-seo">
                <div className={sidenavToggle?"custom-column-20-dashboard-seo":"custom-column-10-dashboard-seo"}>
                    <div class="sidebar-nav-bar">
                        {sidenavToggle 
                            ?
                            <>
                                {/* <ul class="list-unstyled side-menu">
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
                                </ul> */}
                                <SideNavBarCustom/>
                                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                                <i class="fa fa-angle-right"></i>
                                </button>
                            </>
                            :
                            <>
                                {/* <ul class="list-unstyled side-menu">
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
                                </ul> */}
                                <SideNavBarCustomClosed/>
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
                        <a href="/module-expand-roi">ROI</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div ref={ref} class="calendar-main">
                        <div className="add-new-btnw">
                            <button className="outline-btn-boderless" style={{width:"250px"}} onClick={() => setOpen(!open)} >
                                {head1}&nbsp;-&nbsp;{head2}&nbsp;&nbsp;
                                <i class="fa fa-chevron-down drop"></i>
                            </button>
                        </div>
                        
                        {open && (
                            <div id="example-collapse-text-calendar">
                                <Card body className="daterange-picker-card  mt-2">
                                    <div className="row">
                                    
                                        <div className="col-lg-8 calendar-col">
                                            <Calendar
                                                className="custom-calendar"
                                                value={values}
                                                onChange={(e)=>{
                                                    setValues(e)
                                                }}
                                                range
                                                numberOfMonths={3}
                                                className="custom-calendar"
                                                showOtherDays
                                            />
                                        </div>
                                        <div className="col-lg-4 mt-3 mt-lg-0 text-center">
                                            <div className="row">
                                                <div className="col-6">
                                                    <label >Date Range</label>
                                                </div>
                                                <div className="col-5">
                                                    <select >
                                                        <option value="All">custom</option>
                                                        <option value="Contains">today</option>
                                                        <option>yesterday</option>
                                                        <option>last week</option>
                                                    </select>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            <div className="row mt-3 text-center">
                                                <div className="col-5">
                                                    <input type="text" value={values[0].format()}/>
                                                </div>
                                                <div className="col-1">
                                                
                                                </div>
                                                <div className="col-5">
                                                    {
                                                        values.length==2?
                                                        <input type="text" value={values[1].format()}/> : <input type="text" value={"select"}/>
                                                    }
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-6 ">
                                                    <input type="checkbox" onChange={()=>{setCheckBoxValue(!checkBoxValue)}}/>
                                                    <label className="lable-compare">Compare to</label>
                                                </div>
                                                <div className="col-5">
                                                    <select >
                                                        <option value="All">previous period</option>
                                                        <option>yesterday</option>
                                                        <option>last week</option>
                                                    </select>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            {
                                            checkBoxValue?
                                                <div className="row mt-3">
                                                    <div className="col-5">
                                                    <input type="text" value={head1}/>
                                                    </div>
                                                    <div className="col-1">
                                                    
                                                    </div>
                                                    <div className="col-5">
                                                        <input type="text" value={head2}/>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                                :
                                                <div  className="row mt-3">
                                                    <div className="col-5">
                                                    <input type="text" disabled value={head1}/>
                                                    </div>
                                                    <div className="col-1">
                                                    <h6 className="pt-2">-</h6>
                                                    </div>
                                                    <div className="col-5">
                                                        <input type="text" disabled value={head2}/>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                            }
                                            <hr/>
                                            <div className="row mt-3">
                                                <div className="col-6">
                                                    <button onClick={()=>{setheadvalues();setOpen(!open)}}
                                                    className="outline-btn" >
                                                        Apply
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                <buton onClick={() => setOpen(!open)}
                                                className="outline-btn">
                                                        Cancel
                                                </buton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}
                        
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>ROI</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="row">
                                <div className="col-md-3 keyowrd-ROI-drop" style={{display:"flex"}}>
                                    <label class="common-mt-5">Choose Keyword</label>
                                    <ReactSelect
                                        className="da-pa-search"
                                        options={KeywordOption}
                                        isMulti
                                        closeMenuOnSelect={false}
                                        hideSelectedOptions={false}
                                        components={{
                                            Option
                                        }}
                                        onChange={handleChangeKeyword}
                                        allowSelectAll={true}
                                        value={KeywordSelected}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label>Revenue Generated</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="col-md-3">
                                    <label>Total Leads</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="col-md-3">
                                    <label>Frequency</label>
                                    <select>
                                        <option value="Daily">Daily</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Weekly">Weekly</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-md-4">
                                    <label>Choose Location</label>
                                    <select>
                                        <option value="India">India</option>
                                        <option value="US">US</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label>Choose Language</label>
                                    <select>
                                        <option value="English">English</option>
                                        <option value="Tamil">Tamil</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label>Data Source</label>
                                    <select>
                                        <option value="Google">Google</option>
                                        <option value="Sheets">Sheets</option>
                                    </select>
                                </div>
                            </div> */}
                            <hr/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="main-title ">Paid CPC</div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Location</label>
                                            <select>
                                                <option value="India">India</option>
                                                <option value="US">US</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label>Language</label>
                                            <select>
                                                <option value="English">English</option>
                                                <option value="Tamil">Tamil</option>
                                            </select>
                                        </div>
                                        {/* <div className="col-md-4">
                                            <button class="outline-btn" onClick={()=>{generateROI()}}>Generate</button>
                                        </div> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Data Source</label>
                                            <select>
                                                <option value="Google">Google</option>
                                                {/* <option value="Sheets">Sheets</option> */}
                                            </select>
                                        </div>
                                        <div className="col-md-4 add-new-btnw " style={{marginTop:"auto", marginBottom:"unset"}}>
                                            <button class="outline-btn"  >Generate</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="main-title ">Organic CPC</div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>SEO Cost</label>
                                            <input type="text" />
                                        </div>
                                        <div className="col-md-4">
                                            <label>Method</label>
                                            <select id="roi-choose-method" onChange={()=>{openModal(document.getElementById('roi-choose-method').value)}}>
                                                <option value="GSC">GSC</option>
                                                <option value="ClickShare">Click Share</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 " style={{marginTop:"auto", marginBottom:"unset"}}>
                                            <button class="outline-btn"   onClick={()=>{generateROI()}}>Generate</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            
                            <div className="ROI-outer">
                                <div className="ROI-inner">
                                    <h4>ROI</h4>
                                    <p>3</p>
                                </div>
                                <div className="ROI-inner">
                                    <h4>ROAS</h4>
                                    <p>8</p>
                                </div>
                                <div className="ROI-inner">
                                    <h4>Cost Per Lead</h4>
                                    <p>$245k</p>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Metric</label>
                                            <select>
                                                <option value="ROI">ROI</option>
                                                
                                            </select>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="score-maintain">
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
                                        <div className="col-md-2"></div>
                                    </div>
                                    <Chart
                                        className="line-graph"
                                        width={'600px'}
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdata}
                                        
                                        options={{
                                            hAxis: {
                                            title: "Dates",
                                            },
                                            vAxis: {
                                            title: "",
                                            ticks:[10,20,30,40,50]
                                            },
                                            
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                                <div className="col-md-6 table-graph-modules">
                                    <Table id="sample" columns={MetricCol} dataSource={MetricTable} rowSelection={{type: selectionTypeMetric,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                                </div>
                            </div>
                            <hr/>
                            <div className="add-new-btnw">
                                <button class="outline-btn">Export</button>
                            </div>
                            <div className="row">
                                <div className="col-md-6 custom-borrig">
                                    <div class="main-title ">Paid CPC</div>
                                    
                                    <Table id="sample-module-expand" columns={PaidCTCCol} dataSource={PaidCPCTable} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                                </div>
                                <div className="col-md-6">
                                    {
                                        methodROI == "GSC"
                                        ?
                                            <>
                                                <div class="main-title ">Organic CPC - GSC</div>
                                                
                                                <Table id="sample-module-expand" columns={GSCCol} dataSource={GSCTable} rowSelection={{type: selectionTypeGSC,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                                            </>
                                        :
                                            <>
                                                <div class="main-title ">Organic CPC - Click Share</div>
                                                
                                                <Table id="sample-module-expand" columns={ClickShareCol} dataSource={ClickShareTable} rowSelection={{type: selectionTypeClickShare,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                                            </>
                                    }
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
        <Modal show={show} onHide={()=>handleModal()} className="edit-employee-modal ROI-modal">  
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
        <Modal show={showGSC} onHide={()=>handleModalGSC()} className="edit-employee-modal ROI-modal">  
            <Modal.Header closeButton>GSC</Modal.Header>  
            <Modal.Body>
                <div class="common-wrapper">

                    <div class="common-wcard">

                        <div class="common-form-fields">

                            <div class="add-user">
                                <div class="form-wrappers">
                                    <label>Select URL</label>
                                    <select>
                                        <option value="URL 1">URL 1</option>
                                        <option value="URL 2">URL 2</option>
                                    </select>
                                </div>

                                <div class="form-wrappers">
                                    <label>Countrye</label>
                                    <select name="" id="">
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>

                                <div class="form-wrappers">
                                    <label>Search Type</label>
                                    <select name="" id="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </Modal.Body>  
            <Modal.Footer>  
            
            <Button onClick={()=>handleModalGSC()}>Set</Button>  
            </Modal.Footer>  
        </Modal>
        <Modal show={showClickShare} onHide={()=>handleModalClickShare()} className="edit-employee-modal ROI-modal">  
            <Modal.Header closeButton>Click Share</Modal.Header>  
            <Modal.Body>
                <div class="common-wrapper">

                    <div class="common-wcard">

                        <div class="common-form-fields">

                            <div class="add-user">
                                <div class="form-wrappers">
                                    <label>Organic Share %</label>
                                    <input type="text" />
                                </div>

                                

                            </div>
                        </div>
                    </div>

                </div>
            </Modal.Body>  
            <Modal.Footer>  
            
            <Button onClick={()=>handleModalClickShare()}>Set</Button>  
            </Modal.Footer>  
        </Modal> 
        </>
    );
}

export default ModuleExpandROI;
