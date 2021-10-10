import React from 'react';
import {useState, useEffect, useRef} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col ,Breadcrumb} from "antd";
import {Dropdown, Card} from 'react-bootstrap';
import {ModuleExpandTickets, SideNavBarCustom, SideNavBarCustomClosed} from './index';
import DatePicker,{ DateObject } from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"


//import { ModuleExpandOrganicResearch } from '.';


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


function ModuleExpandOrganicResearch() {
    const u = localStorage.getItem('state');
    const [usertype, setusertype] = useState(u);
    const [QueryORTabOptions, setQueryORTabOptions] = useState([]);
    const [sidenav,setsidenav] = useState(false);
    //const [show,setshow]= useState(false);
    const [ORtabtable, setORtabtable] = useState([]);
    const [selectionTypeORTab, setSelectionTypeORTab] = useState('checkbox');
    const [ORTableCol,setORTableCol] = useState([]);
    const [gscQueryTable, setORQueryTable] = useState([]);
    const [selectionTypeGSCQueryTable, setSelectionTypeGSCQueryTable] = useState('checkbox');
    const [GSCQueryTableCol,setGSCQueryTableCol] = useState([]);

    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);

    useEffect(()=>{
        var data = [
            {label:"Query", value:"Query"},
            {label:"Page", value:"Page"},
            {label:"Country", value:"Country"},
            {label:"Device", value:"Device"},
            {label:"Search Appearence", value:"Search Appearence"},
            {label:"Date", value:"Date"},
        ];
        data=[
            {
                url:"https://www.infidigit.com/news/youtube-searches-2021",
                traffic:"370",
                traff:"17.02",
                keywords:"359",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/list-of-search-engines",
                traffic:"215",
                traff:"9.89",
                keywords:"256",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/news/top-youtube-searches",
                traffic:"205",
                traff:"9.43",
                keywords:"134",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/most-subscribed-youtube-channels/",
                traffic:"160",
                traff:"7.36",
                keywords:"56",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/importance-of-website/",
                traffic:"97",
                traff:"4.46",
                keywords:"79",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/top-google-searches/",
                traffic:"96",
                traff:"4.41",
                keywords:"201",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/website-structure/",
                traffic:"62",
                traff:"2.85",
                keywords:"49",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/url-structure/",
                traffic:"59",
                traff:"2.71",
                keywords:"37",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/cloaking",
                traffic:"50",
                traff:"2.30",
                keywords:"22",
                ads:"0"
            },
            {
                url:"https://www.infidigit.com/blog/what-is-digital-marketing",
                traffic:"48",
                traff:"2.20",
                keywords:"160",
                ads:"0"
            }
        ]
        setteamList(data);
        const col = [
            {
              title: "URL",
              dataIndex: "url",
              key: "url"
            },
            {
              title: "Traffic",
              dataIndex: "traffic",
              key: "traffic"
            },
            {
                title:"Traffic %",
                dataIndex:"traff",
                key:"traff",
            },
            {
                title:"Keywords",
                dataIndex:"keywords",
                key:"keywords",
            },
            {
                title:"Ads Keywords",
                dataIndex:"ads",
                key:"ads"
            }
          ];
        setteamcol(col);
         
    
        
        setQueryORTabOptions(data);
        var columns = [
            {
                title:"Keyword",
                dataIndex:"keyword",
                key:"keyword"
            },
            {
                title:"SF",
                dataIndex:"sf",
                key:"sf"
            },
            {
                title:"Pos.",
                dataIndex:"pos",
                key:"pos"
            },
            {
                title:"Diff.",
                dataIndex:"diff",
                key:"diff"
            },
            {
                title:"Traffic%",
                dataIndex:"traffic",
                key:"traffic"
            },
            {
                title:"Volume",
                dataIndex:"volume",
                key:"volume"
            },
            {
                title:"KD%",
                dataIndex:"kd",
                key:"kd"
            },
            {
                title:"CPC (USD)",
                dataIndex:"cpc",
                key:"cpc"
            },
            {
                title:"URL",
                dataIndex:"url",
                key:"url"
            },
            {
                title:"SERP",
                dataIndex:"serp",
                key:"serp"
            },
            {
                title:"Upd.",
                dataIndex:"upd",
                key:"upd"
            }

        ]
        setORTableCol(columns);
        data = [
            {
                keyword:"most subscribed youtubers",
                sf:"+2",
                pos:"17 → 19",
                diff:"↓2",
                traffic:"4.55",
                volume:"33,100",
                kd:"81",
                cpc:"2.3",
                url:"https://www.infidigit.com/blog/most-subscribed-youtube-channels/",
                serp:"",
                upd:"Sep 20"
            },
            {
                keyword:"search engine list",
                sf:"+3",
                pos:"12 → 12",
                diff:"0",
                traffic:"3.91",
                volume:"6,600",
                kd:"83",
                cpc:"3.7",
                url:"https://www.infidigit.com/blog/list-of-search-engines",
                serp:"",
                upd:"Sep 21"
            },
            {
                keyword:"top searches on youtube",
                sf:"+4",
                pos:"4 → 5",
                diff:"↓1",
                traffic:"1.65",
                volume:"720",
                kd:"73",
                cpc:"62.1",
                url:"https://www.infidigit.com/news/youtube-searches-2021",
                serp:"",
                upd:"Sep 21"
            },
            {
                keyword:"top searches on youtube",
                sf:"+4",
                pos:"0 → 6",
                diff:"new",
                traffic:"1.65",
                volume:"720",
                kd:"73",
                cpc:"62.1",
                url:"https://www.infidigit.com/news/top-youtube-searches",
                serp:"",
                upd:"Sep 21"
            },
            {
                keyword:"most subscribed youtube channel",
                sf:"+3",
                pos:"23 → 19",
                diff:"↑4",
                traffic:"1.65",
                volume:"12,100",
                kd:"79",
                cpc:"1.3",
                url:"https://www.infidigit.com/blog/most-subscribed-youtube-channels/",
                serp:"",
                upd:"Sep 20"
            },
            {
                keyword:"website structure",
                sf:"+5",
                pos:"7 → 7",
                diff:"0",
                traffic:"1.61",
                volume:"880",
                kd:"59",
                cpc:"4.8",
                url:"https://www.infidigit.com/blog/website-structure/",
                serp:"",
                upd:"Sep 21"
            },
            {
                keyword:"popular searches",
                sf:"+2",
                pos:"0 → 7",
                diff:"new",
                traffic:"1.61",
                volume:"880",
                kd:"86",
                cpc:"2",
                url:"https://www.infidigit.com/news/youtube-searches-2021/",
                serp:"",
                upd:"Sep 21"
            },
            {
                keyword:"link building services singapore",
                sf:"+2",
                pos:"1 → 1",
                diff:"0",
                traffic:"1.47",
                volume:"70",
                kd:"9",
                cpc:"0",
                url:"https://www.infidigit.com/sg/link-building/",
                serp:"",
                upd:"Sep 02"
            },
        ]
        setORtabtable(data);
    },[])
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
            <section class="outer-wrapper module-expand-site-uptime module-organic-research dashboard-seo">
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
                                <SideNavBarCustom />
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
                        <a href="/module-expand-organic-research">Organic Research</a>
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
                            <Tab>Organic Research</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>
                        <TabPanel>
                        <div className="row" style={{marginBottom:12+'px'}}>
                                <div className="col-md-3 my-2">
                                    <label style={{marginRight:23+'px'}}>Search Type</label>
                                    <select style={{width:200+'px'}}>
                                        <option>URL</option>
                                        <option>Prefix</option>
                                        <option>Domain/*</option>
                                        <option>*.domain/*</option>
                                    </select>
                                </div>
                                <div className="col-md-3 my-2">
                                    <label style={{marginRight:20+'px'}}>Domain URL</label>
                                    <input type="text" style={{width:200+'px'}}/>
                                </div>
                                <div className="col-md-3 mt-2">
                                    <label style={{marginRight:24+'px'}}>Device Type</label>
                                    <select style={{width:200+'px'}}>
                                        <option>Desktop</option>
                                        <option>Mobile</option>                                                                               
                                    </select>
                                </div>
                                <div className="col-md-3 mt-2">
                                    <label style={{marginRight:44+'px'}}>  Currency  </label>
                                    <select style={{width:200+'px'}}>
                                        <option>INR</option>
                                        <option>USD</option>                                                                               
                                    </select>
                                </div>                            
                            </div>
                            <div className="add-new-btnw">
                                <button style={{height:38+'px'}} class="outline-btn" onClick={{}}>GENERATE</button>
                            </div>
                            {/* <div className="row">
                                <div className="col-md-4 my-2">
                                    <label style={{marginRight:44+'px'}}>  Currency  </label>
                                    <select style={{width:200+'px'}}>
                                        <option>INR</option>
                                        <option>USD</option>                                                                               
                                    </select>
                                </div>  
                                <div className="col-md-4 my-2">
                                    <label style={{marginRight:28+'px'}}>Select Date</label>
                                    <input style={{width:200+'px'}} type="date"/>
                                </div>
                                <div className="col-md-4 my-2">
                                    <button style={{height:38+'px'}} class="outline-btn" onClick={{}}>GENERATE</button>
                                </div>
                            </div> */}


                            <hr />
                            <div class="add-new-btnw">
                                <a href="#" class="outline-btn">EXPORT</a>
                            </div>
                            <div></div>
                            <div>
                             <hr />   
                            <div class="container">
                                <div className="col-md-2">
                                    Keywords
                                    <h1><strong>5.9K</strong></h1>
                                    <p style={{color:'green'}}>5.81%</p>
                                    
                                </div>
                                <span class="divider"> </span>
                                <div className="col-md-2">
                                    Traffic
                                    <h1><strong>2.2K</strong></h1>
                                    <p style={{color:'green'}}>9.91%</p>
                                    
                                </div>
                                <span class="divider"> </span>
                                <div className="col-md-2">
                                    Traffic Cost
                                    <h1><strong>$22.8K</strong></h1>
                                    <p style={{color:'red'}}>-32.36%</p>
                                </div>
                                <span class="divider"> </span>
                                <div className="col-md-2">
                                    Branded traffic
                                    <h1><strong>0</strong></h1>
                                    <p style={{color:'green'}}>0.0%</p>
                                </div>
                                <span class="divider"> </span>
                                <div className="col-md-2">
                                    Non-Branded traffic
                                    <h1><strong>2.2K</strong></h1>
                                    <p style={{color:'green'}}>9.91%</p>
                                </div>
                            </div>
                            </div>
                            <hr />
                            <div>
                                <br />
                                <h4>Keywords</h4>
                            </div>
                            <div>
                                <Table id="or-module-expand" columns={ORTableCol} dataSource={[...ORtabtable]} rowSelection={{type: selectionTypeORTab,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                            </div>
                            <div>
                                <h4>Organic Pages</h4>
                                
                            </div>
                            <div>
                                <Table id="sample-module-expand" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["bottomRight"]}} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <ModuleExpandTickets/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
        
        </>
    );

}

export default ModuleExpandOrganicResearch;