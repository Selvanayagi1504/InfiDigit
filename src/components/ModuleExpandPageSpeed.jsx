import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect, useRef} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect, createFilter } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col ,Breadcrumb} from "antd";
import {Dropdown, Card} from 'react-bootstrap'
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

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  const filterOption = createFilter({});

function ModuleExpandPageSpeed() {

    const [allOptions, setallOptions] = useState([]);
    const filterAllOptions = (rawInput) => {
    const filteredOptions = allOptions.filter((o) => filterOption(o, rawInput));

        if (filteredOptions.length === 0) {
            filteredOptions.push({ value: rawInput, label: rawInput });
        }

        setcolor(filteredOptions);
    };

    const u = localStorage.getItem('state');
    const [usertype, setusertype] = useState(u);
    const [optionSelected1, setoptionSelected1] = useState(null);
    function handleChange1(selected){
        setoptionSelected1(selected);
        keytableRecord(selected);
    };
    const [colourOptions1, setcolor1] = useState([]);

    const [optionSelected, setoptionSelected] = useState(null);
    function handleChange(selected){
        setoptionSelected(selected);
    };
    const [colourOptions, setcolor] = useState([]);
    const [sidenav,setsidenav] = useState(false);
    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    const [show,setshow]= useState(false);
    const [keytablelist, setkeytablelist] = useState([]);
    const [selectionTypeKeyTable, setSelectionTypeKeyTable] = useState('checkbox');
    const [keyTableCol,setkeyTableCol] = useState([]);
    const [chartdata, setchartdata] = useState([]);
    const [pagespeedtable, setpagespeedtable] = useState([]);
    const [selectionTypePageSpeed, setSelectionTypePageSpeed] = useState('checkbox');
    const [PageSpeedCol,setPageSpeedCol] = useState([]);
    const [URL, setURL] = useState("https://www.infidigit.com/");
    
    function keytableRecord(a){
        var data = keytablelist;
        if(a.length+1 == keytablelist.length-1){
            data = [
                {
                    key:0,
                    url:`${URL}`,
                    datatype:'Score',
                    aug1:"25",
                    aug2:"36",
                    aug3:"47",
                    aug4:"32",
                    aug5:"20",
                    aug6:"57"
                }
            ];
            for(let i=0;i<a.length;i++){
                data.push({
                    key:i,
                    url:`${URL}`,
                    datatype:`${a[i].value}`,
                    aug1:"25",
                    aug2:"36",
                    aug3:"47",
                    aug4:"32",
                    aug5:"20",
                    aug6:"57"
                });
            }
            setkeytablelist(data);
            data=[];
            var sample=['x'];
            for(let i=0;i<a.length;i++){
                sample.push(a[i].value);
            }
            data.push(sample);
        }
        else{
            data.push({
                key:0,
                url:`${URL}`,
                datatype:`${a[a.length-1].value}`,
                aug1:"25",
                aug2:"36",
                aug3:"47",
                aug4:"32",
                aug5:"20",
                aug6:"57"
            });
            setkeytablelist(data);
            data=[];
            var sample=['x'];
            for(let i=0;i<a.length;i++){
                sample.push(a[i].value);
            }
            data.push(sample);
        }
        if(a.length>=1){
            data=[];
            var sample=['x','score',a[0].value];
            data=[
                sample,
                [0, 0, 0],
                [1, 10, 5],
                [2, 23, 15],
                [3, 17, 9],
                [4, 18, 10],
                [5, 9, 5],
                [6, 11, 3],
                [7, 27, 19],
            ];
            setchartdata(data);
        }
        if(a.length==0){
            data=[
                ['x', 'score'],
                ["Aug 1", 25],
                ["Aug 2", 36],
                ["Aug 3", 47],
                ["Aug 4", 32],
                ["Aug 5", 20],
                ["Aug 6", 57],
            ];
            setchartdata(data);
        }
    }

    useEffect(()=>{
        var b=[
            {
                url:`${URL}`,
                datatype:'Score',
                aug1:"25",
                aug2:"36",
                aug3:"47",
                aug4:"32",
                aug5:"20",
                aug6:"57"
            }
        ]
        setkeytablelist(b)
        var data=[
            {key:0,url:"https://www.infidigit.com/", fcp:"2.4", fid:"204", lcp:"3.1", cls:"0.07", performscore:"76"},
            {key:1,url:"https://www.infidigit.com/seo-search-engine-optimization/", fcp:"2.6", fid:"1.5", lcp:"2.1", cls:"0.09", performscore:"65"},
            {key:2,url:"https://www.infidigit.com/digital-marketing-services/", fcp:"3", fid:"204", lcp:"4.1", cls:"0.06", performscore:"54"},
            {key:3,url:"https://www.ezrankings.org/", fcp:"3.4", fid:"164", lcp:"3.5", cls:"0.08", performscore:"89"},
            {key:4,url:"https://www.ezrankings.org/seo-packages.html", fcp:"4", fid:"156", lcp:"2.1", cls:"0.05", performscore:"44"},
        ];
        var color=[
            { value: "https://www.infidigit.com/", label: "https://www.infidigit.com/" },
            { value: "https://www.infidigit.com/seo-search-engine-optimization/", label: "https://www.infidigit.com/seo-search-engine-optimization/" },
            { value: "https://www.infidigit.com/digital-marketing-services/", label: "https://www.infidigit.com/digital-marketing-services/" },
            { value: "https://www.ezrankings.org/", label: "https://www.ezrankings.org/" },
            { value: "https://www.ezrankings.org/seo-packages.html", label: "https://www.ezrankings.org/seo-packages.html" }
        ];
        setcolor(color);
        setallOptions(color);
        color = [
            {value:"FCP", label:"FCP"},
            {value:"FID", label:"FID"},
            {value:"LCP", label:"LCP"},
            {value:"CLS", label:"CLS"},
            {value:"Score", label:"Score"},
        ]
        setcolor1(color)
        setteamList(data);
        var columns = [
            {
                title:"URL",
                dataIndex:"url",
                key:"url"
            },
            {
              title: "FCP",
              dataIndex: "fcp",
              key: "fcp",
            },
            {
                title:"FID",
                dataIndex:"fid",
                key:"fid"
            },
            {
                title:"LCP",
                dataIndex:"lcp",
                key:"lcp"
            },
            {
                title:"CLS",
                dataIndex:"cls",
                key:"cls"
            },
            {
                title:"Performance Score",
                dataIndex:"performscore",
                key:"performscore"
            },
          ];
          setteamcol(columns);
          columns = [
            {
                title:"URL",
                dataIndex:"url",
                key:"url",
                fixed:"left",
                width:200
            },
            {
                title:"Data Type",
                dataIndex:"datatype",
                key:"datatype",
                
                width:100
            },
            {
                title:"1 Aug",
                dataIndex:"aug1",
                key:"aug1",
                width:50
            },
            {
                title:"2 Aug",
                dataIndex:"aug2",
                key:"aug2",
                width:50
            },
            {
                title:"3 Aug",
                dataIndex:"aug3",
                key:"aug3",
                width:50
            },
            {
                title:"4 Aug",
                dataIndex:"aug4",
                key:"aug4",
                width:50
            },
            {
                title:"5 Aug",
                dataIndex:"aug5",
                key:"aug5",
                width:50
            },
            {
                title:"6 Aug",
                dataIndex:"aug6",
                key:"aug6",
                width:50
            },
          ]
          setkeyTableCol(columns);
          columns =[
            {
                title:"URL",
                dataIndex:"url",
                key:"url"
            },
            {
                title:"FCP",
                dataIndex:"fcp",
                key:"fcp"
            },
            {
                title:"Speed Index",
                dataIndex:"speedindex",
                key:"speedindex"
            },
            {
                title:"Time to Interactive",
                dataIndex:"timetointeract",
                key:"timetointeract"
            },
            {
                title:"First Meaningful Paint",
                dataIndex:"frstpaint",
                key:"frstpaint"
            },
            {
                title:"Total Blocking TIme",
                dataIndex:"totalblocktime",
                key:"totalblocktime"
            },
            {
                title:"Server Response Time",
                dataIndex:"serverresponse",
                key:"serverresponse"
            }
          ]
          setPageSpeedCol(columns);
          data = [
              {key:0,url:"https://www.infidigit.com/", fcp:"5.6", speedindex:"14", timetointeract:"20.3", frstpaint:"1.3", totalblocktime:"109", serverresponse:"0.154"},
              {key:1,url:"https://www.ezrankings.org/", fcp:"4.2", speedindex:"12", timetointeract:"18.6", frstpaint:"1.9", totalblocktime:"269", serverresponse:"0.256"},
              {key:2,url:"https://www.infidigit.com/seo-search-engine-optimization/", fcp:"3.3", speedindex:"20", timetointeract:"17.3", frstpaint:"1.2", totalblocktime:"309", serverresponse:"0.354"},
          ]
          setpagespeedtable(data)
          data=[
            ['x', 'score'],
            ["Aug 1", 25],
            ["Aug 2", 36],
            ["Aug 3", 47],
            ["Aug 4", 32],
            ["Aug 5", 20],
            ["Aug 6", 57],
        ];
        setchartdata(data);
    },[])
    function handleModal(){
        setshow(!show);
    }
    function handleURLChange(e){
        setURL(e.target.value)
        console.log(e.target.value)
        setkeytablelist([
            {
                key:0,
                url:e.target.value,
                datatype:'Score',
                aug1:"25",
                aug2:"36",
                aug3:"47",
                aug4:"32",
                aug5:"20",
                aug6:"57"
            }
        ]);
        setoptionSelected1([])
        console.log(keytablelist)
        var data=[
            ['x', 'score'],
            ["Aug 1", 25],
            ["Aug 2", 36],
            ["Aug 3", 47],
            ["Aug 4", 32],
            ["Aug 5", 20],
            ["Aug 6", 57],
        ];
        setchartdata(data);
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
            <section class="outer-wrapper page-speed-main dashboard-seo">
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
                        <a href="/module-expand-page-speed">Page Speed & Core Vitals</a>
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
                            <Tab>Page Speed</Tab>
                            <Tab>Tickets</Tab>
                        </TabList>

                        <TabPanel>
                            <div class="common-flex-div common-mt-24">
                                <label htmlFor="" class="common-mr-24 common-mt-5">Select URL's</label>
                                <ReactSelect
                                    className="da-pa-search"
                                    options={colourOptions}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{
                                        Option
                                    }}
                                    onChange={handleChange}
                                    allowSelectAll={true}
                                    value={optionSelected}
                                    filterOption={() => true}
                                        onInputChange={(e) => filterAllOptions(e)}
                                />
                                <label class=" common-mt-5 common-mr-24">Device Type</label>
                                <select name="" id="device-type" className="common-mr-24">
                                    <option value="Mobile">Mobile</option>
                                    <option value="Desktop">Desktop</option>
                                    <option value="both">Both</option>
                                </select>
                                <a href="#"  class="common-height-40 outline-btn">Search</a>
                            </div>
                            
                            <hr />
                            <Tabs className="tabs-inner-page-speed common-mb-24 common-mt-24">
                                <div class="row">
                                    <div class="col-sm-10 pad-lzero">
                                        <TabList>
                                            <Tab>Core Web Vitals</Tab>
                                            <Tab>Page Speed</Tab>
                                        </TabList>
                                    </div>
                                    <div class="col-sm-2 add-new-btnw">
                                        <a href="#" class="outline-btn">EXPORT</a>
                                    </div>
                                </div>
                                <TabPanel>
                                    <div class="common-mt-24">
                                        <Table id="sample" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:[]}} />
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div class="common-mt-24">
                                        <Table id="sample" columns={PageSpeedCol} dataSource={pagespeedtable} rowSelection={{type: selectionTypePageSpeed,...rowSelection,}} pagination={{position:[]}} />  
                                    </div>
                                </TabPanel>
                            </Tabs>
                            <hr />
                            
                        
                           
                            
                            <div className="row common-mt-24">
                                <div className="col-md-6">
                                {/* <div className="col-md-12"> */}
                                    <div class="row common-mt-24 common-mb-24 common-ml-5">
                                        <div class="col-lg-10 pad-lzero">
                                            <div className="row">
                                                <div className="col-lg-6 common-flex-div">
                                                    <label style={{marginLeft:10+'px'}} class="common-mr-24 common-mt-5" htmlFor="">URL</label>
                                                    <select id="select-url-page-speed" onChange={handleURLChange}>
                                                        <option value="https://www.infidigit.com/">https://www.infidigit.com/</option>
                                                        <option value="https://www.ezrankings.org/">https://www.ezrankings.org/</option>
                                                    </select>
                                                    </div>
                                                <div className="col-lg-6 common-flex-div">
                                                    <label htmlFor="" class="common-mr-24 common-mt-5">Data Type</label>
                                                    <ReactSelect
                                                        className="da-pa-search custom-gogle-trends"
                                                        options={colourOptions1}
                                                        isMulti
                                                        closeMenuOnSelect={false}
                                                        hideSelectedOptions={false}
                                                        components={{
                                                            Option
                                                        }}
                                                        onChange={handleChange1}
                                                        allowSelectAll={true}
                                                        value={optionSelected1}
                                                    />
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="col-lg-1 add-new-btnw">
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
                                        <div className="col-lg-1"></div>
                                    </div>
                                    <Chart
                                        className="line-graph"
                                        height={'400px'}
                                        chartType="LineChart"
                                        data={chartdata}
                                        
                                        options={{
                                            hAxis: {
                                            title: "Keyword",
                                            baselineColor:"red"
                                            },
                                            vAxis: {
                                            title: "Shoes",
                                            },
                                            legend:{
                                                position:"bottom"
                                            }
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                                {/* <div className="col-md-6 table-graph-modules" > */}
                                <div className="col-md-12 common-mt-24">
                                    <Table id="sample" style={{overflow:"hidden"}} className="page-speed-second" columns={keyTableCol} dataSource={[...keytablelist]} rowSelection={{type: selectionTypeKeyTable,...rowSelection,}} pagination={{position:[]}} />
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

export default ModuleExpandPageSpeed;
