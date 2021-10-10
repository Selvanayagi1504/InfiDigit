import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect, useRef} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col, Breadcrumb } from "antd";
import {Dropdown, Card} from 'react-bootstrap'
import Item from "antd/lib/list/Item";
import {ModuleExpandTickets, SideNavBarCustom, SideNavBarCustomClosed} from './index';
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

const rowSelection1 = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  const rowSelection2 = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  const rowSelection3 = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  const rowSelection4 = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };


function ModuleExpandBackLinks() {
    const u = localStorage.getItem('state');
    const [usertype, setusertype] = useState(u);
    const [sidenav,setsidenav] = useState(false);
    const [inputData,setInputData] = useState([{
        id:"1"
    }])
    //tab 1
    // refering domain table
    const [tablelist1, settableList1] = useState([]);
    const [selectionType1, setSelectionType1] = useState('checkbox');
    const [tablecol1,settablecol1] = useState([]);
    //backlist table
    const [tablelist2, settableList2] = useState([]);
    const [selectionType2, setSelectionType2] = useState('checkbox');
    const [tablecol2,settablecol2] = useState([]);
    //backlist table 2
    const [tablelist3, settableList3] = useState([]);
    const [selectionType3, setSelectionType3] = useState('checkbox');
    const [tablecol3,settablecol3] = useState([]);
    //tab 2
    //table
    const [tablelist4, settableList4] = useState([]);
    const [selectionType4, setSelectionType4] = useState('checkbox');
    const [tablecol4,settablecol4] = useState([]);
    useEffect(()=>{
        //refering domain table
        var data1 =[{
            types:"Dofollow",
            count: 493
        },{
            types:"Governmental",
            count: 0
        },{
            types:"Educational",
            count: 3

        },{
            types:".gov",
            count: 0
        },{
            types:".edu",
            count: 3
        },{
            types:".com",
            count: 616
        },{
            types:".net",
            count: 37
        },{
            types:".org",
            count: 29
        }];
        settableList1(data1);
    
        const columns1 = [
            {
              title: "Types of Ref. domains",
              dataIndex: "types",
              key: "types",
              width: "20%"
            },
            {
              title: "",
              dataIndex: "count",
              key: "count",
              width: "10%"
            },
            {
                title: "",
                dataIndex: "",
                key: "",
                width: "70%" 
            }
          ];
        settablecol1(columns1);
        //backlist table
        var data2 =[{
            types:"Dofollow",
            count: 5805
        },{
            types:"Nofollow",
            count: 2088
        },{
            types:"UGC",
            count: 3

        },{
            types:"Sponsored",
            count: 5
        },{
            types:"Text",
            count: 7893
        },{
            types:"Redirect",
            count: 113
        },{
            types:"Image",
            count: 1054
        },{
            types:"Form",
            count: 0
        },{
            types:"Governmental",
            count: 0
        },{
            types:"Educational",
            count: 9
        }];
        settableList2(data2);
    
        const columns2 = [
            {
              title: "Types of Backlinks",
              dataIndex: "types",
              key: "types",
              width: "20%"
            },
            {
              title: "",
              dataIndex: "count",
              key: "count",
              width: "10%"
            },
            {
                title: "",
                dataIndex: "",
                key: "",
                width: "70%" 
            }
          ];
        settablecol2(columns2);
        //backlinks table 2
        
        var data3 =[{
            refering: "https://learningseo.io/",
            dr: 47,
            domain: "1.3k",
            referingDomains: 448,
            linkedDomains: 240,
            ext: 736,
            pageTrafic: "1.2k",
            kw: 1219,
            url: "https://www/infidigit.com/blog/seo-budget",
            seen: "14 Jul 2021 / 7 h ago"

        },{
            refering: "https://dealhack.com/30-most-influential-e-commerce/",
            dr: 60,
            domain: "97.3k",
            referingDomains: 73,
            linkedDomains: 41,
            ext: 103,
            pageTrafic: 885,
            kw: 1103,
            url: "https://www/infidigit.com/",
            seen: "23 Mar 2021 / 9 h ago"

        },{
            refering: "https://neilpatel.com/blog/algorithm-seo-updates/",
            dr: 91,
            domain: "3.4M",
            referingDomains: 92,
            linkedDomains: 25,
            ext: 40,
            pageTrafic: 95,
            kw: 156,
            url: "https://www/infidigit.com/blog/panda-update",
            seen: "29 Jun 2021 / 7 Sep 2021"

        },{
            refering: "https://prnewswire.com/in/news-releases/infidigit-wins-best-search-marketing-campaign-at-the-mcube-awards-2021-867974459",
            dr: 91,
            domain: "3.3M",
            referingDomains: 13,
            linkedDomains: 11,
            ext: 27,
            pageTrafic: "36",
            kw: 13,
            url: "https://www/infidigit.com/",
            seen: "30 Aug 2021 / 1 d ago "

        }];
        settableList3(data3);
    
        const columns3 = [
            {
              title: "Referring page",
              dataIndex: "refering",
              key: "refering",
              width: "5%"
            },
            {
              title: "DR",
              dataIndex: "dr",
              key: "dr",
              width: "5%"
            },
            {
              title: "Domain Traffic",
              dataIndex: "domain",
              key: "domain",
              width: "5%"
            },
            {
              title: "Referring Domains",
              dataIndex: "referingDomains",
              key: "referingDomains",
              width: "5%"
            },
            {
              title: "Linked Domains",
              dataIndex: "linkedDomains",
              key: "linkedDomains",
              width: "5%"
            },
            {
              title: "Ext",
              dataIndex: "ext",
              key: "ext",
              width: "5%"
            },
            {
              title: "Page Trafic",
              dataIndex: "pageTrafic",
              key: "pageTrafic",
              width: "5%"
            },
            {
              title: "Kw",
              dataIndex: "kw",
              key: "kw",
              width: "5%"
            },
            {
              title: "Anchor and Target Url",
              dataIndex: "url",
              key: "url",
              width: "5%"
            },
            {
              title: "First Seen / Last Seen",
              dataIndex: "seen",
              key: "seen",
              width: "2%"
            }
            
          ];
        settablecol3(columns3);
        //tab 2
        //table
        var data4 =[{
            dr: 91,
            rank: 578,
            intersect: 3,
            amazon: 7,
            flipkart: 2,
            youtube: "777k"
        },{
            dr: 90,
            rank: 650,
            intersect: 3,
            amazon: 34,
            flipkart: 2,
            youtube: "156k"
        },{
            dr: 89,
            rank: 1574,
            intersect: 3,
            amazon: 3,
            flipkart: 1,
            youtube: "1.5k"
        },{
            dr: 88,
            rank: 1912,
            intersect: 3,
            amazon: 555,
            flipkart: 75,
            youtube: "354k"
        },{
            dr: 87,
            rank: 2313,
            intersect: 3,
            amazon: 309,
            flipkart: 18,
            youtube: "41k"
        },{
            dr: 85,
            rank: 3761,
            intersect: 3,
            amazon: 3,
            flipkart: 1,
            youtube: "27k"
        }];
        settableList4(data4);
    
        const columns4 = [
            {
              title: "DR",
              dataIndex: "dr",
              key: "dr"
            },
            {
              title: "Ahrefs Rank",
              dataIndex: "rank",
              key: "rank"
            },
            {
                title: "Intersect",
                dataIndex: "intersect",
                key: "intersect"
            },
            {
                title: "www.amazon.in/",
                dataIndex: "amazon",
                key: "amazon" 
            },
            {
                title: "www.flipkart.in/",
                dataIndex: "flipkart",
                key: "flipkart" 
            },{
                title: "www.youtube.in/",
                dataIndex: "youtube",
                key: "youtube"
            }
          ];
        settablecol4(columns4);
    },[])
    
    function addData(){
        // var temp=inputData;
        // var tempLength=temp.length+1;
        // temp.push({id:tempLength});
        // setInputData(temp);
        // console.log(inputData)
        var data = JSON.parse(JSON.stringify(inputData));
        var x = inputData.length + 1;
        data.push({id:x});
        setInputData(data);
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
            <section class="outer-wrapper ModuleExpandBacklinks dashboard-seo">
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
                                <SideNavBarCustomClosed />
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
                    <a href="/module-expand-backlinks">BackLinks</a>
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
                            <Tab>Count of Backlinks</Tab>
                            <Tab>Link Intersect</Tab>
                            <Tab>Tickets</Tab>

                        </TabList>

                        <TabPanel>
                        
                            <div className="row" style={{marginTop:48+'px'}}>
                                <div className="col-lg-4 my-2">
                                    <label style={{marginRight:40+'px'}}>Select Type</label>
                                    <select>
                                        <option value="URL">URL</option>
                                        <option value="Prefix">Prefix</option>
                                        <option value="Domain/*">Domain/*</option>
                                        <option value="*.domain/*">*.domain/*</option>
                                    </select>
                                </div>
                                <div className="col-lg-4 my-2">
                                    <label  style={{marginRight:50+'px'}}>Url</label>
                                    <input  className="  ms-sm-5 ms-lg-0" type="text" />
                                </div>
                                <div className="col-lg-2 my-2"></div>
                                <div className="col-lg-1 my-2">
                                    <button className="outline-btn ">Generate</button>
                                </div>
                            </div>
                        <hr/>
                            <div className="row mt-5 mb-2">
                                <div className="col-lg-8 my-2">
                                    <label style={{marginRight:50+'px'}}>Referring Domains Count</label>
                                    <input  className="  ms-sm-5 ms-lg-0" style={{width:70+'px'}} type="text" disabled value="931" />
                                    
                                </div>
                                
                                <div className="col-lg-2 my-2"></div>
                                <div className="col-lg-1 my-2">
                                    <button className="outline-btn" style={{height:40+'px'}}>Export</button>
                                </div>
                            </div>
                            
                            <Table id="sample-module-expand"  columns={tablecol1} dataSource={tablelist1} rowSelection={{type: selectionType1,...rowSelection1,}} pagination={{position:["topLeft", "bottomRight"]}} />

                            <div className="row mt-2 mb-2">
                                <div className="col-lg-8 my-2">
                                    <label style={{marginRight:50+'px'}}>Referring Backlinks Count</label>
                                    <input  className="  ms-sm-5 ms-lg-0" style={{width:70+'px'}} type="text" disabled value="8028" />
                                </div>
                            </div>
                            <Table id="sample-module-expand"  columns={tablecol2} dataSource={tablelist2} rowSelection={{type: selectionType2,...rowSelection2,}} pagination={{position:["topLeft", "bottomRight"]}} />
                            <div className="row mt-2 mb-2">
                                <div className="col-lg-8 my-2">
                                    <label style={{marginRight:50+'px'}}>Backlinks</label>
                                    
                                </div>
                            </div>
                            <Table id="sample"  columns={tablecol3} dataSource={tablelist3} rowSelection={{type: selectionType3,...rowSelection3,}} pagination={{position:["topLeft", "bottomRight"]}} />
                            
                            
                        </TabPanel>
                        <TabPanel>
                            <h4>Add Competitors</h4>
                            <div className="row">
                                {
                                    
                                   
                                   inputData.map(item=>{
                                       return(
                                           <>
                                           <div id={item.id} className="col-lg-4 my-2">
                                                <label style={{marginRight:40+'px'}}>Select Type</label>
                                                <select>
                                                    <option value="URL">URL</option>
                                                    <option value="Prefix">Prefix</option>
                                                    <option value="Domain/*">Domain/*</option>
                                                    <option value="*.domain/*">*.domain/*</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-4 my-2">
                                                <label  style={{marginRight:50+'px'}}>Url</label>
                                                <input  className="  ms-sm-5 ms-lg-0" type="text" />
                                            </div>
                                            <div className="col-lg-2 my-2"></div>
                                           </>
                                       )
                                   })
                                    
                                }
                                
                                
                                
                                <div className="col-lg-1 my-2">
                                    <button className="outline-btn ">Generate</button>
                                </div>
                            </div>
                            
                                <button className="outline-btn" onClick={()=>addData()}>add</button>
                                <hr/>
                            <div className="row">
                                <Table id="sample-module-expand"  columns={tablecol4} dataSource={tablelist4} rowSelection={{type: selectionType4,...rowSelection4,}} pagination={{position:["topLeft", "bottomRight"]}} />

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

export default ModuleExpandBackLinks;